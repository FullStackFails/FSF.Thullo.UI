import React from 'react';
import '../../index.css';

import { boardsTestData } from '../../test/exampleData/exampleData';

import AllBoards from './AllBoards';

const defaultExport = {
  title: 'All Boards',
  component: AllBoards,
};

export default defaultExport;

const Template = (args) => <AllBoards {...args} />;

export const BasicExample = Template.bind({});
BasicExample.args = {
  boards: boardsTestData
};
