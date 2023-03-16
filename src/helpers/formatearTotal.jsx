const formatearTotal = (cantidad) => {
  return cantidad.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
  });
};

export default formatearTotal;
