import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from './info.styles';
import { Space } from '~src/components/space/space';
import { userSelector } from '~src/redux/user/user.state';

export const UsersInfo = () => {
  const { userId } = useParams<{ userId: string; }>();
  const user = useSelector(userSelector.userById(userId ? +userId : NaN));

  return (
    <div className={styles.root}>
      <div className={styles.controlWrapper}>
        <label className={styles.controlLabel}>
          Info
        </label>
      </div>
      <Space vertical={20} />
      <div className={styles.content}>
        <div className={styles.contentItem}>
          <div className={styles.itemLabel}>
            Name
          </div>
          <div className={styles.itemValue}>
            {user.name}
          </div>
        </div>
        <Space vertical={10} />
        <div className={styles.contentItem}>
          <div className={styles.itemLabel}>
            E-mail
          </div>
          <div className={styles.itemValue}>
            {user.email}
          </div>
        </div>
      </div>
    </div>
  );
};
