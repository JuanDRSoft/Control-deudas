import React from "react";
import formatearTotal from "../helpers/formatearTotal";

const Header = ({ setGastos, pending }) => {
  const resetApp = () => {
    localStorage.clear("Gastos");
    setGastos([]);
  };

  return (
    <div className="flex justify-center items-center p-3">
      <div className="bg-white container rounded-lg p-5 shadow-lg">
        <div className="rounded-full p-24 bg-indigo-500 h-10 w-10 mx-auto"></div>

        <p className="mt-5 font-bold text-lg">
          Pago Pendiente:{" "}
          <span className="font-semibold">{formatearTotal(pending)}</span>
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
