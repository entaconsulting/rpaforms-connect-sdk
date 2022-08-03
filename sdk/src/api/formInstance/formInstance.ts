import { getAppSettings } from "../../configuration/configureSettings";
import getHttpRpaFormsClient from "../httpRpaFormsClient/httpRpaFormsClient";
import {
  CreateFormInstanceResult,
  FormInstanceListResult,
  FormInstanceQueryOptions,
} from "./types";

export const create = async (
  formDefinitionId: string,
  expiresAt?: Date,
  useExistingDraft?: boolean,
  initialValues?: Record<string, unknown>
): Promise<CreateFormInstanceResult> => {
  const endpoint = "FormInstance";
  const response = await getHttpRpaFormsClient().post<{
    sharedFormId: string;
    sharedFormToken: string;
  }>(endpoint, {
    formId: formDefinitionId,
    initialValues,
    expiresAt,
    useExistingDraft,
  });
  return {
    formInstanceId: response.data.sharedFormId,
    formInstanceToken: response.data.sharedFormToken,
    formInstanceUri: buildFormInstanceUri(response.data.sharedFormToken),
  };
};

export const listUserInstances = async (options: FormInstanceQueryOptions) => {
  const { continuationToken = null, ...queryOptions } = options;
  const endpoint = "FormInstance";
  const headers = continuationToken
    ? { "x-form-continuation": continuationToken }
    : undefined;
  const response = await getHttpRpaFormsClient().get<FormInstanceListResult>(
    endpoint,
    {
      params: queryOptions,
      headers,
    }
  );
  return response.data;
};
export const getInstanceUri = async (id: string, expiresAt?: Date) => {
  const endpoint = `FormInstance/GetAccessToken/${id}`;
  const response = await getHttpRpaFormsClient().get<{
    sharedFormId: string;
    sharedFormToken: string;
  }>(endpoint, { params: { expiresAt } });
  return buildFormInstanceUri(response.data.sharedFormToken);
};

export const deleteInstance = async (id: string) => {
  const endpoint = `FormInstance/${id}`;
  const response = await getHttpRpaFormsClient().delete(endpoint);
  return response.data;
};
const buildFormInstanceUri = (token: string) => {
  const { publicFillUrl } = getAppSettings();
  return `${publicFillUrl}?token=${token}`;
};
