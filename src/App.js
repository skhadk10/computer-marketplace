import {Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
// import Header from './component/nav/Header.js';
// import Login from './pages/auth/Login.js';
// import Register from './pages/auth/Register.js';
// import RegisterComplete from './pages/auth/RegisterComplete.js';
// import Home from './pages/Home.js'
function App() {
  return (
    <>
    {/* <Header/> */}
    <ToastContainer/>
    <Routes>
      {/* <Route exact path="/" element={<Home/>} />
      <Route exact path="/register" element={<Register/>} />
      <Route exact path="/register/complete" element={<RegisterComplete/>} /> 
    <Route exact path="/login" element={<Login/>} /> */}
    </Routes>
    
    </>

  );
}

export default App;
