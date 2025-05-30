import { useState } from 'react';
import { Mail, Lock, User, Phone, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Cadastrar() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('As senhas não coincidem');
      return;
    }
    setError('');
    alert('Cadastro realizado com sucesso!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-slate-100">
      <div className="backdrop-blur-lg border border-gray-200 rounded-2xl shadow-xl max-w-md w-full p-6 sm:p-8 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Cadastre-se na FloodTech
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nome */}
          <div>
            <label
              htmlFor="nome"
              className="block text-gray-800 font-medium mb-2"
            >
              Nome
            </label>
            <div className="flex items-center border border-gray-300 rounded focus-within:ring-2 focus-within:ring-blue-400 bg-white">
              <User className="ml-2 text-gray-400" size={20} />
              <input
                type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
                placeholder="Digite seu nome completo"
                className="flex-1 py-3 px-4 outline-none bg-transparent text-gray-800 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Telefone */}
          <div>
            <label
              htmlFor="telefone"
              className="block text-gray-800 font-medium mb-2"
            >
              Telefone
            </label>
            <div className="flex items-center border border-gray-300 rounded focus-within:ring-2 focus-within:ring-blue-400 bg-white">
              <Phone className="ml-2 text-gray-400" size={20} />
              <input
                type="tel"
                id="telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                required
                placeholder="Digite seu telefone"
                className="flex-1 py-3 px-4 outline-none bg-transparent text-gray-800 placeholder-gray-400"
              />
            </div>
          </div>

          {/* CPF */}
          <div>
            <label
              htmlFor="cpf"
              className="block text-gray-800 font-medium mb-2"
            >
              CPF
            </label>
            <div className="flex items-center border border-gray-300 rounded focus-within:ring-2 focus-within:ring-blue-400 bg-white">
              <CreditCard className="ml-2 text-gray-400" size={20} />
              <input
                type="text"
                id="cpf"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                required
                placeholder="Digite seu CPF"
                className="flex-1 py-3 px-4 outline-none bg-transparent text-gray-800 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-800 font-medium mb-2"
            >
              E-mail
            </label>
            <div className="flex items-center border border-gray-300 rounded focus-within:ring-2 focus-within:ring-blue-400 bg-white">
              <Mail className="ml-2 text-gray-400" size={20} />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Digite seu e-mail"
                className="flex-1 py-3 px-4 outline-none bg-transparent text-gray-800 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Senha */}
          <div>
            <label
              htmlFor="password"
              className="block text-gray-800 font-medium mb-2"
            >
              Senha
            </label>
            <div className="flex items-center border border-gray-300 rounded focus-within:ring-2 focus-within:ring-blue-400 bg-white">
              <Lock className="ml-2 text-gray-400" size={20} />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Crie uma senha"
                className="flex-1 py-3 px-4 outline-none bg-transparent text-gray-800 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Confirmar Senha */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-gray-800 font-medium mb-2"
            >
              Confirmar Senha
            </label>
            <div className="flex items-center border border-gray-300 rounded focus-within:ring-2 focus-within:ring-blue-400 bg-white">
              <Lock className="ml-2 text-gray-400" size={20} />
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="Confirme sua senha"
                className="flex-1 py-3 px-4 outline-none bg-transparent text-gray-800 placeholder-gray-400"
              />
            </div>
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold shadow hover:bg-blue-800 transition-colors"
          >
            Cadastrar
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-700">
          Já tem uma conta?{' '}
          <Link
            to="/login"
            className="text-blue-700 font-semibold hover:underline"
          >
            Faça login
          </Link>
        </p>
      </div>
    </div>
  );
}
