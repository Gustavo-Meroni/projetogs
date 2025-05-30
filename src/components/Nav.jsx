import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-600 to-sky-400 text-white shadow-lg relative">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          <Link to="/" onClick={() => setIsOpen(false)}>
            FloodTech
          </Link>
        </h1>

        {/* Botão hamburguer */}
        <button
          onClick={toggleMenu}
          className="sm:hidden p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu */}
        <nav
          className={`
            sm:flex sm:flex-row sm:items-center
            ${isOpen ? 'block' : 'hidden'}
            absolute sm:static
            top-full right-0
            w-48 sm:w-auto
            bg-blue-300 bg-opacity-90 sm:bg-transparent
            text-center sm:text-left
            z-50
            shadow-lg sm:shadow-none
            gap-1 sm:gap-2 lg:gap-4
            rounded-b-md
          `}
        >
          {['/', '/login', '/cadastrar', '/solucao', '/sobre'].map(
            (path, idx) => {
              const label = {
                '/': 'Home',
                '/login': 'Login',
                '/cadastrar': 'Cadastrar',
                '/solucao': 'Solução',
                '/sobre': 'Sobre',
              }[path];

              return (
                <Link
                  key={idx}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 hover:text-cyan-700 transition-colors duration-300"
                >
                  {label}
                </Link>
              );
            },
          )}
        </nav>
      </div>
    </header>
  );
}
