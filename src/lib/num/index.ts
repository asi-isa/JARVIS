export function leadingZero(num: number) {
  return num < 10 ? `0${num}` : `${num}`;
}

export function toDollar(amount: number) {
  return new Intl.NumberFormat("us-US", {
    style: "currency",
    currency: "USD",
    currencyDisplay: "narrowSymbol",
  }).format(amount);
}
