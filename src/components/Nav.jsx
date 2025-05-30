import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-600 to-sky-400 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          <Link to="/">FloodTech</Link>
        </h1>

        <nav className="flex gap-2 sm:gap-4 text-sm sm:text-base flex-wrap">
          <Link
            to="/"
            className="hover:text-cyan-300 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/login"
            className="hover:text-cyan-300 transition-colors duration-300"
          >
            Login
          </Link>
          <Link
            to="/cadastrar"
            className="hover:text-cyan-300 transition-colors duration-300"
          >
            Cadastrar
          </Link>
          <Link
            to="/solucao"
            className="hover:text-cyan-300 transition-colors duration-300"
          >
            Solução
          </Link>
          <Link
            to="/sobre"
            className="hover:text-cyan-300 transition-colors duration-300"
          >
            Sobre
          </Link>
        </nav>
      </div>
    </header>
  );
}
