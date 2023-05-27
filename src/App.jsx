import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Theme from "./theme/Theme";
import Home from "./page/Home";
import Onas from "./page/Onas";
import Dostavka from "./page/Dostavka";
import Layout from "./layout/Layout";
import Blog from "./page/Blog";
import Korzinka1 from "./page/korzinka/Korzinka1";
import Korzinka2 from "./page/korzinka/Korzinka2";
import Korzinka3 from "./page/korzinka/Korzinka3";
import Korzinka4 from "./page/korzinka/Korzinka4";

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/oнас" element={<Layout><Onas /></Layout>} />
        <Route path="/доставка" element={<Layout><Dostavka /></Layout>} />
        <Route path="/блог" element={<Layout><Blog /></Layout>} />
        <Route path="/корзина" element={<Layout><Korzinka1 /></Layout>} />
        <Route path="/1" element={<Layout><Korzinka1 /></Layout>} />
        <Route path="/2" element={<Layout><Korzinka2 /></Layout>} />
        <Route path="/3" element={<Layout><Korzinka3 /></Layout>} />
        <Route path="/4" element={<Layout><Korzinka4 /></Layout>} />

      </Routes>
    </Theme>

  );
}

export default App;
