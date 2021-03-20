interface BarStyle {
  height: string;
  width: string;
}

interface Args {
  factor: number;
  width: number;
  index: number;
}

export const getBarStyle = ({
  factor,
  width,
  index,
}: Args): BarStyle => {
  return {
    height: `${index * 100}%`,
    width: `${factor * width}%`,
  };
}