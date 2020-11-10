import React from 'react';
import '../../index.css';

import TestCoverPhoto from '../../test/images/fantasy_board_img.jpg';
import { usersData } from '../../test/exampleData/exampleData';

import BoardCard from './BoardCard';

const defaultExport = {
  title: 'Board Card',
  component: BoardCard,
};

export default defaultExport;

const Template = (args) => <BoardCard {...args} />;

export const BasicExample = Template.bind({});
BasicExample.args = {
  coverPhoto: TestCoverPhoto,
  title: 'Board Title',
  users: usersData,
};
