import { useParams } from "react-router-dom";
import { useState } from "react";
import locais from "../data/locais";
import PropTypes from "prop-types";

import HeaderDetails from "../components/HeaderDetails";
import DescriptionDetails from "../components/DescriptionDetails";
import PicturesDetails from "../components/PicturesDetails";
import Map from "../components/Map";

export default function DetalhesLocal() {
  const { id } = useParams();
  const local = locais.find((item) => item.id === parseInt(id));
  const [querVisitar, setQuerVisitar] = useState(false);

  if (!local) {
    return (
      <p className="text-center mt-10 text-red-500">Local não encontrado.</p>
    );
  }

  return (
    <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-6">
      {/* Cabeçalho */}
      <HeaderDetails
        imagem={local.imagem}
        nome={local.nome}
        resumo={local.resumo}
        querVisitar={querVisitar}
        setQuerVisitar={setQuerVisitar}
      />

      {/* Parte superior: Detalhes + Fotos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        {/* Coluna da descrição */}
        <DescriptionDetails
          descricao={local.descricao}
          localizacao={local.localizacao}
          historia={local.historia}
        />

        {/* Coluna das fotos + mapa */}
        <div className="flex flex-col items-center gap-4">
          <PicturesDetails imagens={local.imagensExtras} />

          {/* Título opcional acima do mapa */}
          <div className="text-center text-4xl font-bold mt-4 mb-4">
            Como chegar 📍
          </div>

          <Map latitude={local.latitude} longitude={local.longitude} />
        </div>
      </div>
    </div>
  );
}

DetalhesLocal.propTypes = {
  local: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nome: PropTypes.string.isRequired,
    resumo: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,
    localizacao: PropTypes.string.isRequired,
    imagem: PropTypes.string.isRequired,
    imagensExtras: PropTypes.arrayOf(PropTypes.string),
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  }),
};
