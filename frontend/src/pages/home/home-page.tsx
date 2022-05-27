import React from 'react';
import styles from './home-page.styles';
import { PageHeader } from '~src/components/page-header/page-header';

export const HomePage = () => (
  <div className={styles.root}>
    <PageHeader
      title="Home"
      description="First page"
    />
  </div>
);
