export const formatMoney = (amount: number) => {
  const money = new Intl.NumberFormat("kg-KG", {
    style: "currency",
    currency: "KGS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
  return money;
};
