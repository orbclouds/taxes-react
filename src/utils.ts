export const formatDollar = (cap: number): string => {
  return '$' + cap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}