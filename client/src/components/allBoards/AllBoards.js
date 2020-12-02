import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './AllBoards.module.css';

import Button from '../button/Button';
import BoardCard from '../boardCard/BoardCard';
import AddBoardModal from '../addBoardModal/AddBoardModal';

const AllBoards = (props) => {
  const [addBoardModalIsOpen, toggleAddBoardModaldisplay] = useState(false);

  return (
    <main className={styles.allBoardContainer}>
      <div className={styles.boardsViewHeader}>
        <p>All Boards</p>
        <Button label='+ Add' onClick={() => toggleAddBoardModaldisplay(true)} />
      </div>
      <div className={styles.boardsViewContentContainer}>
        {props.boards.map(board => <BoardCard {...board} key={board.id}/>)}
      </div>

      {addBoardModalIsOpen ? <AddBoardModal onClickCancel={() => toggleAddBoardModaldisplay(false)}/> : null}
      
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