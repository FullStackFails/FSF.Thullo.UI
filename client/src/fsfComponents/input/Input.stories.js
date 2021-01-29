import React from 'react';

import Input from './Input';

const defaultExport = {
  title: 'FSF/Input',
  component: Input,
  argTypes: {
    value: "",
    placeholder: "Enter a value"
  },
};

export default defaultExport;

const Template = (args) =>
  <Input
    value={args.value}
    placeholder={args.placeholder}
  />

export const Demo = Template.bind({});
Demo.args = {
  value: "",
  placeholder: "Enter a value..."
};
