import { Route, Routes } from "react-router-dom";
import { ConfigProvider } from "antd";
import Header from "./common/Header";
import Bnav from "./common/Bnav";
import Footer from "./common/Footer";
import Main from "./components/Main";
// import Search from "./components/search";
import Create from "./components/Create";
import Packages from "./components/Packages";
import SearchPage from "./components/SearchPage";
import Login from './components/Login'
import ReviewBlock from './components/ReviewBlock'
import "./App.scss";
import "antd/dist/reset.css";
import ReviewCreate from "./components/ReviewCreate";
import ReviewSlider from "./components/ReviewSlider";
import Productt from './components/Productt'

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
          <Route path='/login' element={<Login />} />
          <Route path='/notice' element={<ReviewBlock />} />
          <Route path='/productt/:p_area' element={<Productt />} />
        </Routes>
        <Bnav />
        <Footer />
      </ConfigProvider>
    </div>
  );
}

export default App;
