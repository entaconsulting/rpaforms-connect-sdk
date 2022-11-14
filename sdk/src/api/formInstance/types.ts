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
  createdBy: string;
  state: string;
};

export type FormInstanceListResult = {
  result: FormInstanceInfo[];
  continuationToken: string | null;
};

export type FormInstanceQueryOptionsFilter = {
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
  filter?: FormInstanceQueryOptionsFilter;
  orderByField?: string;
  orderByDirection?: string;
  maxItemCount?: number;
  continuationToken?: string | null;
};

export type StageInfo = {
  formInstanceId: string;
  formDefinitionName: string;
  formTitle: string;
  stageName: string;
  stageCreatedAt: string;
  stageLastSaved: string;
  stageState: string;
};

export type StageListResult = {
  result: StageInfo[];
  continuationToken: string | null;
};

export type StageQueryOptionsFilter = {
  stageName?: string;
  createdAtFrom?: Date;
  createdAtTo?: Date;
  lastSavedFrom?: Date;
  lastSavedTo?: Date;
  state?: string;
  formDefinitionId?: string;
  title?: string;
  tags?: Record<string, string>;
};

export type StageQueryOptions = {
  formDefinitionId?: string;
  filter?: StageQueryOptionsFilter;
  orderByField?: string;
  orderByDirection?: string;
  maxItemCount?: number;
  continuationToken?: string | null;
};
