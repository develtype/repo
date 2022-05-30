import React, {  } from 'react';
import { useSelector } from 'react-redux';
import { UsersRoute } from './users.route';
import styles from './users.styles';
import { PageHeader } from '~src/components/page-header/page-header';
import { userSelector } from '~src/redux/user/user.state';

export const UsersPage = () => {
  const userIsFetched = useSelector(userSelector.usersFetched);

  return (
    <div className={styles.root}>
      <PageHeader
        title="Users"
        description="Second page"
      />
      {userIsFetched && <UsersRoute />}
    </div>
  );
};

