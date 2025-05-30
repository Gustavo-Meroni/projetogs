import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100 p-4">
      <h1 className="text-6xl font-bold text-blue-700 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">Ops! Página não encontrada.</p>
      <Link
        to="/"
        className="text-white bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-lg font-semibold transition"
      >
        Voltar para a página inicial
      </Link>
    </div>
  );
}
