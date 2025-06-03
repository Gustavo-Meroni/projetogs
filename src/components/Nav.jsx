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

        <button
          onClick={toggleMenu}
          className="sm:hidden p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white transition-colors duration-300"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav
          className={`
            flex flex-col sm:flex-row sm:items-center
            absolute sm:static
            top-full right-0
            w-48 sm:w-auto
            bg-blue-300/90 sm:bg-transparent
            text-center sm:text-left
            z-50
            shadow-lg sm:shadow-none
            gap-2 sm:gap-4 lg:gap-6
            rounded-b-md
            overflow-hidden
            transition-all duration-300 ease-in-out
            ${
              isOpen
                ? 'max-h-80 opacity-100'
                : 'max-h-0 opacity-0 sm:max-h-full sm:opacity-100'
            }
          `}
        >
          {[
            { path: '/', label: 'Home' },
            { path: '/login', label: 'Login' },
            { path: '/cadastrar', label: 'Cadastrar' },
            { path: '/solucao', label: 'Solução' },
            { path: '/sobre', label: 'Sobre' },
          ].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 hover:text-cyan-300 transition-colors duration-300 font-medium"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
