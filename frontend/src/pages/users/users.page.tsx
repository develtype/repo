import React from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from '~src/redux/user/user.state';

export const UsersPage = () => {
  const usersList = useSelector(userSelector.usersList);

  return (
    <div>
      {usersList.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};
