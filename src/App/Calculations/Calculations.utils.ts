interface Tax {
  rate: number;
  cap: number;
}

interface CalculatedTax extends Tax {
  tax: number;
}

export const calculateTaxes = (
  income: number,
  defaultTaxes: Tax[]
): CalculatedTax[] => {
  let taxes: CalculatedTax[] = [] as CalculatedTax[];
  let remainingIncome = income;

  for (let i = 0; i < defaultTaxes.length; i++) {
    if (remainingIncome === 0) break;

    const { rate, cap } = defaultTaxes[i];
    const incomeForBracket = Math.min(
      Number.isNaN(cap) ? remainingIncome : cap,
      remainingIncome
    );
    const tax = incomeForBracket * rate;

    remainingIncome -= incomeForBracket;

    taxes = [
      ...taxes,
      {
        rate,
        cap,
        tax,
      },
    ];
  }

  return taxes;
};
