export type FieldType = 'text' | 'email' | 'textarea';

export interface FormField {
  id: string;
  type: FieldType;
  label: string;
  required: boolean;
}

export interface FormDefinition {
  title: string;
  fields: FormField[];
}