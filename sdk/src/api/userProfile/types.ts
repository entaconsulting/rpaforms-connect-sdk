export type FormDefinition = {
  formDefinitionId: string;
  name: string;
  description?: string;
  disabled: boolean;
  displayName?: string;
  displayDescription?: string;
  canCreate: boolean;
  canViewOwnedInstancesOnly: boolean;
};

export type FormDefinitionInfo = {
  formDefinitionId: string;
  name: string;
  description?: string;
  tags?: string[];
  processInfoTags?: string[];
};
