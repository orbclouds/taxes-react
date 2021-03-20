import React from "react";
import type { FC } from "react";

import { formatDollar } from "@app/utils";

import styles from "./Bar.module.css";
import { getBarStyle } from "./Bar.utils";

interface Props {
  factor: number;
  width?: number;
  value: number;
  label: string;
  index: number;
}

const Bar: FC<Props> = ({ factor, label, value, index, width = 60 }) => {
  return (
    <div
      className={styles.Container}
      style={getBarStyle({ index, width, factor })}
    >
      <div className={styles.Value}>{formatDollar(Math.floor(value))}</div>
      <div className={styles.Bar} />
      <div className={styles.Label}>{label}</div>
    </div>
  );
};

export default Bar;
