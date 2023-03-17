import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import formatearTotal from "../helpers/formatearTotal";

const Header = ({ setGastos, pending, ready, total }) => {
  const resetApp = () => {
    localStorage.clear("Gastos");
    setGastos([]);
  };

  const porcentaje = () => {
    const pendiente = ((pending / total) * 100).toFixed(2);
    return pendiente;
  };

  return (
    <div className="flex justify-center items-center p-3">
      <div className="bg-white container rounded-lg p-5 shadow-lg">
        <div className="w-64 mb-5 md:mb-0 mx-auto">
          <CircularProgressbar
            text={`${porcentaje()}% Pendiente`}
            value={porcentaje()}
            styles={buildStyles({
              pathColor: "rgb(79 70 229)",
              trailColor: "rgb(229, 231, 235)",
              strokeLinecap: "round",
              textColor: "#000000",
              textSize: "10px",
            })}
          />
        </div>

        <p className="mt-5 font-bold text-lg">
          Pago Pendiente:{" "}
          <span className="font-semibold">{formatearTotal(pending)}</span>
        </p>

        <p className="mt-5 font-bold text-lg">
          Pago Realizado:{" "}
          <span className="font-semibold">{formatearTotal(ready)}</span>
        </p>

        <button
          className="mt-5 w-full bg-pink-600 text-white rounded-lg p-2 font-bold"
          onClick={resetApp}
        >
          RESETEAR APP
        </button>
      </div>
    </div>
  );
};

export default Header;
