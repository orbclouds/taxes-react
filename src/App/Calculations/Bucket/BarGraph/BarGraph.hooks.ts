import { useMemo } from "react";

export interface Value {
  value: number;
  label: string;
}
interface Hooks {
  max: number;
}

const useHooks = (values: Value[]): Hooks => {
  const max = useMemo(() => {
    let maxValue: number | null = null;

    for (let i = 0; i < values.length; i++) {
      const { value, label } = values[i];
      if (maxValue === null || value > maxValue) maxValue = value;
    }

    return maxValue as number;
  }, [values]);
  return { max };
};

export default useHooks;
