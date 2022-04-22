export type CreateFormInstanceResult = {
  formInstanceId: string;
  formInstanceToken: string;
  formInstanceUri: string;
};

export type FormInstanceList = {
  id: string;
  name: string;
  lastSaved: string;
  createdAt: string;
  state: string;
};
