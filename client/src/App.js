import React from 'react';
import './App.css';
import TopNavigation from './components/topNavigation/TopNavigation';
import AllBoards from './components/allBoards/AllBoards';
import { boardsTestData } from './test/exampleData/exampleData';

function App() {
  return (
    <React.Fragment>
      <TopNavigation />
      <AllBoards boards={boardsTestData} />
    </React.Fragment>
  );
}

export default App;
