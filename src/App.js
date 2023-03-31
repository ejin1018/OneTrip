import { ConfigProvider } from "antd";
import RoutesAll from "./components/RoutesAll";
import "./App.scss";
import "antd/dist/reset.css";
import Header from "./common/Header";
import Bnav from "./common/Bnav";
import Footer from "./common/Footer";

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
        <Bnav />
        <RoutesAll />
        <Footer />
      </ConfigProvider>
    </div>
  );
}

export default App;
