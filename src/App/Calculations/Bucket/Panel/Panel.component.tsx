import React from "react";
import type { FC } from "react";

import styles from "./Panel.module.css";

const Panel: FC = ({ children }) => {
  return <section className={styles.Container}>{children}</section>;
};

export default Panel;
