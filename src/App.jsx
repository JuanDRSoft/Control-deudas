import { useEffect, useState } from "react";
import Gastos from "./components/Gastos";
import Header from "./components/Header";
import ModalGasto from "./components/ModalGasto";

function App() {
  const [modal, setModal] = useState(false);
  const [gastos, setGastos] = useState(
    localStorage.getItem("Gastos")
      ? JSON.parse(localStorage.getItem("Gastos"))
      : []
  );
  const [pending, setPending] = useState(0);
  const [ready, setReady] = useState(0);
  const [total, setTotal] = useState(0);

  const openModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    localStorage.setItem("Gastos", JSON.stringify(gastos) ?? []);
  }, [gastos]);

  useEffect(() => {
    let sumaPending = 0;
    let sumaReady = 0;

    for (let i = 0; i < gastos.length; i++) {
      if (gastos[i].status === "PENDING") {
        sumaPending += Number(gastos[i].price);
      } else if (gastos[i].status === "PAGO") {
        sumaReady += Number(gastos[i].price);
      }
    }

    setPending(sumaPending);
    setReady(sumaReady);
    setTotal(sumaPending + sumaReady);
  }, [gastos]);

  //

  return (
    <div>
      <Header
        setGastos={setGastos}
        pending={pending}
        ready={ready}
        total={total}
      />

      <Gastos gastos={gastos} setGastos={setGastos} />

      <ModalGasto
        modal={modal}
        openModal={openModal}
        gastos={gastos}
        setGastos={setGastos}
      />

      <button
        className="fixed bg-indigo-500 rounded-full p-1 text-white right-2 bottom-2"
        onClick={openModal}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  );
}

export default App;
