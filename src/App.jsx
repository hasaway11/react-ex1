import './App.css';

import { Route, Routes } from "react-router-dom"
import Test001 from './exam05/Test001';
import Test002 from './exam05/Test002';
import Test003 from './exam05/Test003';


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
    <Routes>
      <Route path="/test2" element={<Test002 />} />
      <Route path="/test3" element={<Test003 />} />
    </Routes>
  )
}

export default App;