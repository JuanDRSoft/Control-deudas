export const formatearFecha = (fecha) => {
  const fechaNueva = new Date(fecha);

  return fechaNueva.toLocaleDateString("es-ES");
};
