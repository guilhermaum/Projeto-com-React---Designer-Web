import bgImg from "../assets/bgImg.jpg";

function Header() {
  return (
    <>
      <section
        className="h-[600px] bg-cover bg-top bg-fixed relative text-white"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="relative z-10 flex flex-col min-h-full">
          {/* Barra superior */}
          <div className=" text-white text-xs flex justify-end px-4 py-1">
            <button className="p-1 text-white font-bold bg-gray-400 rounded-full mr-2">
              Confira o clima da semana
            </button>
            <div className="flex space-x-2">
              <img src="/flags/us.png" alt="EN" className="h-4" />
              <img src="/flags/br.png" alt="PT" className="h-4" />
              <img src="/flags/es.png" alt="ES" className="h-4" />
            </div>
          </div>

          {/* Cabeçalho */}
          <header className="shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img src="brasao.png" alt="Brasão" className="h-20" />
              </div>
              <nav className="text-xl space-x-9 text-white font-medium items-end">
                <a href="#">Início</a>
                <a href="#">A cidade</a>
                <a href="#">Experiências</a>
                <a href="#">Onde comer</a>
                <a href="#">Onde ficar</a>
                <a href="#">Novidades</a>
              </nav>
            </div>
          </header>

          {/* Texto deslocado para esquerda */}
          <div className="flex-1 flex flex-col justify-center items-start px-8 md:px-20 text-left">
            <h1 className="text-3xl md:text-6xl font-bold mb-4 max-w-xl">
              Bem-vindos a Viçosa do Ceará!
            </h1>
            <p className="max-w-lg mb-6 text-lg md:text-xl">
              Conheça um lado diferente do Ceará como você nunca viu. Viçosa te
              leva para um lugar mágico e encantador!
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold">
              Confira nossas experiências
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
