import React from 'react';
import styles from './home-page.styles';
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
  'React-inlineSVG',
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
          <React.Fragment key={item}>
            <li className={styles.item}>
              {item}
            </li>
            {idx !== libItemList.length - 1 && <Space vertical={10} />}
          </React.Fragment>
        ))}
      </ul>
    </div>
  </div>
);
