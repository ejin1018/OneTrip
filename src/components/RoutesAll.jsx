import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Main from "./components/Main";
import Create from "./components/Create";
import Packages from "./components/Packages";
import SearchPage from "./components/SearchPage";
import Login from "./components/Login";
import ReviewBlock from "./components/ReviewBlock";
import ReviewCreate from "./components/ReviewCreate";
import ReviewPage from "./components/ReviewPage";
import Productt from './components/Productt'

function RoutesAll (){
 return(
  <>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/create" element={<Create />} />
      <Route path="/searchpage" element={<SearchPage />} />
      <Route path="/Packages/:id" element={<Packages />} />
      <Route path="/login" element={<Login />} />
      <Route path="/notice" element={<ReviewBlock />} />
      <Route path='/productt/:p_area' element={<Productt />} />
      <Route path="/review" element={<ReviewPage />} />
      <Route path="/reviewcreate" element={<ReviewCreate />} />
    </Routes>
  </>
 )
}

export default RoutesAll;