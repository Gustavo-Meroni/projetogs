import { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    alert('Login realizado com sucesso!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="backdrop-blur-lg border border-gray-200 p-8 rounded-2xl shadow-xl max-w-md w-full bg-white">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
          Login FloodTech
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-gray-800 font-medium mb-1"
            >
              E-mail
            </label>
            <div className="flex items-center border border-gray-300 rounded focus-within:ring-2 focus-within:ring-blue-400 bg-white">
              <Mail className="ml-3 text-gray-400" size={20} />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Digite seu e-mail"
                className="flex-1 py-2 px-3 outline-none bg-transparent text-gray-800 placeholder-gray-400"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-800 font-medium mb-1"
            >
              Senha
            </label>
            <div className="flex items-center border border-gray-300 rounded focus-within:ring-2 focus-within:ring-blue-400 bg-white">
              <Lock className="ml-3 text-gray-400" size={20} />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Digite sua senha"
                className="flex-1 py-2 px-3 outline-none bg-transparent text-gray-800 placeholder-gray-400"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded-lg font-semibold shadow hover:bg-blue-800 transition-colors"
          >
            Entrar
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-700">
          Ainda não tem uma conta?{' '}
          <Link
            to="/cadastrar"
            className="text-blue-700 font-semibold hover:underline"
          >
            Crie agora
          </Link>
        </p>
      </div>
    </div>
  );
}
