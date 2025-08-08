import PropTypes from "prop-types";

export default function DescriptionDetails({
  descricao,
  historia,
  localizacao,
}) {
  return (
    <div className="w-full md:w-auto p-4 mt-6">
      <p className="text-gray-700 mb-2 text-2xl text-justify">
        <span className="font-bold">Descrição:</span> {descricao}
      </p>
      <p className="text-gray-700 mb-6 text-2xl text-justify">
        <span className="font-bold">História:</span>{" "}
        {historia || "Informações não disponíveis."}
      </p>

      <p className="text-gray-700 mb-2 text-2xl text-justify">
        <span className="font-bold">Local:</span> {localizacao}
      </p>
    </div>
  );
}

DescriptionDetails.propTypes = {
  descricao: PropTypes.string.isRequired,
  historia: PropTypes.string.isRequired,
  localizacao: PropTypes.string.isRequired,
};
