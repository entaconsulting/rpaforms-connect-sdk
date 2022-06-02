import getHttpRpaFormsClient from "../httpRpaFormsClient/httpRpaFormsClient";
import { CreateFormInstanceResult, FormInstanceList } from "./types";

export const create = async (
  formDefinitionId: string,
  useExistingDraft?: boolean
): Promise<CreateFormInstanceResult> => {
  const endpoint = "ShareForm";
  const response = await getHttpRpaFormsClient().post<{
    sharedFormId: string;
    sharedFormToken: string;
  }>(endpoint, {
    formId: formDefinitionId,
    useExistingDraft,
  });
  return {
    formInstanceId: response.data.sharedFormId,
    formInstanceToken: response.data.sharedFormToken,
    formInstanceUri: buildFormInstanceUri(response.data.sharedFormToken),
  };
};

export const listUserInstances = async () => {
  const endpoint = "Response";
  const response = await getHttpRpaFormsClient().get<FormInstanceList[]>(
    endpoint
  );
  return response.data;
};
export const getInstanceUri = async (id: string) => {
  const endpoint = `ShareForm/GetSharedKey/${id}`;
  const response = await getHttpRpaFormsClient().get<{
    sharedFormId: string;
    sharedFormToken: string;
  }>(endpoint);
  return buildFormInstanceUri(response.data.sharedFormToken);
};

export const deleteInstance = async (id: string) => {
  const endpoint = `Response/${id}`;
  const response = await getHttpRpaFormsClient().delete(endpoint);
  return response.data;
};
const buildFormInstanceUri = (token: string) =>
  `https://app.rpaforms.com/app/public/fill?token=${token}`;
