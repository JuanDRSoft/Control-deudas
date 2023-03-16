import React from "react";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";

import "react-swipeable-list/dist/styles.css";
import { formatearFecha } from "../helpers/formatearFecha";
import formatearTotal from "../helpers/formatearTotal";

const PreviewGastos = ({ gasto, eliminarGasto }) => {
  const { title, price, id, endDate } = gasto;

  const trailingActions = () => (
    <div className="w-full">
      <div className="bg-pink-600 mt-3 h-full flex items-center">
        <TrailingActions>
          <SwipeAction destructive={true} onClick={() => eliminarGasto(id)}>
            <p className="text-center -mt-3 font-bold text-white">Eliminar</p>
          </SwipeAction>
        </TrailingActions>
      </div>
    </div>
  );

  return (
    <SwipeableList>
      <SwipeableListItem trailingActions={trailingActions()}>
        <div className="p-5 bg-white mt-3 flex items-center justify-between rounded-lg shadow-lg w-full">
          <div>
            <p className="font-bold text-lg">{title}</p>
            <p className="font-bold">
              Plazo:{" "}
              <span className="font-semibold ml-1">
                {formatearFecha(endDate)}
              </span>
            </p>
          </div>
          <p className="font-bold text-xl">{formatearTotal(Number(price))}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

const Gastos = ({ gastos, setGastos }) => {
  const eliminarGasto = (id) => {
    const gastosActualizados = gastos.filter((gasto) => gasto.id !== id);
    setGastos(gastosActualizados);
  };

  return (
    <div className="p-3">
      <h1 className="font-bold text-2xl text-gray-400">Facturas</h1>

      {gastos.map((gasto) => (
        <PreviewGastos
          key={gasto.id}
          gasto={gasto}
          eliminarGasto={eliminarGasto}
        />
      ))}
    </div>
  );
};

export default Gastos;
