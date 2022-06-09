import React, { useMemo, useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './list.styles';
import iconDelete from '~src/assets/icon/icon-delete.svg';
import iconRefresh from '~src/assets/icon/icon-refresh.svg';
import { Button } from '~src/components/button/button';
import { DataColDefType, DataTable } from '~src/components/data-table/data-table';
import { IconButton } from '~src/components/icon-button/icon-button';
import { InputSearch } from '~src/components/input-search/input-search';
import { Space } from '~src/components/space/space';
import { CreateUserModal } from '~src/modals/create-user/create-user-modal';
import { DeleteUserModal } from '~src/modals/delete-user/delete-user-modal';
import { userAction } from '~src/redux/user/user.action';
import { userSelector } from '~src/redux/user/user.state';

export const UsersList = () => {
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
    {
      dataKey: 'id',
      label: '',
      cellRender: (data) => <IconButton
        svgIconSrc={iconDelete}
        iconColor="gray"
        noShape
        onClick={(e) => {
          e.stopPropagation();
          cellDeleteBtnClick(data as string);
        }}
      />,
    },
  ];

  function cellDeleteBtnClick(data: string) {
    setTargetId(data);
    setDeleteModalVisible(true);
  }

  const nav = useNavigate();
  const dispatch = useDispatch();
  const usersList = useSelector(userSelector.usersList);
  const [filterString, setFilterString] = useState('');
  const [createModalVisible, setCreateModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [targetId, setTargetId] = useState('');

  const filteredUserDataList = useMemo(
    () => {
      const lowerCaseFilterString = filterString.toLowerCase();

      return usersList.filter((user) => user.name.toLowerCase().includes(lowerCaseFilterString));
    },
    [usersList, filterString],
  );

  const MemoizedCreateModal = useMemo(
    () => <CreateUserModal
      onClose={() => setCreateModalVisible(false)}
    />,
    [createModalVisible],
  );

  const MemoizedDeleteModal = useMemo(
    () => <DeleteUserModal
      id={targetId}
      onClose={() => {
        setDeleteModalVisible(false);
      }}
    />,
    [deleteModalVisible, targetId],
  );

  function refreshButtonClick() {
    dispatch(userAction.fetchUsers.request());
  }

  return (
    <div className={styles.root}>
      <div className={styles.controlWrapper}>
        <InputSearch
          placeholder="serach user name"
          width={250}
          onChange={(e) => setFilterString(e.currentTarget.value)}
        />
        <Space horizonal="auto" />
        <IconButton
          svgIconSrc={iconRefresh}
          sizeType="sm"
          buttonColor="greenBlue"
          iconColor="greenBlue"
          outlined
          onClick={refreshButtonClick}
        />
        <Space horizonal={10} />
        <Button
          name="+ Create"
          sizeType="sm"
          fontColor="white"
          onClick={() => setCreateModalVisible(true)}
        />
      </div>
      <Space vertical={20} />
      <DataTable
        dataColDef={userHeaderDef}
        dataList={filteredUserDataList}
        colorizedRow
        columnSeperate
        onClickRow={(data) => nav(`./${data.id}`)}
      />
      {createModalVisible && MemoizedCreateModal}
      {deleteModalVisible && MemoizedDeleteModal}
    </div>
  );
};
