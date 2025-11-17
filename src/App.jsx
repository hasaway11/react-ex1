import './App.css';

import { Route, Routes } from "react-router-dom"
import Footer from "./contacts/fragment/Footer"
import Header from "./contacts/fragment/Header"
import Nav from "./contacts/fragment/Nav"
import ContactList from "./contacts/view/ContactList"
import ContactRead from "./contacts/view/ContactRead"
import ContactWrite from "./contacts/view/ContactWrite"
import Test011 from './exam/Test011';
import Test06 from './exam/test06';


function App() {
  return (
    // <div className='App'>
    //   <Header />
    //   <Nav />
    //   <main>
    //     <section>
    //       <Routes>
    //         <Route path="/" element={<ContactList/>} />
    //         <Route path="/read" element={<ContactRead />} />
    //         <Route path="/write" element={<ContactWrite />} />
    //       </Routes>
    //     </section>
    //   </main>
    //   <Footer/>
    // </div>
    <Test06 />
  )
}

export default App