import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './users-page.styles';
import { InputSearch } from '~src/components/input-search/input-search';
import { PageHeader } from '~src/components/page-header/page-header';
import { userSelector } from '~src/redux/user/user.state';

export const UsersPage = () => {
  const usersList = useSelector(userSelector.usersList);
  const [filterString, setFilterString] = useState('');

  const filteredUserList = useMemo(() => {
    const lowerCaseFilterString = filterString.toLowerCase();

    return usersList.filter((user) => user.name.toLowerCase().includes(lowerCaseFilterString));
  }, [usersList, filterString]);

  return (
    <div className={styles.root}>
      <PageHeader
        title="Users"
        description="Second page"
      />
      <div className={styles.content}>
        <div>
          <InputSearch
            placeholder="serach user name"
            width={200}
            onChange={(e) => setFilterString(e.currentTarget.value)}
          />
        </div>
        <ul>
          {filteredUserList.map((user) => (
            <li key={user.id}>
              <div>{user.name}</div>
              <div>{user.email}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
