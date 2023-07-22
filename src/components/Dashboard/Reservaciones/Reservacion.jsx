import React, { useEffect, useState } from "react";
import { AppContext } from "@/context/StateContext";
import Modal from "../Modal/Modal";

import bote from '../../../assets/Icons/bote.png'
import editar from '../../../assets/Icons/editar.png'
import Image from "next/image";


function Reservacion({ reservacion }) {

  
  const { updateReservacion, deleteReservacion } = AppContext();

  const [showModal, setShowModal] = useState(false);
  const{getReservaciones} = AppContext()

  const handleEditClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [formData, setFormData] = useState({
    name: reservacion.name,
    phone: reservacion.phone,
    email: reservacion.email,
    begin: reservacion.begin,
    end: reservacion.end,
    total: reservacion.total,
  });

  useEffect(() => {
    setFormData({
      name: reservacion.name,
      phone: reservacion.phone,
      email: reservacion.email,
      begin: reservacion.begin,
      end: reservacion.end,
      total: reservacion.total,
    });
  }, [reservacion]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDeleteClick = async () => {
    try {
      
      await deleteReservacion(reservacion._id);
      console.log("Reservacion eliminada");
      getReservaciones()
    } catch (error) {
      console.error("Error al eliminar reservacion:", error);
    }
  };
  

  const handleSwitchChange = (event) => {
    setIsSwitchChecked(event.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedFormData = {
      ...formData,
     
    };
    console.log(updatedFormData);
    try {
      console.log(reservacion._id)
      const respuesta = await updateReservacion(reservacion._id, updatedFormData);
      console.log('la respuesta fue', respuesta)
      
      setShowModal(false);
      
      
    } catch (error) {
      console.log(error)
    }

    await getReservaciones()
   
  };

  console.log(reservacion)

  return (
    <div className="w-[350px] h-[235px] rounded-[7px] border-[2px]">
    <div className="w-full flex flex-row justify-center">
      <div className="w-[90%] flex flex-col gap-1">
        <div className="flex flex-row justify-between">

      <span className="uppercase font-apollo tracking-[2px] mt-4 text-lg">{reservacion.name}</span>
      <button onClick={handleEditClick}><Image src={editar} alt="editar button" className="w-[20px]" /> </button>
        </div>
      <p className="font-apollo uppercase text-sm">{reservacion.checkin} - {reservacion.checkout}</p>
      <p className="font-apollo uppercase text-sm">{reservacion.guests} Húespedes</p>
      <p className="font-apollo uppercase text-sm">PAQUETE{reservacion.plan} </p>
      <p className="font-apollo uppercase text-sm">EXTRA:{reservacion.experience} </p>
      <p className="font-apollo uppercase text-sm">teléfono: {reservacion.tel} </p>
      <p className="font-apollo uppercase text-sm">e-mail: {reservacion.email} </p>
      <div className="flex flex-row justify-between mb-4">
        <div>
      <button onClick={handleDeleteClick} className="mt-2" ><Image src={bote} alt="editar button" className="w-[15px] " /></button>
        
        </div>
      
<div>
<button onClick={handleDeleteClick} className="font-Geometrica tracking-[2px] bg-[#b4a692] px-4 py-1 rounded-[7px]" >
  MAILING
</button>
</div>
</div>

      <Modal show={showModal} onClose={handleCloseModal}>
        <div className="p-6">
          <h2 className="text-xl mb-4">Editar reservacion de {reservacion.name}</h2>
          <div>
            <form
              className="flex flex-col h-full w-full"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="name"
                id="name"
                className="border-2 mt-2"
                placeholder="name"
                onChange={handleInputChange}
                value={formData.name}
                required
              />
              <input
                type="tel"
                name="phone"
                id="phone"
                className="border-2 mt-2"
                placeholder="phone"
                onChange={handleInputChange}
                value={formData.phone}
                required
              />
              <input
                type="email"
                name="email"
                id="email"
                className="border-2 mt-2"
                placeholder="email"
                onChange={handleInputChange}
                value={formData.email}
                required
              />
              <input
                type="number"
                name="people"
                id="people"
                className="border-2 mt-2"
                placeholder="people"
                onChange={handleInputChange}
                value={formData.people}
                required
              />
              <input
                type="date"
                name="begin"
                id="begin"
                className="border-2 mt-2"
                placeholder="begin date"
                onChange={handleInputChange}
                value={formData.begin}
                required
              />
              <input
                type="date"
                name="end"
                id="end"
                className="border-2 mt-2"
                placeholder="end date"
                onChange={handleInputChange}
                value={formData.end}
                required
              />
              <textarea
                type="text"
                name="comments"
                id="comments"
                className="border-2 mt-2"
                placeholder="comments"
                onChange={handleInputChange}
                value={formData.comments}
                required
              />
              <input
                type="number"
                name="total"
                id="total"
                className="border-2 mt-2"
                placeholder="total"
                onChange={handleInputChange}
                value={formData.total}
                required
              />
              
            </form>
          </div>
          <div className="flex flex-row justify-between">
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleSubmit}
            >
              Guardar cambios
            </button>
            <button
              className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleCloseModal}
            >
              Cancelar
            </button>
          </div>
        </div>
      </Modal>
      </div>
    </div>
    </div>
  );
}

export default Reservacion;
