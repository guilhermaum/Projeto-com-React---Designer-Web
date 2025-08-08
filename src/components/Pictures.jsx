import { useState, useEffect } from "react";

const fotos = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=800&q=80",
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
    <div className="mt-6 max-w-5xl mx-auto relative select-none">
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
