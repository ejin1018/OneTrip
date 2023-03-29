import { Route, Routes } from "react-router-dom";
import { ConfigProvider } from "antd";
import Common from "./common/Common";
import Main from "./components/Main";
import Create from "./components/Create";
import Packages from "./components/Packages";
import SearchPage from "./components/SearchPage";
import Login from "./components/Login";
import ReviewBlock from "./components/ReviewBlock";
import ReviewCreate from "./components/ReviewCreate";
import ReviewPage from "./components/ReviewPage";
import Productt from './components/Productt'
import Like from './components/Like'
import "./App.scss";
import "antd/dist/reset.css";

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
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/create" element={<Create />} />
          <Route path="/searchpage" element={<SearchPage />} />
          <Route path="/Packages/:id" element={<Packages />} />
          <Route path="/login" element={<Login />} />
          <Route path="/notice" element={<ReviewBlock />} />
          <Route path='/productt/:p_area' element={<Productt />} />
          <Route path="/like" element={<Like />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route path="/reviewcreate" element={<ReviewCreate />} />
        </Routes>
        <Common />
      </ConfigProvider>
    </div>
  );
}

export default App;
