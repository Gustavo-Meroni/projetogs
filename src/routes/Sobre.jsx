import connectionImage from '../assets/connection-image.jpg';
import { Target, Eye, HeartHandshake } from 'lucide-react';

export default function Sobre() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <section className="text-center mt-8 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
            Sobre a FloodTech
          </h2>
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-center mb-20">
          <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
            <img
              src={connectionImage}
              alt="Equipe colaborando em soluções tecnológicas"
              className="w-full h-80 sm:h-96 object-cover"
            />
          </div>

          <div className="text-gray-700 text-lg">
            <p className="mb-4">
              A <strong>FloodTech</strong> nasceu com o propósito de salvar
              vidas e reduzir os impactos das enchentes no Brasil, utilizando o
              que há de mais moderno em tecnologia.
            </p>
            <p>
              Nossa atuação combina ciência de dados, sensoriamento remoto e
              inteligência artificial, promovendo soluções eficazes para
              prevenção e resposta a desastres naturais.
            </p>
          </div>
        </section>

        <section className="mb-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          {[
            {
              title: 'Missão',
              icon: <Target className="mx-auto mb-4 text-blue-700" size={40} />,
              desc: 'Utilizar tecnologia para antecipar e mitigar os efeitos das enchentes.',
            },
            {
              title: 'Visão',
              icon: <Eye className="mx-auto mb-4 text-blue-700" size={40} />,
              desc: 'Ser referência em prevenção de desastres naturais no Brasil.',
            },
            {
              title: 'Valores',
              icon: (
                <HeartHandshake
                  className="mx-auto mb-4 text-blue-700"
                  size={40}
                />
              ),
              desc: 'Inovação, ética, sustentabilidade e compromisso com a vida.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-xl shadow p-8 hover:scale-[1.03] transition-transform duration-300"
            >
              {item.icon}
              <h4 className="text-xl font-semibold text-blue-800 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </section>

        <section className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gray-700 text-lg">
            Nossa equipe é formada por engenheiros, analistas e desenvolvedores
            apaixonados por fazer a diferença. Estamos comprometidos em
            construir um futuro mais seguro, resiliente e sustentável.
          </p>
        </section>
      </div>
    </div>
  );
}
