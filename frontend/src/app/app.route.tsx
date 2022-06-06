import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '~src/pages/home/home';
import { UsersPage } from '~src/pages/users/users';

export const AppRoute = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/users/*" element={<UsersPage />} />
    <Route path="*" element={<Navigate replace to="/" />} />
  </Routes>
);
