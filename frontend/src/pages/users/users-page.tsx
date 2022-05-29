import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './users-page.styles';
import { DataColDefType, DataTable } from '~src/components/data-table/data-table';
import { InputSearch } from '~src/components/input-search/input-search';
import { PageHeader } from '~src/components/page-header/page-header';
import { Space } from '~src/components/space/space';
import { userSelector } from '~src/redux/user/user.state';

export const UsersPage = () => {
  const userHeaderDef: DataColDefType[] = [
    {
      dataKey: 'id',
      label: 'ID',
    },
    {
      dataKey: 'name',
      label: 'Name',
    },
    {
      dataKey: 'email',
      label: 'e-Mail',
    },
  ];

  const usersList = useSelector(userSelector.usersList);
  const [filterString, setFilterString] = useState('');

  const filteredUserDataList = useMemo(() => {
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
            width={250}
            onChange={(e) => setFilterString(e.currentTarget.value)}
          />
        </div>
        <Space vertical={20} />
        <DataTable
          width={800}
          dataColDef={userHeaderDef}
          dataList={filteredUserDataList}
          colorizedRow
          columnSeperate
        />
      </div>
    </div>
  );
};
