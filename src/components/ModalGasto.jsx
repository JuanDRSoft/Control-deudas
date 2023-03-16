import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useState } from "react";
import { generarId } from "../helpers/generarId";

const ModalGasto = ({ modal, openModal, gastos, setGastos }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();
  const [endDate, setEndDate] = useState("");

  const submit = () => {
    if ([title, price, endDate].includes("")) {
      return;
    }

    const data = {
      id: generarId(),
      title,
      price,
      date: Date.now(),
      endDate,
      status: "PENDING",
    };
    setGastos([...gastos, data]);
    openModal();
    setTitle("");
    setPrice("");
    setEndDate("");
  };

  return (
    <Transition appear show={modal} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={openModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Agregar Factura
                </Dialog.Title>
                <div className="mt-2">
                  <input
                    placeholder="Nombre de factura"
                    className="mt-3 w-full rounded-md p-2 bg-gray-100 outline-indigo-500"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />

                  <input
                    placeholder="Precio"
                    type="number"
                    className="mt-3 w-full rounded-md p-2 bg-gray-100 outline-indigo-500"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />

                  <input
                    placeholder="Precio"
                    type="date"
                    className="mt-3 w-full rounded-md p-2 bg-gray-100 outline-indigo-500"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>

                <button
                  type="button"
                  className="bg-indigo-500 text-white font-bold mt-5 w-full p-2 rounded-md"
                  onClick={submit}
                >
                  AGREGAR
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalGasto;
