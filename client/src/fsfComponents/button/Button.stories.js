import React from 'react';

import Button from './Button';

const defaultExport = {
  title: 'FSF/Button',
  component: Button,
  argTypes: {
    onClick: {action: 'Clicked'},
    type: null,
    size: "medium",
    disabled: true
  },
};

export default defaultExport;

const Template = (args) =>
  <Button
    onClick={args.onClick}
    type={args.type}
    size={args.size}
    disabled={args.disabled}
  >
    {args.children}
  </Button>;

export const Info = Template.bind({});
Info.args = {
  children: "Info",
  type: "info",
  size: "small",
  disabled: false
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
  type: "primary",
  size: "small",
  disabled: false
};

export const Danger = Template.bind({});
Danger.args = {
  children: "Danger",
  type: "danger",
  size: "small",
  disabled: false
};