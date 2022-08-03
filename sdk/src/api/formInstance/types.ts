export type CreateFormInstanceResult = {
  formInstanceId: string;
  formInstanceToken: string;
  formInstanceUri: string;
};

export type FormInstanceInfo = {
  id: string;
  name: string;
  title: string;
  lastSaved: string;
  createdAt: string;
  state: string;
};

export type FormInstanceListResult = {
  items: FormInstanceInfo[];
  continuationToken?: string | null;
};

type FormInstanceQueryOptionsFilter = {
  createdAtFrom?: Date;
  createdAtTo?: Date;
  lastSavedFrom?: Date;
  lastSavedTo?: Date;
  state?: string;
  title?: string;
  tags?: Record<string, string>;
};
export type FormInstanceQueryOptions = {
  formDefinitionId: string;
  filter: FormInstanceQueryOptionsFilter;
  orderByField?: string;
  orderByDirection?: string;
  maxItemCount?: number;
  continuationToken?: string | null;
};
