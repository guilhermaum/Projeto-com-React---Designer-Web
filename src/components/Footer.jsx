export default function Footer() {
  return (
    <footer className="bg-[#1d2320] text-white py-8">
      {/* Logo central */}
      <div className="flex justify-center mb-6">
        <img
          src="/images/logo_prefeitura.png"
          alt="Prefeitura de Viçosa do Ceará"
          className="h-14"
        />
      </div>

      {/* Linha de informações */}
      <div className="container mx-auto border-t border-gray-600 pt-6 grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Localização */}
        <div className="flex items-start gap-4">
          <div className="bg-green-700 p-3 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 22s8-4.5 8-10A8 8 0 104 12c0 5.5 8 10 8 10z"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-bold">Localização</h3>
            <p>IGREJA DO CÉU, Nº S/N CEP: 62.300-000</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4">
          <div className="bg-green-700 p-3 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12l-4 4-4-4m8 0l-4-4-4 4"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-bold">Email</h3>
            <p>turismo@vicosa.ce.gov.br</p>
          </div>
        </div>

        {/* Links úteis */}
        <div>
          <h3 className="font-bold mb-2">Links úteis</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Prefeitura Municipal de Viçosa do Ceará
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Sec. de Turismo do Estado do Ceará
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Ministério do Turismo
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Linha final */}
      <div className="mt-6 border-t border-gray-600 pt-4 text-center text-sm text-gray-400">
        © 2025 Assesi, Todos os direitos reservados.
      </div>

      {/* Botão voltar ao topo */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-4 right-4 bg-green-600 p-3 rounded-full shadow-lg hover:bg-green-700 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </footer>
  );
}
