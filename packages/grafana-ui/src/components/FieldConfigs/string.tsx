import React from 'react';

import { FieldOverrideContext, FieldOverrideEditorProps, FieldConfigEditorProps } from '@grafana/data';
import Forms from '../Forms';

export interface StringFieldConfigSettings {
  placeholder?: string;
  maxLength?: number;
}

export const stringOverrideProcessor = (
  value: any,
  context: FieldOverrideContext,
  settings: StringFieldConfigSettings
) => {
  return `${value}`;
};

export const StringValueEditor: React.FC<FieldConfigEditorProps<string, StringFieldConfigSettings>> = ({
  value,
  onChange,
}) => {
  return <Forms.Input value={value || ''} onChange={e => onChange(e.currentTarget.value)} />;
};

export const StringOverrideEditor: React.FC<FieldOverrideEditorProps<string, StringFieldConfigSettings>> = ({
  value,
  onChange,
}) => {
  return <Forms.Input value={value || ''} onChange={e => onChange(e.currentTarget.value)} />;
};
