import { Route, Routes } from "react-router-dom";
import Header from "./common/Header";
import Bnav from "./common/Bnav";
import Footer from "./common/Footer";
import Main from "./components/Main";
import Create from "./components/Create";
import Packages from "./components/Packages";
import SearchPage from "./components/SearchPage";
import { ConfigProvider } from "antd";
import "./App.scss";
import "antd/dist/reset.css";
// import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#13608C",
          },
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/create" element={<Create />} />
          <Route path="/searchpage" element={<SearchPage />} />
          <Route path="/Packages/:id" element={<Packages />} />
        </Routes>
        <Bnav />
        <Footer />
      </ConfigProvider>
    </div>
  );
}

export default App;
