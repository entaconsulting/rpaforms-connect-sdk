export type CreateFormInstanceResult = {
  formInstanceId: string;
  formInstanceToken: string;
  formInstanceUri: string;
};

export type FormInstanceProcessInfo = {
  status: string | null;
  endState: FormInstanceProcessInfoEndState;
  completionMessage: string | null;
  updatedAt: string;
  tags?: Record<string, string>;
};

export type FormInstanceProcessInfoEndState = "OK" | "Error" | null;

export type FormInstanceInfo = {
  id: string;
  name: string;
  title: string;
  lastSaved: string;
  createdAt: string;
  createdBy: string;
  state: string;
  processInfo: FormInstanceProcessInfo;
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
  processInfoStatus?: string;
  processInfoEndState?: string;
  processInfoCompletionMessage?: string;
  processInfoTags?: Record<string, string>;
  processInfoUpdatedAtFrom?: Date;
  processInfoUpdatedAtTo?: Date;
};

export type FormInstanceQueryOptions = {
  formDefinitionId: string;
  filter?: FormInstanceQueryOptionsFilter;
  orderByField?: string;
  orderByDirection?: string;
  maxItemCount?: number;
  continuationToken?: string | null;
};

export type FormInstanceType = "formInstance" | "stageInstance";

export type StageInfo = {
  stageInstanceId: string;
  formInstanceId: string;
  formDefinitionName: string;
  formTitle: string;
  stageName: string;
  stageCreatedAt: string;
  stageLastSaved: string;
  stageState: string;
  type?: FormInstanceType;
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
  formDefinitionName?: string;
};

export type StageQueryOptions = {
  formDefinitionId?: string;
  filter?: StageQueryOptionsFilter;
  orderByField?: string;
  orderByDirection?: string;
  maxItemCount?: number;
  continuationToken?: string | null;
};
