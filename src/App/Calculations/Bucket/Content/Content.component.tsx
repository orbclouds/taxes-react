import React from "react";
import type { FC } from "react";

import styles from "./Content.module.css";

const Content: FC = ({ children }) => {
  return <span className={styles.Content}>{children}</span>;
};

export default Content;
