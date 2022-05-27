import React from 'react';
import styles from './page-header.styles';

type PropsType = {
  title: string;
  description: string;
}
export const PageHeader = ({
  title,
  description,
}: PropsType) => (
  <div className={styles.root}>
    <label className={styles.title}>{title}</label>
    <span className={styles.description}>{description}</span>
  </div>
);
