"use client";
import React, { ChangeEvent, FormEvent, use } from "react";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";


function FormPage() {
  const [newMovie, setNewMovie] = useState({
    title: "",
    age: "",
    director: "",
    actor: "",
    resena: "",
    image: "",
    trailer: "",
  });
  const router = useRouter();
  const params = useParams();

  const createMovie = async () => {
try {
  const res = await fetch("/api/movie", {
    method: "POST",
    body: JSON.stringify(newMovie),
    headers: {
      "Content-Type": "aplication/json",
    },
  });

  if (res.status === 200) {
    router.push('/') 
    router.refresh()
   }
 
} catch (error)  {
  console.log(error)
}  
  };
 
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await createMovie();
  };

  const handleDelete = async () => { 
   if(window.confirm('¿Estás seguro de eliminar esta película?')) {
   const res = await fetch(`/api/movie/${params.id}`, { 
      method: 'DELETE',
    })
    router.push('/')
    router.refresh()
   }
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  useEffect(() => {

  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200 px-6">
      <div className="p-6 max-w-sm w-full bg-white shadow-md rounded-md">
        <div className="flex justify-center items-center">
          <span className="text-gray-700 font-semibold text-2xl">
            {
              !params.id ? 'Nueva película' : 'Editar película'
            }
          </span>
        </div>
        <form className="mt-4" onSubmit={handleSubmit}>
          <label className="block">
            <span className="text-gray-700 text-sm">Título</span>
            <input
              type="text"
              name="title"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
              placeholder="Título"
              onChange={handleChange}
            />
          </label>
          <label className="block mt-3">
            <span className="text-gray-700 text-sm">Año</span>
            <input
              type="text"
              name="age"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
              placeholder="Año"
              onChange={handleChange}
            />
          </label>
          <label className="block mt-3">
            <span className="text-gray-700 text-sm">Director</span>
            <input
              type="text"
              name="director"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
              placeholder="Director"
              onChange={handleChange}
            />
          </label>
          <label className="block mt-3">
            <span className="text-gray-700 text-sm">Actor</span>
            <input
              type="text"
              name="actor"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
              placeholder="Actor"
              onChange={handleChange}
            />
          </label>
          <label className="block mt-3">
            <span className="text-gray-700 text-sm">Resena</span>
            <textarea
              name="resena"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
              placeholder="Descripción"
              onChange={handleChange}
            ></textarea>
          </label>
          <label className="block mt-3">
            <span className="text-gray-700 text-sm">URL de la imagen</span>
            <input
              type="text"
              name="image"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
              placeholder="URL de la imagen"
              onChange={handleChange}
            />
          </label>
          <label className="block mt-3">
            <span className="text-gray-700 text-sm">URL del tráiler</span>
            <input
              type="text"
              name="trailer"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
              placeholder="URL del tráiler"
              onChange={handleChange}
            />
          </label>
          <div className="mt-6">
            <button
            type="submit"
             className="py-2 px-4 text-center bg-indigo-600 rounded-md w-full text-white text-sm hover:bg-indigo-500">
              Guardar
            </button>
            <button
            type="button"
            onClick={handleDelete}
             className="py-2 px-4 text-center bg-red-600 rounded-md w-full text-white text-sm hover:bg-red-500">
              Eliminar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormPage;
