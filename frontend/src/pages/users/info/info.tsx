import React, { useEffect, useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './info.styles';
import iconPencil from '~src/assets/icon/icon-pencil.svg';
import { Button } from '~src/components/button/button';
import { Input } from '~src/components/input/input';
import { Space } from '~src/components/space/space';
import { useStateControl } from '~src/hooks/use-state-control';
import { asyncStatusSelector } from '~src/redux/asyncstatus/asyncstatus.state';
import { userAction } from '~src/redux/user/user.action';
import { userSelector } from '~src/redux/user/user.state';
import { validators, validatorsErrkeys } from '~src/utils/validators';

export const UsersInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userId } = useParams<{ userId: string; }>();
  const user = useSelector(userSelector.userById(userId ? +userId : NaN));
  const [editFlag, setEditFlag] = useState(false);

  const [name, setName, nameError] = useStateControl(
    user.name,
    [validators.isRequired],
  );
  const [email, setEmail, emailError] = useStateControl(
    user.email,
  );

  const disabled = !!nameError || !!emailError || (name === user.name && email === user.email);

  const asyncSuccess = useSelector(asyncStatusSelector.asyncSuccess(userAction.updateUser.request.type));
  const [updateClicked, setUpdateClicked] = React.useState(false);

  useEffect(
    () => {
      if (updateClicked && asyncSuccess) setEditFlag(false);
    },
    [asyncSuccess, updateClicked],
  );

  function nameErrorMessage() {
    if (nameError) {
      if (nameError[validatorsErrkeys.required]) {
        return 'name is required';
      }
    }
  }

  function updateUser() {
    setUpdateClicked(true);
    dispatch(userAction.updateUser.request({
      id: user.id,
      name,
      email,
    }));
  }

  return (
    <div className={styles.root}>
      <div className={styles.controlWrapper}>
        <label className={styles.controlLabel}>
          Info
        </label>
        <Space horizonal="auto" />
        {!editFlag
          ? (
            <>
              <Button
                name="List"
                sizeType="sm"
                fontColor="greenBlue"
                outlined
                onClickButton={() => navigate(-1)}
              />
              <Space horizonal={10} />
              <Button
                svgIconSrc={iconPencil}
                name="Edit"
                sizeType="sm"
                fontColor="white"
                onClickButton={() => setEditFlag(true)}
              />
            </>
          )
          : (
            <>
              <Button
                name="Cancel"
                sizeType="sm"
                fontColor="greenBlue"
                outlined
                onClickButton={() => setEditFlag(false)}
              />
              <Space horizonal={10} />
              <Button
                name="Apply"
                sizeType="sm"
                fontColor="white"
                disabled={disabled}
                onClickButton={updateUser}
              />
            </>
          )}
      </div>
      <Space vertical={20} />
      <div className={styles.content}>
        <div className={styles.contentItem}>
          <div className={styles.itemLabel}>
            Name
          </div>
          {!editFlag
            ? (
              <div className={styles.itemValue}>
                {user.name}
              </div>
            )
            : (
              <div className={styles.inputWrapper}>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.currentTarget.value)}
                />
                <div className={styles.validateMessage}>
                  {nameErrorMessage()}
                </div>
              </div>
            )}
        </div>
        <Space vertical={10} />
        <div className={styles.contentItem}>
          <div className={styles.itemLabel}>
            E-mail
          </div>
          {!editFlag
            ? (
              <div className={styles.itemValue}>
                {user.email}
              </div>
            )
            : (
              <div className={styles.inputWrapper}>
                <Input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />
              </div>
            )}
        </div>
      </div>
    </div>
  );
};
