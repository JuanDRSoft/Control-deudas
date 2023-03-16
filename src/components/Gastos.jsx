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

const PreviewGastos = ({ gasto, eliminarGasto, pagar }) => {
  const { title, price, id, endDate } = gasto;
  const newData = { title, price, id, endDate, status: "PAGO" };

  const leadingActions = () => (
    <div className="w-full">
      <div className="bg-indigo-500 mt-3 h-full flex items-center w-full">
        <LeadingActions>
          <SwipeAction onClick={() => pagar(newData)}>
            {" "}
            <p className="text-center -mt-3 font-bold text-white uppercase">
              Pago Realizado
            </p>
          </SwipeAction>
        </LeadingActions>{" "}
      </div>
    </div>
  );

  const trailingActions = () => (
    <div className="w-full">
      <div className="bg-pink-600 mt-3 h-full flex items-center">
        <TrailingActions>
          <SwipeAction destructive={true} onClick={() => eliminarGasto(id)}>
            <p className="text-center -mt-3 font-bold text-white uppercase">
              Eliminar
            </p>
          </SwipeAction>
        </TrailingActions>
      </div>
    </div>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
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

const PreviewPagos = ({ pago }) => {
  const { title, price, endDate } = pago;

  return (
    <div className="p-5 bg-white flex items-center justify-between w-full rounded-lg mt-3 shadow-lg relative">
      <div>
        <p className="font-bold text-lg">{title}</p>
        <p className="font-bold">
          Plazo:{" "}
          <span className="font-semibold ml-1">{formatearFecha(endDate)}</span>
        </p>
      </div>
      <p className="font-bold text-xl">{formatearTotal(Number(price))}</p>
    </div>
  );
};

const Gastos = ({ gastos, setGastos }) => {
  const eliminarGasto = (id) => {
    const gastosActualizados = gastos.filter((gasto) => gasto.id !== id);
    setGastos(gastosActualizados);
  };

  const pagar = (gasto) => {
    const { id } = gasto;
    if (id) {
      const gastosActualizados = gastos.map((gastoState) =>
        gastoState.id === gasto.id ? gasto : gastoState
      );

      setGastos(gastosActualizados);
    }
  };

  const facturas = gastos.filter((gasto) => gasto.status === "PENDING");
  const pagos = gastos.filter((gasto) => gasto.status === "PAGO");

  return (
    <div className="p-3">
      <h1 className="font-bold text-2xl text-gray-400">Facturas</h1>

      {facturas.map((gasto) => (
        <PreviewGastos
          key={gasto.id}
          gasto={gasto}
          eliminarGasto={eliminarGasto}
          pagar={pagar}
        />
      ))}

      <h1 className="font-bold text-2xl text-gray-400 mt-5">
        Pagos Realizados
      </h1>

      {pagos.map((pago) => (
        <PreviewPagos key={pago.id} pago={pago} />
      ))}
    </div>
  );
};

export default Gastos;
