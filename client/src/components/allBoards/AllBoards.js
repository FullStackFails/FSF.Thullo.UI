import React from 'react';
import PropTypes from 'prop-types';
import styles from './AllBoards.module.css';

import Button from '../button/Button';
import BoardCard from '../boardCard/BoardCard';

const AllBoards = (props) => {
  return (
    <main className={styles.allBoardContainer}>
      <div className={styles.boardsViewHeader}>
        <p>All Boards</p>
        <Button label='+ Add' onClick={() => console.log('Add button clicked')} />
      </div>
      <div className={styles.boardsViewContentContainer}>
        {props.boards.map(board => <BoardCard {...board} />)}
      </div>
    </main>
  );
};

AllBoards.propTypes = {
  boards: PropTypes.array,
};

AllBoards.defaultProps = {
  boards: [],
};

export default AllBoards;