import React from 'react';
import type { FC } from 'react';

import Bar from './Bar';

import useHooks from './BarGraph.hooks';
import styles from './BarGraph.module.css';
import type { Value } from './BarGraph.hooks';

interface Props {
  values: Value[];
}

const BarGraph: FC<Props> = ({
  values,
}) => {
  const { max } = useHooks(values);

  return (
    <article
      className={styles.Container}
    >
      {values.map(
        ({ value, label }, i) => (
          <Bar
            key={i}
            value={value}
            label={label}
            index={value / max}
            factor={1 / values.length}
          />
        )
      )}
    </article>
  );
};

export default BarGraph;
