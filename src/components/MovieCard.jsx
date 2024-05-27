"use client";

import React, { useState } from "react";
import Modal from "react-modal";
import Link from "next/link";
 
function MovieCard({ movie }) {

  const plainMovie = movie.toObject();

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true); 
  }

  function closeModal() {
    setIsOpen(false); 
  }
 
  return (
    <div> 
      <div
        className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3 cursor-pointer"
        onClick={openModal}
      >
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src={plainMovie.image}
              alt={plainMovie.title}
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {plainMovie.title}
            </div>
            <p className="mt-2 text-gray-500">{plainMovie.resena}</p>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Movie Modal"
      >
        <h2 className="text-black">{plainMovie.title}</h2>
        <p className="text-black">Año: {plainMovie.age}</p>
        <p className="text-black">Director: {plainMovie.director}</p>
        <p className="text-black">Actor: {plainMovie.actor}</p>
        <p className="text-black">Reseña: {plainMovie.resena}</p>
        <img src={plainMovie.image} alt={plainMovie.title} />
        <iframe
          src={movie.trailer}
          width="560"
          height="315"
          title="Trailer"
        ></iframe>
        <button className="text-black" onClick={closeModal}>
          Cerrar
        </button>
        <br/>
        <Link href={`/movies/${plainMovie._id}`} ><button className="text-black ">Editar</button></Link>
      </Modal>
    </div>
  );
}

export default MovieCard;
