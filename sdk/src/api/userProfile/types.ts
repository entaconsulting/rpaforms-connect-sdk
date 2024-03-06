export type FormDefinition = {
  formDefinitionId: string;
  name: string;
  description?: string;
  disabled: boolean;
  displayName?: string;
  displayDescription?: string;
};

export type FormDefinitionWithTags = FormDefinition & { tags?: string[] };

export type FormDefinitionInfo = {
  formDefinitionId: string;
  name: string;
  description?: string;
  tags?: string[];
};
