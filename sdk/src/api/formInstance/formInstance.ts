import { IFormSchema } from "@entaconsulting/form";
import { getAppSettings } from "../../configuration/configureSettings";
import getHttpRpaFormsClient from "../httpRpaFormsClient/httpRpaFormsClient";
import {
  CreateFormInstanceResult,
  FormInstanceListResult,
  FormInstanceQueryOptions,
  StageListResult,
  StageQueryOptions,
} from "./types";

export const create = async (
  formDefinitionId: string,
  expiresAt?: Date,
  useExistingDraft?: boolean,
  initialValues?: Record<string, unknown>,
  customFormDefinition?: {
    schema: IFormSchema;
  }
): Promise<CreateFormInstanceResult> => {
  const endpoint = "FormInstance";
  const response = await getHttpRpaFormsClient().post<{
    sharedFormId: string;
    sharedFormToken: string;
  }>(endpoint, {
    formId: formDefinitionId,
    customFormDefinition,
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

export const listUserStages = async (options: StageQueryOptions) => {
  const { continuationToken = null, ...queryOptions } = options;
  const endpoint = "FormInstance/Stage";
  const headers = continuationToken
    ? { "x-form-continuation": continuationToken }
    : undefined;
  const response = await getHttpRpaFormsClient().get<StageListResult>(
    endpoint,
    {
      params: queryOptions,
      headers,
    }
  );
  return response.data;
};

const buildFormInstanceUri = (token: string) => {
  const { publicFillUrl } = getAppSettings();
  return `${publicFillUrl}?token=${token}`;
};
