import {
  useState,
  useCallback,
  ChangeEventHandler,
} from 'react';

type IncomeHandler = ChangeEventHandler<HTMLInputElement>;

interface Hooks {
  value: string;
  onChange: IncomeHandler;
}

const useHooks = (): Hooks => {
  const [income, setIncome] = useState(
    ''
  );

  const updateIncome: IncomeHandler = useCallback(
    ({ currentTarget }) => {
      const {
        value,
      } = currentTarget as HTMLInputElement;
      setIncome(value);
    },
    []
  );

  return {
    value: income,
    onChange: updateIncome,
  };
};

export default useHooks;
