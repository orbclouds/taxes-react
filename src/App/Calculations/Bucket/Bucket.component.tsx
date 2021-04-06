import React from 'react';
import type { FC } from 'react';

import { formatDollar } from '@app/utils';

import Label from './Label';
import Panel from './Panel';
import Content from './Content';
import BarGraph from './BarGraph';

import styles from './Bucket.module.css';
import { formatRate } from './Bucket.utils';

interface Props {
  income: number;
  rate: number;
  cap: number;
  tax: number;
}

const Bucket: FC<Props> = ({
  income,
  rate,
  tax,
  cap,
}) => {
  return (
    <section
      className={styles.Container}
    >
      <Panel>
        <div className={styles.Inner}>
          <div>
            <Label>Tax rate: </Label>
            <Content>
              {formatRate(rate)}
            </Content>
          </div>
          <div>
            <Label>
              Income bracket:{' '}
            </Label>
            <Content>
              {cap === Infinity
                ? 'NA'
                : formatDollar(cap)}
            </Content>
          </div>
        </div>
      </Panel>
      <Panel>
        <BarGraph
          values={[
            {
              value: tax,
              label: 'Taxes paid',
            },
            {
              value: Math.min(
                tax / rate,
                cap
              ),
              label:
                'Income within bracket',
            },
          ]}
        />
      </Panel>
    </section>
  );
};

export default Bucket;
