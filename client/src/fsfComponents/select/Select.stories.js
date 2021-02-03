import React from 'react';

import Select from './Select';

const defaultExport = {
  title: 'FSF/Select',
  component: Select,
  argTypes: {
    value: {label: "Link 1", value: "Link1"},
    options: [
      {label: "Link 1", value: "Link1"},
      {label: "Link 2", value: "Link2"},
      {label: "Link 3", value: "Link3"},
    ],
    placeholder: "Select an option",
    disabled: false,
    onChange: {action: "New Selection"}
  },
};

export default defaultExport;

const Template = (args) =>
  <Select
    value={args.value}
    options={args.options}
    placeholder={args.placeholder}
    disabled={args.disabled}
    onChange={args.onChange}
  />

export const TextDropdown = Template.bind({});
TextDropdown.args = {
  value: {label: "Link 1", value: "Link1"},
  options: [
    {label: "Link 1", value: "Link1"},
    {label: "Link 2", value: "Link2"},
    {label: "Link 3", value: "Link3"},
    {label: "Link 4", value: "Link4"},
    {label: "Link 5", value: "Link5"},
    {label: "Link 6", value: "Link6"},
    // {label: "Link 7", value: "Link7"}
  ],
  placeholder: "Select an option",
  disabled: false,
};