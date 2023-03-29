import { ConfigProvider } from "antd";
import Common from "./common/Common";
import RoutesAll from './components/RoutesAll';
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
        <RoutesAll />
        <Common />
      </ConfigProvider>
    </div>
  );
}

export default App;
