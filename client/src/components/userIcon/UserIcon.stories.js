import React from 'react';
import '../../index.css';

import UserOnePhoto from '../../test/images/portrait_profile_pic.jpg';

import UserIcon from './UserIcon';

const defaultExport = {
  title: 'User Icon',
  component: UserIcon,
};

export default defaultExport;

const Template = (args) => <UserIcon {...args} />;

export const BasicWithImage = Template.bind({});
BasicWithImage.args = {
  firstName: 'Jade',
  lastName: 'June',
  profilePicture: UserOnePhoto,
};

export const BasicWithoutImage = Template.bind({});
BasicWithoutImage.args = {
  firstName: 'Jade',
  lastName: 'June',
};