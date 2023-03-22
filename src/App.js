import { Route, Routes } from 'react-router-dom';
import Header from './common/Header';
import Bnav from './common/Bnav';
import Footer from './common/Footer';
import Main from './components/Main';
import './App.scss';
import "antd/dist/reset.css"
import { ConfigProvider } from 'antd';
import Create from './components/Create';
import CheckPackage from './components/CheckPackage';
// import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <ConfigProvider theme={{
          token: {
            colorPrimary: '#13608C',
          },
        }}>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/create' element={<Create />} />
          <Route path='/CheckPackage' element={<CheckPackage />} />
        </Routes>
        <Bnav/>
        <Footer />
      </ConfigProvider>
    </div>
  );
}

export default App;
