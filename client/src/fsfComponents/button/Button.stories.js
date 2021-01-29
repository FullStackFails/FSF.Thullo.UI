import React from 'react';

import Button from './Button';

const defaultExport = {
  title: 'FSF/Button',
  component: Button,
  argTypes: {
    onClick: {action: 'Clicked'},
    type: null
  },
};

export default defaultExport;

const Template = (args) =>
  <Button
    onClick={args.onClick}
    type={args.type}
  >
    {args.children}
  </Button>;

export const Info = Template.bind({});
Info.args = {
  children: "Info"
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
  type: "primary"
};

export const Danger = Template.bind({});
Danger.args = {
  children: "Danger",
  type: "danger"
};