export type CreateFormInstanceResult = {
  sharedFormId: string;
  sharedFormToken: string;
};

export type FormInstanceList = {
  id: string;
  name: string;
  lastSaved: string;
  createdAt: string;
  state: string;
};
