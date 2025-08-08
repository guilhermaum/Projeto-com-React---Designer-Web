import PropTypes from "prop-types";

export default function LocalCard({ local }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition-transform">
      <img
        src={local.imagem}
        alt={local.nome}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold">{local.nome}</h2>
        <p className="text-gray-600">{local.resumo}</p>
        <a
          href={`/detalhes/${local.id}`}
          className="text-indigo-600 hover:underline mt-2 block"
        >
          Ver mais
        </a>
      </div>
    </div>
  );
}

LocalCard.propTypes = {
  local: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nome: PropTypes.string.isRequired,
    resumo: PropTypes.string.isRequired,
    imagem: PropTypes.string.isRequired,
  }).isRequired,
};
