import React from "react";
import type { FC, ChangeEventHandler } from "react";

import styles from "./Input.module.css";

interface Props {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Input: FC<Props> = (props) => {
  return (
    <input
      className={styles.Input}
      placeholder="Enter an income to see tax calculations"
      type="number"
      min={0}
      {...props}
    />
  );
};

export default Input;
