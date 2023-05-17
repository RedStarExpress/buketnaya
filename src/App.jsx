import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Theme from "./theme/Theme";
import Home from "./page/Home";
import Onas from "./page/Onas";
import Dostavka from "./page/Dostavka";
import Layout from "./layout/Layout";
import Blog from "./page/Blog";

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/oнас" element={<Layout><Onas /></Layout>} />
        <Route path="/доставка" element={<Layout><Dostavka /></Layout>} />
        <Route path="/блог" element={<Layout><Blog /></Layout>} />
      </Routes>
    </Theme>

  );
}

export default App;
