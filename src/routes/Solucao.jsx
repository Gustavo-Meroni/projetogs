import solutionImage from '../assets/solution-image.jpg';
import { CloudRain, Cpu, AlertCircle, MapPinned } from 'lucide-react';

export default function Solucao() {
  return (
    <div className="bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Título e Introdução */}
        <section className="text-center mt-8 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
            Nossa Solução Tecnológica
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            A FloodTech une sensores inteligentes, inteligência artificial e
            dados em tempo real para oferecer uma resposta rápida e eficaz
            contra enchentes.
          </p>
        </section>

        {/* Imagem centralizada */}
        <div className="rounded-lg overflow-hidden shadow-md mb-12 max-w-4xl mx-auto border border-gray-200">
          <img
            src={solutionImage}
            alt="Tecnologia sendo aplicada em campo"
            className="w-full h-64 sm:h-96 object-cover object-[center_30%]"
          />
        </div>

        {/* Texto abaixo da imagem */}
        <section className="text-center max-w-3xl mx-auto mb-20 text-gray-700 text-lg">
          <p className="mb-4">
            Nossa solução integra dispositivos IoT, redes sem fio e análise
            preditiva para monitorar áreas de risco em tempo real. O sistema
            envia alertas automáticos para autoridades e comunidades afetadas.
          </p>
          <p>
            Utilizamos modelos baseados em Big Data e Machine Learning para
            antecipar eventos críticos e minimizar danos.
          </p>
        </section>

        {/* Cards com etapas da solução */}
        <section className="mb-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            {
              icon: (
                <CloudRain size={36} className="text-blue-700 mx-auto mb-2" />
              ),
              title: 'Sensoriamento',
              desc: 'Coleta contínua de dados de chuvas, rios e solo.',
            },
            {
              icon: <Cpu size={36} className="text-blue-700 mx-auto mb-2" />,
              title: 'Análise com IA',
              desc: 'Modelos preditivos analisam padrões climáticos em tempo real.',
            },
            {
              icon: (
                <AlertCircle size={36} className="text-blue-700 mx-auto mb-2" />
              ),
              title: 'Alertas Inteligentes',
              desc: 'Notificações automáticas via app, SMS ou e-mail.',
            },
            {
              icon: (
                <MapPinned size={36} className="text-blue-700 mx-auto mb-2" />
              ),
              title: 'Mapeamento de Risco',
              desc: 'Visualização das áreas vulneráveis em dashboards interativos.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-xl shadow p-6 hover:scale-[1.03] transition-transform"
            >
              {item.icon}
              <h4 className="text-xl font-semibold text-blue-800 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-100 to-sky-200 py-12 px-4 text-center rounded-lg shadow mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-blue-900">
            Pronto para proteger sua comunidade?
          </h3>
          <p className="mt-2 text-gray-700 max-w-xl mx-auto">
            Descubra como nossas soluções podem ajudar a salvar vidas e
            minimizar danos causados pelas enchentes.
          </p>
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <a
              href="/cadastrar"
              className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 focus:outline focus:ring-2 focus:ring-blue-400 transition-colors"
            >
              Criar Conta
            </a>
            <a
              href="/sobre"
              className="border border-blue-700 text-blue-700 px-6 py-2 rounded hover:bg-blue-200 focus:outline focus:ring-2 focus:ring-blue-400 transition-colors"
            >
              Saiba Mais
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
