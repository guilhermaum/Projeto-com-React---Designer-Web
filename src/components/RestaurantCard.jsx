import PropTypes from "prop-types";

export default function RestaurantCard({ restaurante }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition-transform mt-4 mb-4">
      <img
        src={restaurante.imagem}
        alt={restaurante.nome}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold">{restaurante.nome}</h2>
        <p className="text-gray-600">{restaurante.resumo}</p>
        <a
          href={`/detalhes/${restaurante.id}`}
          className="text-indigo-600 hover:underline mt-2 block"
        >
          Ver mais
        </a>
      </div>
    </div>
  );
}

RestaurantCard.propTypes = {
  restaurante: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nome: PropTypes.string.isRequired,
    resumo: PropTypes.string.isRequired,
    imagem: PropTypes.string.isRequired,
  }).isRequired,
};
