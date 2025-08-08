import PropTypes from "prop-types";

export default function HeaderDetails({
  imagem,
  nome,
  resumo,
  querVisitar,
  setQuerVisitar,
}) {
  return (
    <div className="bg-green-600 relative flex flex-col sm:flex-row items-center p-6 text-white gap-6 overflow-visible">
      {/* Foto maior */}
      <img
        src={imagem}
        alt={nome}
        className="w-56 h-56 object-cover rounded-full border-4 border-white shadow-md
        relative translate-y-12"
      />

      {/* Texto */}
      <div className="sm:ml-4 mt-4 sm:mt-0 flex-1 translate-y-8 max-w-xl">
        <h1 className="text-5xl font-bold">{nome}</h1>
        <p className="text-2xl opacity-90">{resumo}</p>
      </div>

      {/* Botão alinhado à direita */}
      <button
        onClick={() => setQuerVisitar(!querVisitar)}
        className="ml-auto bg-white font-roboto text-md text-blue-500 px-6 py-3 rounded-full font-semibold mt-4 sm:mt-0 hover:bg-purple-100 transition translate-y-12"
      >
        {querVisitar ? "Adicionado" : "Quero visitar"}
      </button>
    </div>
  );
}

HeaderDetails.propTypes = {
  imagem: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  resumo: PropTypes.string.isRequired,
  querVisitar: PropTypes.bool.isRequired,
  setQuerVisitar: PropTypes.func.isRequired,
};
