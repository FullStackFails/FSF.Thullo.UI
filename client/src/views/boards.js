import React from 'react';

import TopNavigation from '../components/topNavigation/TopNavigation';
import AllBoards from '../components/allBoards/AllBoards';
import { boardsTestData } from '../test/exampleData/exampleData';

const Boards = () => {
  return (
    <>
      <TopNavigation />
      <AllBoards boards={boardsTestData} />
    </>
  )
}

export default Boards;