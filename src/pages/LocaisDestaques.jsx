import locais from "../data/locais";
import restaurantes from "../data/restaurantes";
import LocalCard from "../components/LocalCard";
import Header from "../components/Header";
import Pictures from "../components/Pictures";
import RestaurantCard from "../components/RestaurantCard";
import Footer from "../components/Footer";

export default function LocaisDestaque() {
  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto p-4 bg-white">
        <h1 className="text-4xl font-bold text-center mt-2">
          Locais em Destaque
        </h1>
        <p className="font-roboto mb-6 text-center">
          Descubra os lugares mais visitados da nossa incrível cidade e realize
          experiências únicas e incríveis
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {locais.map((l) => (
            <LocalCard key={l.id} local={l} />
          ))}
        </div>
        <h2 className="text-4xl font-bold text-center mt-8">
          Galeria de fotos
        </h2>
        <p className="font-roboto text-center">
          Confira as fotos que exibem a beleza desse paraíso
        </p>
        <Pictures />
        <h3 className="text-4xl font-bold text-center mt-8">Gastronomia</h3>
        <p className="font-roboto text-center">
          Descubra a gastronomia local e aproveite
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
          {restaurantes.map((r) => (
            <RestaurantCard key={r.id} restaurante={r} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
