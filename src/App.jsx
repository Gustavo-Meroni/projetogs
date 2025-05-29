import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './routes/Home';
import Login from './routes/Login';
import Cadastrar from './routes/Cadastrar';
import Solucao from './routes/Solucao';
import Sobre from './routes/Sobre';
import Error from './routes/Error';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastrar" element={<Cadastrar />} />
            <Route path="/solucao" element={<Solucao />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
