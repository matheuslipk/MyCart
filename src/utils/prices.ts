const prefix = '';
export const numberToPriceString = (n:number) => `${prefix}${n.toFixed(2)}`;

export const priceStringToNumber = (t:string) => {
  let n = t.replace(',', '');
  n = n.replace('.', '');
  n = n.replace(prefix, '');
  n = (Number.parseFloat(n) / 100).toFixed(2);
  return Number.parseFloat(n);
};
