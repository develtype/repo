import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './create-user-modal.styles';
import { Button } from '~src/components/button/button';
import { Input } from '~src/components/input/input';
import { Space } from '~src/components/space/space';
import { withModalWrapper } from '~src/hoc/with-modal-wrapper';
import { useStateControl } from '~src/hooks/use-state-control';
import { asyncStatusSelector } from '~src/redux/asyncstatus/asyncstatus.state';
import { userAction } from '~src/redux/user/user.action';
import { validators, validatorsErrkeys } from '~src/utils/validators';

type PropType = {
  onClose: () => void;
}
const CreateUser = ({
  onClose,
}: PropType) => {
  const dispatch = useDispatch();
  const [name, setName, nameError] = useStateControl(
    '',
    [validators.isRequired],
  );
  const [email, setEmail, emailError] = useStateControl(
    '',
  );

  const disabled = !!nameError || !!emailError;

  const asyncSuccess = useSelector(asyncStatusSelector.asyncSuccess(userAction.createUser.request.type));
  const [createClicked, setCreateClicked] = React.useState(false);

  useEffect(
    () => {
      if (createClicked && asyncSuccess) {
        onClose();
      }
    },
    [asyncSuccess, createClicked],
  );

  function nameErrorMessage() {
    if (nameError) {
      if (nameError[validatorsErrkeys.required]) {
        return 'name is required';
      }
    }
  }

  function emailErrorMessage() {
    if (emailError) {
      if (emailError[validatorsErrkeys.required]) {
        return 'email is required';
      }
    }
  }

  function createButtonClick() {
    if (!disabled) {
      setCreateClicked(true);
      dispatch(userAction.createUser.request({
        name,
        email,
      }));
    }
  }

  return (
    <>
      <div className={styles.content}>
        <label>
          Name
        </label>
        <Input
          type="text"
          onChange={(e) => setName(e.currentTarget.value)}
        />
        <div className={styles.validateMessage}>
          {nameErrorMessage()}
        </div>
        <label>
          E-mail
        </label>
        <Input
          type="email"
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <div className={styles.validateMessage}>
          {emailErrorMessage()}
        </div>
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
          name="Create"
          fontColor="white"
          disabled={disabled}
          onClick={createButtonClick}
        />
      </div>
    </>
  );
};

export const CreateUserModal = withModalWrapper('Create User', CreateUser);
