import { Route, Routes } from 'react-router-dom';
import Header from './common/Header';
import Footer from './common/Footer';
import Main from './components/Main';
import './App.scss';
import "antd/dist/reset.css"
import { ConfigProvider } from 'antd';
// import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <ConfigProvider theme={{
      token: {
        colorPrimary: '#ff0000',
      },
    }}>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
        <Footer />
      </ConfigProvider>
    </div>
  );
}

export default App;
