import React from 'react';

import Input from './Input';

const defaultExport = {
  title: 'FSF/Input',
  component: Input,
  argTypes: {
    value: "",
    placeholder: "Enter a value",
    disabled: false,
    isValid: true,
    error: "Invalid input"
  },
};

export default defaultExport;

const Template = (args) =>
  <Input
    value={args.value}
    placeholder={args.placeholder}
    disabled={args.disabled}
    isValid={args.isValid}
    error={args.error}
  />

export const Demo = Template.bind({});
Demo.args = {
  value: "",
  placeholder: "Enter a value...",
  disabled: false,
  isValid: true,
  error: "Invalid input"
};
