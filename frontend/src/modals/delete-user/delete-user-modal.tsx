import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './delete-user-modal.styles';
import { Button } from '~src/components/button/button';
import { Space } from '~src/components/space/space';
import { withModalWrapper } from '~src/hoc/with-modal-wrapper';
import { asyncStatusSelector } from '~src/redux/asyncstatus/asyncstatus.state';
import { userAction } from '~src/redux/user/user.action';

type PropType = {
  id: string;
  onClose: () => void;
}
const DeleteUser = ({
  id,
  onClose,
}: PropType) => {
  const dispatch = useDispatch();
  const asyncSuccess = useSelector(asyncStatusSelector.asyncSuccess(userAction.deleteUser.request.type));
  const [deleteClicked, setDeleteClicked] = React.useState(false);

  useEffect(
    () => {
      if (deleteClicked && asyncSuccess) {
        onClose();
      }
    },
    [asyncSuccess, deleteClicked],
  );

  function createButtonClick() {
    setDeleteClicked(true);
    dispatch(userAction.deleteUser.request({
      id,
    }));
  }

  return (
    <>
      <div className={styles.content}>
        This user data wil be deleted. Are you sure?
      </div>
      <div className={styles.footer}>
        <Button
          name="Cancel"
          buttonColor="gray"
          fontColor="gray"
          outlined
          onClick={onClose}
        />
        <Space horizonal={10} />
        <Button
          name="Delete"
          buttonColor="dimedRed"
          fontColor="white"
          onClick={createButtonClick}
        />
      </div>
    </>
  );
};

export const DeleteUserModal = withModalWrapper('Delete Data', DeleteUser);
