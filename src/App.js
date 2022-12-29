import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Carrinho from "./pages/carrinho/carrinho";
import Homepage from "./pages/home/home";
import Produtos from "./pages/produtos/produtos";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
