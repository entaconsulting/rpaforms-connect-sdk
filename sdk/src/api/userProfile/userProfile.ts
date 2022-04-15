import { getCurrentUsername } from "../../authentication/authentication";
import getHttpRpaFormsClient from "../httpRpaFormsClient/httpRpaFormsClient";
import { FormDefinition, UserProfile } from "./types";

let currentUserProfileName: string | undefined;
let currentUserProfileId: string | undefined;

const getUserProfile = async () => {
  const username = getCurrentUsername();

  if (currentUserProfileName === username && currentUserProfileId)
    return currentUserProfileId;

  currentUserProfileName = undefined;
  const endpoint = "ConnectDashboard";
  const response = await getHttpRpaFormsClient().get<UserProfile>(endpoint);
  currentUserProfileName = username;
  currentUserProfileId = response.data.id;
  return currentUserProfileId;
};

export const formDefinitions = async () => {
  const userProfileId = await getUserProfile();
  const endpoint = `ConnectDashboard/${userProfileId}/launchForms`;
  const response = await getHttpRpaFormsClient().get<FormDefinition[]>(
    endpoint
  );
  return response.data;
};
