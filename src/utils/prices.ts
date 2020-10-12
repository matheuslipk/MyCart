const prefix = '';
export const numberToPrice = (n:number) => `${prefix}${n.toFixed(2)}`;

export const priceToNumber = (t:string) => {
  let n = t.replaceAll(',', '');
  n = n.replaceAll('.', '');
  n = n.replaceAll(prefix, '');
  n = (Number.parseFloat(n) / 100).toFixed(2);
  return Number.parseFloat(n);
};
