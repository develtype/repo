import React from 'react';
import { useSelector } from 'react-redux';
import styles from './users-page.styles';
import { PageHeader } from '~src/components/page-header/page-header';
import { userSelector } from '~src/redux/user/user.state';

export const UsersPage = () => {
  const usersList = useSelector(userSelector.usersList);

  return (
    <div className={styles.root}>
      <PageHeader
        title="Users"
        description="Second page"
      />
      <ul>
        {usersList.map((user) => (
          <li key={user.id}>
            <div>{user.name}</div>
            <div>{user.email}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
