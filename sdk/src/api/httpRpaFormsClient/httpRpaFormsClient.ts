import axios, { AxiosInstance } from "axios";
import { getTokenPopup } from "../../authentication/authentication";
import { getAppSettings } from "../../configuration/configureSettings";
import {
  ApiError,
  ForbiddenResultError,
  isProblemDetails,
  UnauthorizedResultError,
} from "./apiError";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const buildResponseError = (err: any) => {
  if (err.response?.status === 400) {
    const { data } = err.response;
    return new Error(data.detail);
  }
  if (err.response?.status === 404) {
    return new Error(
      "There may be a problem with the backend. Resource not found."
    );
  } else if (err.response?.status === 403) {
    return new ForbiddenResultError();
  } else if (err.response?.status === 401) {
    return new UnauthorizedResultError();
  } else if (err.message === "Network Error") {
    return new Error(
      "Cannot call RPA Forms due to network error, please check your network connection status and try again"
    );
  } else {
    let funcErrorMsg = err.message;
    if (err.response?.data?.error) {
      funcErrorMsg += ": " + err.response.data.error;
    }
    return new Error(funcErrorMsg);
  }
};

let httpRpaFormsClient: AxiosInstance;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const serializeQueryString = (params: any, prefix?: string): string => {
  const values: string[] = [];

  for (const key of Object.keys(params)) {
    const value = params[key];
    if (typeof value !== "object" || value instanceof Date) {
      const stringValue = JSON.stringify(value);
      if (stringValue == undefined || stringValue == null) continue;
      const paramKey = prefix ? `${prefix}.${key}` : key;
      values.push(
        `${paramKey}=${
          stringValue.startsWith('"')
            ? stringValue.substring(1, stringValue.length - 1)
            : stringValue
        }`
      );
    } else {
      const serializedObject = serializeQueryString(
        value,
        prefix ? `${prefix}.${key}` : key
      );
      if (serializedObject) {
        values.push(serializedObject);
      }
    }
  }
  return values.join("&");
};
export const configureHttpRpaFormsClient = () => {
  const { serviceUrl } = getAppSettings();
  httpRpaFormsClient = axios.create({
    baseURL: serviceUrl,
    paramsSerializer: (params) => serializeQueryString(params),
  });

  httpRpaFormsClient.interceptors.request.use(async (options) => {
    const accessToken = await getTokenPopup();
    options.headers = {
      ...options.headers,
      authorization: "Bearer " + accessToken,
    };
    return options;
  });

  httpRpaFormsClient.interceptors.response.use(undefined, (error) => {
    const processedError = isProblemDetails(error)
      ? new ApiError(error)
      : buildResponseError(error);

    return Promise.reject(processedError);
  });
};

const getHttpRpaFormsClient = () => {
  if (!httpRpaFormsClient)
    throw new Error("HttpRpaFormsClient not initialized.");
  return httpRpaFormsClient;
};
export default getHttpRpaFormsClient;
