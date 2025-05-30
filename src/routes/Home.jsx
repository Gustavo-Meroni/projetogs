import floodImage from '../assets/flood.png';

export default function Home() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Título e Introdução */}
        <section className="text-center mb-12 mt-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
            Tecnologia contra enchentes
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            A <strong>FloodTech</strong> oferece soluções inovadoras para
            prevenir e monitorar desastres naturais com o uso de inteligência
            artificial, sensores e dados em tempo real.
          </p>
        </section>

        {/* Imagem principal */}
        <div className="rounded-lg overflow-hidden shadow-md mb-12 max-w-4xl mx-auto border border-gray-200">
          <img
            src={floodImage}
            alt="Cidade com enchente"
            className="w-full h-64 sm:h-96 object-cover"
          />
        </div>

        {/* Cards com funcionalidades */}
        <section
          aria-label="Funcionalidades do sistema"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {[
            {
              title: 'Monitoramento em Tempo Real',
              desc: 'Sensores conectados analisam dados de chuva e rios 24/7.',
            },
            {
              title: 'IA e Big Data',
              desc: 'Previsão de enchentes com base em dados históricos e clima.',
            },
            {
              title: 'Mapeamento de Risco',
              desc: 'Identificação de áreas vulneráveis com apoio de mapas e satélites.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-xl shadow p-6 hover:scale-[1.02] transition-transform"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blue-100 to-sky-200 py-12 px-4 text-center rounded-lg shadow mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-blue-900">
            Faça parte da solução!
          </h3>
          <p className="mt-2 text-gray-700 max-w-xl mx-auto">
            Cadastre-se para explorar nossas soluções ou saiba mais sobre o
            projeto.
          </p>
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <a
              href="/cadastrar"
              className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 focus:outline focus:ring-2 focus:ring-blue-400 transition-colors"
            >
              Cadastrar
            </a>
            <a
              href="/solucao"
              className="border border-blue-700 text-blue-700 px-6 py-2 rounded hover:bg-blue-200 focus:outline focus:ring-2 focus:ring-blue-400 transition-colors"
            >
              Ver Soluções
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
