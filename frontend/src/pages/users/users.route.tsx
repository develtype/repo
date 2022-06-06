import React from 'react';
import { Route, Routes } from 'react-router';
import { UsersInfo } from './info/info';
import { UsersList } from './list/list';

export const UsersRoute = () => (
  <Routes>
    <Route path="">
      <Route index element={<UsersList />} />
      <Route path=":userId" element={<UsersInfo />} />
    </Route>
  </Routes>
);
