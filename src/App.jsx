import './App.css';

import { Route, Routes, useLocation } from "react-router-dom"
import ContactList from './exam05/ContactList';
import Test04 from './exam05/Test04';
import ContactRead from './exam05/ContactRead';
import PublicRoute from './exam05/route/PublicRoute';
import ContactLogin from './exam05/ContactLogin';
import PrivateRoute from './exam05/route/PrivateRoute';
import ContactWrite from './exam05/ContactWrite';
import ContactUpdate from './exam05/ContactUpdate';
import Header from './exam05/fragments/Header';
import Nav from './exam05/fragments/Nav';
import Footer from './exam05/fragments/Footer';
import { useEffect } from 'react';
import useAuthStore from './exam05/store/useAuthStore';


function App() {
  const location = useLocation();
  const {readLogin} = useAuthStore();

  // 이동할 때마다 인증 정보를 업데이트
  useEffect(()=>{
    console.log("======================================");
    readLogin()
  }, [location]);  

  return (
    <div className='App'>
      <Header />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/list" element={<ContactList />} />
          <Route path="/read" element={<ContactRead/>} />
          <Route path="/login" element={<PublicRoute element={<ContactLogin/>} />} />
          <Route path="/write" element={<PrivateRoute element={<ContactWrite/>} />} />
          <Route path="/update" element={<PrivateRoute element={<ContactUpdate/>} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App;