import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './create-user-modal.styles';
import { Button } from '~src/components/button/button';
import { Input } from '~src/components/input/input';
import { Space } from '~src/components/space/space';
import { withModalWrapper } from '~src/hoc/with-modal-wrapper';
import { useStateControl } from '~src/hooks/use-state-control';
import { userAction } from '~src/redux/user/user.action';
import { validators, validatorsErrkeys } from '~src/util/validators';

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
      dispatch(userAction.createUser.request({
        name,
        email,
      }));
      onClose();
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
          fontColor="greenBlue"
          outlined
          onClickButton={onClose}
        />
        <Space horizonal={10} />
        <Button
          name="Create"
          fontColor="white"
          disabled={disabled}
          onClickButton={createButtonClick}
        />
      </div>
    </>
  );
};

export const CreateUserModal = withModalWrapper('Create User', CreateUser);
