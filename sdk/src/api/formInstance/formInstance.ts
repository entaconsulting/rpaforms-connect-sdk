import {
  getCurrentAuthType,
  getCurrentUsername,
} from "../../authentication/authentication";
import { getAppSettings } from "../../configuration/configureSettings";
import getHttpRpaFormsClient from "../httpRpaFormsClient/httpRpaFormsClient";
import {
  CreateFormInstanceResult,
  FormInstanceInfo,
  FormInstanceListResult,
  FormInstanceQueryOptions,
  StageInfo,
  StageListResult,
  StageQueryOptions,
} from "./types";

export const create = async (
  formDefinitionId: string,
  expiresAt?: Date,
  useExistingDraft?: boolean,
  initialValues?: Record<string, unknown>,
  customFormDefinition?: {
    schema: unknown;
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
    formInstanceUri: buildFormInstanceUri(response.data.sharedFormId),
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

export const getInstanceUri = async (id: string) => {
  return buildFormInstanceUri(id);
};

export const getStageInstanceUri = async (stageInstanceId: string) => {
  const parts = stageInstanceId.split("_");
  if (parts.length !== 2) throw new Error("invalid stageInstanceId format");

  return buildFormInstanceUri(parts[0]);
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

export const getInstanceInfo = async (formInstanceId: string) => {
  const endpoint = `FormInstance/${formInstanceId}/info`;
  const response = await getHttpRpaFormsClient().get<FormInstanceInfo>(
    endpoint
  );

  return response.data;
};

export const getStageInfo = async (id: string) => {
  const parts = id.split("_");

  const endpoint = `FormInstance/${parts[0]}/stage/info`;
  const queryOptions = { stageIndex: parts?.[1] };
  const response = await getHttpRpaFormsClient().get<StageInfo>(endpoint, {
    params: queryOptions,
  });

  return response.data;
};

export const cloneInstance = async (formInstanceId: string, withAttachments?: boolean) => {
  const endpoint = `FormInstance/${formInstanceId}/clone?withAttachments=${withAttachments ?? false}`;

  const response = await getHttpRpaFormsClient().post<FormInstanceInfo>(
    endpoint
  );

  return response.data;
};

const buildFormInstanceUri = (id: string) => {
  const { publicFillUrl } = getAppSettings();
  return `${publicFillUrl}?fid=${id}&loginHint=${getCurrentUsername()}&auth=${getCurrentAuthType()}`;
};
