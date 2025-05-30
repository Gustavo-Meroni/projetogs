import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // ícones de menu (pode instalar lucide-react se quiser, ou trocar)

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-600 to-sky-400 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          <Link to="/" onClick={() => setIsOpen(false)}>
            FloodTech
          </Link>
        </h1>

        {/* Botão hamburguer - aparece só no sm e menor */}
        <button
          onClick={toggleMenu}
          className="sm:hidden p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu - oculto no mobile, aparece no sm+ */}
        <nav
          className={`
            flex-col sm:flex-row sm:flex
            absolute sm:static
            top-full left-0 w-full sm:w-auto
            bg-blue-700 sm:bg-transparent
            transition-transform duration-300 ease-in-out
            ${isOpen ? 'translate-y-0' : '-translate-y-full'}
            sm:translate-y-0
            sm:flex
            sm:gap-6
            text-center sm:text-left
            z-50
          `}
          onClick={() => setIsOpen(false)}
        >
          <Link
            to="/"
            className="block px-4 py-2 hover:text-cyan-300 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/login"
            className="block px-4 py-2 hover:text-cyan-300 transition-colors duration-300"
          >
            Login
          </Link>
          <Link
            to="/cadastrar"
            className="block px-4 py-2 hover:text-cyan-300 transition-colors duration-300"
          >
            Cadastrar
          </Link>
          <Link
            to="/solucao"
            className="block px-4 py-2 hover:text-cyan-300 transition-colors duration-300"
          >
            Solução
          </Link>
          <Link
            to="/sobre"
            className="block px-4 py-2 hover:text-cyan-300 transition-colors duration-300"
          >
            Sobre
          </Link>
        </nav>
      </div>
    </header>
  );
}
