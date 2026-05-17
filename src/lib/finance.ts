export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN" }).format(amount);
};

export const calculateEMI = (principal: number, annualRate: number, months: number) => {
  const monthlyRate = annualRate / 100 / 12;
  if (monthlyRate === 0) return principal / months;
  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);
  return Math.round(emi);
};
