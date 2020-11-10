import React from 'react';
import '../../index.css';

import Button from './Button';

const defaultExport = {
  title: 'Button',
  component: Button,
};

export default defaultExport;

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  label: 'Secondary',
};
