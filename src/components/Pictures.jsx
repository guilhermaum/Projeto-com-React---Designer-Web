import { useState, useEffect } from "react";

const fotos = [
  "/images/img-01.jpg",
  "/images/img-02.jpg",
  "/images/img-03.jpg",
  "/images/img-04.jpg",
  "/images/img-05.jpg",
  "https://www.guiadoturismobrasil.com/up/img/1446908713.jpg",
  "https://i0.wp.com/direitoce.com.br/wp-content/uploads/2020/09/Vi%C3%A7osa-do-Cear%C3%A1-1.jpg?fit=800%2C445&ssl=1",
  "https://pousadastop.com.br/photospousadas/pousadavillagevicosa/1.jpg",
  "https://mapacultural.secult.ce.gov.br/files/agent/16510/1888fc4a-6839-4f2e-a86c-b2ac337279cf.jpg",
];

export default function CarrosselFotos() {
  const visibleCount = 3;
  const totalGroups = Math.ceil(fotos.length / visibleCount);

  const [startIndex, setStartIndex] = useState(0);

  const prev = () => {
    setStartIndex((old) =>
      old === 0
        ? (totalGroups - 1) * visibleCount
        : Math.max(old - visibleCount, 0)
    );
  };

  const next = () => {
    setStartIndex((old) =>
      old + visibleCount >= fotos.length ? 0 : old + visibleCount
    );
  };

  // Autoplay: troca a foto a cada 4 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 6000);
    return () => clearInterval(timer);
  }, [startIndex]);

  // Fotos visíveis para o grupo atual
  let visibleFotos = fotos.slice(startIndex, startIndex + visibleCount);
  if (visibleFotos.length < visibleCount) {
    visibleFotos = [
      ...visibleFotos,
      ...fotos.slice(0, visibleCount - visibleFotos.length),
    ];
  }

  // Qual o grupo atual (para os indicadores)
  const currentGroup = Math.floor(startIndex / visibleCount);

  return (
    <div className="mt-6 max-w-full mx-auto relative select-none">
      <div className="flex space-x-4 overflow-hidden rounded-lg">
        {visibleFotos.map((foto, i) => (
          <img
            key={startIndex + i}
            src={foto}
            alt={`Foto ${startIndex + i + 1}`}
            className="w-1/3 object-cover h-64 sm:h-80 shadow-lg transition-transform duration-500 rounded hover:scale-105"
          />
        ))}
      </div>

      {/* Botões */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-blue-500 bg-opacity-40 text-white p-2 w-12 h-12 flex items-center justify-center rounded-full hover:bg-opacity-70 transition"
        aria-label="Foto anterior"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-blue-500 bg-opacity-40 text-white p-2 w-12 h-12 flex items-center justify-center rounded-full hover:bg-opacity-70 transition"
        aria-label="Próxima foto"
      >
        ›
      </button>

      {/* Indicadores */}
      <div className="flex justify-center mt-4 space-x-2">
        {[...Array(totalGroups)].map((_, i) => (
          <button
            key={i}
            onClick={() => setStartIndex(i * visibleCount)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i === currentGroup ? "bg-blue-600" : "bg-gray-300"
            }`}
            aria-label={`Ir para grupo ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
