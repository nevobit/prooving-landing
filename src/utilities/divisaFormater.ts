export const DivisaFormater = (value: any) => {
    const formaterMoney = Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    });
  
    return formaterMoney.format(value);
  };