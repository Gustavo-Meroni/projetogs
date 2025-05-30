import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './routes/Home';
import Login from './routes/Login';
import Cadastrar from './routes/Cadastrar';
import Solucao from './routes/Solucao';
import Sobre from './routes/Sobre';
import Error from './routes/Error';
import { useEffect } from 'react';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

export default function App() {
  useEffect(() => {
    if (!window.location.hash) {
      window.location.replace(window.location.pathname + '#/');
    }
  }, []);

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-100">
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
    </HashRouter>
  );
}
