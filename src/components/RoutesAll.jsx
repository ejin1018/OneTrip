import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Main from "./Main";
import Create from "./Create";
import Packages from "./Packages";
import SearchPage from "./SearchPage";
import Login from "./Login";
import ReviewBlock from "./ReviewBlock";
import ReviewCreate from "./ReviewCreate";
import ReviewPage from "./ReviewPage";
import Productt from './Productt'
import Like from './Like'

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
      <Route path="/likepage" element={<Like />} />
      <Route path="/review" element={<ReviewPage />} />
      <Route path="/reviewcreate" element={<ReviewCreate />} />
    </Routes>
  </>
 )
}

export default RoutesAll;