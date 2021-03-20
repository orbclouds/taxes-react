import React from "react";
import type { FC } from "react";

import Bucket from "./Bucket";

import { TAXES } from "./Calculations.const";
import styles from "./Calculations.module.css";
import { calculateTaxes } from "./Calculations.utils";

interface Props {
  income: number;
}

const Calculations: FC<Props> = ({ income }) => {
  const taxes = calculateTaxes(income, TAXES);

  return (
    <section className={styles.Container}>
      {taxes.map((props, i) => (
        <Bucket key={i} income={income} {...props} />
      ))}
    </section>
  );
};

export default Calculations;
