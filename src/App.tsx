import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Seo from "./components/Seo";
import Home from "./pages/Home";
import Escritorio from "./pages/Escritorio";
import Areas from "./pages/Areas";
import AreaDetalhe from "./pages/AreaDetalhe";
import Equipe from "./pages/Equipe";
import Conteudos from "./pages/Conteudos";
import ArtigoDetalhe from "./pages/ArtigoDetalhe";
import Contato from "./pages/Contato";
import Privacidade from "./pages/Privacidade";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Seo />
      <ScrollToTop />
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:text-ink"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/escritorio" element={<Escritorio />} />
          <Route path="/areas-de-atuacao" element={<Areas />} />
          <Route path="/areas-de-atuacao/:slug" element={<AreaDetalhe />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/conteudos" element={<Conteudos />} />
          <Route path="/conteudos/:slug" element={<ArtigoDetalhe />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/politica-de-privacidade" element={<Privacidade />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </BrowserRouter>
  );
}
