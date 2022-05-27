import React from 'react';
import { AppRouter } from './app.router';
import { NavBar } from '~src/components/navbar/navbar';

export const App = () => (
  <>
    <NavBar />
    <AppRouter />
  </>
);
