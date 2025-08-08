import { useParams } from "react-router-dom";
import { useState } from "react";
import locais from "../data/locais";

export default function DetalhesLocal() {
  const { id } = useParams();
  const local = locais.find((l) => l.id === Number(id));
  const [imagemAtual, setImagemAtual] = useState(0);

  if (!local) return <p>Local não encontrado.</p>;

  const proximaImagem = () => {
    setImagemAtual((prev) =>
      prev === local.imagensExtras.length - 1 ? 0 : prev + 1
    );
  };

  const imagemAnterior = () => {
    setImagemAtual((prev) =>
      prev === 0 ? local.imagensExtras.length - 1 : prev - 1
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold">{local.nome}</h1>
      <p className="text-gray-700">{local.descricao}</p>

      {/* Carrossel Manual */}
      <div className="relative w-full h-80">
        <img
          src={local.imagensExtras[imagemAtual]}
          alt={`${local.nome} ${imagemAtual}`}
          className="w-full h-full object-cover rounded-xl shadow-md"
        />

        {/* Botão Anterior */}
        <button
          onClick={imagemAnterior}
          className="absolute top-1/2 -translate-y-1/2 left-4 bg-black bg-opacity-50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-70"
        >
          ‹
        </button>

        {/* Botão Próximo */}
        <button
          onClick={proximaImagem}
          className="absolute top-1/2 -translate-y-1/2 right-4 bg-black bg-opacity-50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-70"
        >
          ›
        </button>

        {/* Marcadores */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {local.imagensExtras.map((_, index) => (
            <button
              key={index}
              onClick={() => setImagemAtual(index)}
              className={`w-3 h-3 rounded-full ${
                index === imagemAtual ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Botão Quero Visitar */}
      <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
        Quero visitar
      </button>
    </div>
  );
}
