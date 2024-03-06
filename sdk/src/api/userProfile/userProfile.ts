import getHttpRpaFormsClient from "../httpRpaFormsClient/httpRpaFormsClient";
import {
  FormDefinition,
  FormDefinitionInfo,
} from "./types";

export const forms = async () => {
  const endpoint = `ConnectDashboard/forms`;
  const response = await getHttpRpaFormsClient().get<FormDefinition[]>(
    endpoint
  );
  return response.data;
};

export const formDefinitionsInfo = async (formDefinitionId: string) => {
  const endpoint = `ConnectDashboard/forms/${formDefinitionId}/info`;
  const response = await getHttpRpaFormsClient().get<FormDefinitionInfo>(
    endpoint
  );
  return response.data;
};
