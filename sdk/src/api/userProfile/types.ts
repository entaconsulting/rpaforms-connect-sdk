export type FormDefinition = {
  formDefinitionId: string;
  name: string;
  description?: string;
  disabled: boolean;
  tags?: string[];
  displayName?: string;
  displayDescription?: string;
};
