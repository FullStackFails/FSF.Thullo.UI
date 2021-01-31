import React from 'react';

import Dropdown from './Dropdown';

const defaultExport = {
  title: 'FSF/Dropdown',
  component: Dropdown,
  argTypes: {
    header: "Dropdown",
    options: [
      {label: "Link 1", value: "Link1", onClick: () => console.log("Clicked Link 1")},
      {label: "Link 2", value: "Link2", onClick: () => console.log("Clicked Link 2")},
      {label: "Link 3", value: "Link3", onClick: () => console.log("Clicked Link 3")},
    ],
    disabled: false,
  },
};

export default defaultExport;

const Template = (args) =>
  <Dropdown
    header={args.header}
    options={args.options}
    disabled={args.disabled}
  />

export const TextDropdown = Template.bind({});
TextDropdown.args = {
  header: "Dropdown Menu",
  options: [
    {label: "Link 1", value: "Link1", onClick: () => console.log("Clicked Link 1")},
    {label: "Link 2", value: "Link2", onClick: () => console.log("Clicked Link 2")},
    {label: "Link 3", value: "Link3", onClick: () => console.log("Clicked Link 3")},
    {label: "Link 4", value: "Link4", onClick: () => console.log("Clicked Link 4")},
    {label: "Link 5", value: "Link5", onClick: () => console.log("Clicked Link 5")},
    {label: "Link 6", value: "Link6", onClick: () => console.log("Clicked Link 6")},
    // {label: "Link 7", value: "Link7", onClick: () => console.log("Clicked Link 7")}
  ],
  disabled: false,
};