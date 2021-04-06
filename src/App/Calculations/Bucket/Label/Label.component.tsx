import React from 'react';
import type { FC } from 'react';

import styles from './Label.module.css';

const Label: FC = ({ children }) => {
  return (
    <span className={styles.Label}>
      {children}
    </span>
  );
};

export default Label;
