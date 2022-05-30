import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './users-page.styles';
import { Button } from '~src/components/button/button';
import { DataColDefType, DataTable } from '~src/components/data-table/data-table';
import { InputSearch } from '~src/components/input-search/input-search';
import { PageHeader } from '~src/components/page-header/page-header';
import { Space } from '~src/components/space/space';
import { CreateUserModal } from '~src/modals/create-user/create-user-modal';
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
  const [createModalVisible, setCreateModalVisible] = useState(false);

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
        <div className={styles.controlWrapper}>
          <InputSearch
            placeholder="serach user name"
            width={250}
            onChange={(e) => setFilterString(e.currentTarget.value)}
          />
          <Button
            name="+ Create"
            sizeType="sm"
            fontColor="white"
            onClickButton={() => setCreateModalVisible(true)}
          />
        </div>
        <Space vertical={20} />
        <DataTable
          dataColDef={userHeaderDef}
          dataList={filteredUserDataList}
          colorizedRow
          columnSeperate
        />
      </div>
      {createModalVisible && (
        <CreateUserModal
          onClose={() => setCreateModalVisible(false)}
        />
      )}
    </div>
  );
};
