import getHttpRpaFormsClient from "../httpRpaFormsClient/httpRpaFormsClient";
import { CreateFormInstanceResult, FormInstanceList } from "./types";

export const create = async (
  formDefinitionId: string,
  useExistingDraft?: boolean
) => {
  const endpoint = "ShareForm";
  const response = await getHttpRpaFormsClient().post<CreateFormInstanceResult>(
    endpoint,
    {
      formId: formDefinitionId,
      useExistingDraft,
    }
  );
  return response.data;
};

export const listUserInstances = async () => {
  const endpoint = "Response";
  const response = await getHttpRpaFormsClient().get<FormInstanceList[]>(
    endpoint
  );
  return response.data;
};
