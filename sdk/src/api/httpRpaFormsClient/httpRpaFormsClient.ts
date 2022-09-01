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

export const configureHttpRpaFormsClient = () => {
  const { serviceUrl } = getAppSettings();
  httpRpaFormsClient = axios.create({
    baseURL: serviceUrl,
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
