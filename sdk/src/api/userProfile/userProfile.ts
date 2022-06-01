import getHttpRpaFormsClient from "../httpRpaFormsClient/httpRpaFormsClient";
import { FormDefinition } from "./types";

export const formDefinitions = async () => {
  const endpoint = `ConnectDashboard/launchForms`;
  const response = await getHttpRpaFormsClient().get<FormDefinition[]>(
    endpoint
  );
  return response.data;
};
