import React from "react";
import type { FC } from "react";

import Orb from "@app/Orb";

import Input from "./Input";
import Calculations from "./Calculations";

import useHooks from "./App.hooks";
import styles from "./App.module.css";

const App: FC = () => {
  const { ...inputProps } = useHooks();
  const income = parseInt(inputProps.value);

  return (
    <>
      <Orb />
      <main className={styles.Container}>
        <header className={styles.Header}>
          <Input {...inputProps} />
        </header>
        <Calculations income={Number.isNaN(income) ? 0 : income} />
      </main>
    </>
  );
};

export default App;
