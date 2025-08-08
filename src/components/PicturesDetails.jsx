import { useState } from "react";
import PropTypes from "prop-types";

export default function PicturesDetails({ imagens }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!imagens || imagens.length === 0) return null;

  return (
    <div className="w-full items-center mt-6">
      {/* Imagem principal */}
      <div className="w-full h-64 relative overflow-hidden rounded-lg shadow">
        <img
          src={imagens[currentIndex]}
          alt={`Imagem ${currentIndex + 1}`}
          className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Indicadores centralizados */}
      <div className="flex justify-center mt-3 gap-2">
        {imagens.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

PicturesDetails.propTypes = {
  imagens: PropTypes.arrayOf(PropTypes.string),
};
