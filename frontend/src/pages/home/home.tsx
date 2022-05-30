import React, { Fragment } from 'react';
import styles from './home.styles';
import { PageHeader } from '~src/components/page-header/page-header';
import { Space } from '~src/components/space/space';

const libItemList = [
  'TypeScript',
  'React',
  'Redux',
  'Redux-toolkit',
  'Redux-observable',
  'RxJS',
  'Emotion',
];

export const HomePage = () => (
  <div className={styles.root}>
    <PageHeader
      title="Home"
      description="First page"
    />
    <div className={styles.content}>
      <label className={styles.contentTitle}>
        Used Library List
      </label>
      <Space vertical={20} />
      <ul className={styles.list}>
        {libItemList.map((item, idx) => (
          <Fragment key={item}>
            <li className={styles.item}>
              {item}
            </li>
            {idx !== libItemList.length - 1 && <Space vertical={10} />}
          </Fragment>
        ))}
      </ul>
    </div>
  </div>
);
