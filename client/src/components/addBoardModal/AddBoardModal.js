import React, {useState} from 'react';
import styles from './AddBoard.module.css';

import Modal from '../modal/Modal';
import Input from '../reuseableComponents/input/Input';
import Button from '../button/Button';

const AddBoardModal = ({onClickCancel, onClickSubmit}) => {
  const [title, setTitle] = useState("")

  return (
    <>
      <Modal onClickClose={onClickCancel}>
        <div className={styles.container}>
          <img src="https://i.ebayimg.com/images/g/fkwAAMXQya1Q7h1o/s-l640.jpg" alt="No Image" className={styles.boardImage} />
          
          <Input placeholder='Add board title' value={title} onChange={setTitle} />
          
          <div className={styles.buttonGroup}>
            <Button label="Cover" type="secondary"/>
            <Button label="Private" type="secondary"/>
          </div>

          <div className={`${styles.buttonGroup} ${styles.buttonGroupBottom}`}>
            <Button label="Cancel" type="borderless" onClick={onClickCancel}/>
            <Button label="Create" />
          </div>
        </div>
      </Modal>
    </>
  )
}

export default AddBoardModal;