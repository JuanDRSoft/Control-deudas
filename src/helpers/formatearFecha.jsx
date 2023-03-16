export const formatearFecha = (fecha) => {
  const date = new Date(fecha);
  const dia = date.getDate() + 1;
  const mes = date.getMonth() + 1;
  const año = date.getFullYear();

  return `${dia < 10 ? "0" + dia : dia}-${mes < 10 ? "0" + mes : mes}-${año}`;
};
