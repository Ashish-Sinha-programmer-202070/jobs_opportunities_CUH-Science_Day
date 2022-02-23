import './App.css';
import Aboutus from './Components/About-US/Aboutus';
import Header from './Components/Login_Page/Header/Header';
import FrontPage from "./Front-Page/FrontPage";
import ErrorPage from "./Front-Page/Error-404";
import Process from './Components/Process/Process';
import Contnent from "./Components/Home/contnent";
import Internship from './Components/Internship/Internship';
import ContactUs from './Components/Contact-US/ContactUs';
import LoginPage from './Components/Login_Page/Login/LoginPage';
import SignUpPage from './Components/Login_Page/SignUp/SignUpPage';
import AdminLogin from './Components/Login_Page/Login/AdminLogin';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/signup" element={<SignUpPage/>} />
          <Route exact path="/login" element={<LoginPage/>} />
          <Route exact path="/admilogin" element={<AdminLogin/>} />
          <Route exact path="/front" element={<FrontPage />} />
          <Route exact path="/process" element={<Process />} />
          <Route exact path="/internship" element={<Internship />} />
          <Route exact path="/home" element={<Contnent/>} />
          <Route exact path="/about" element={<Aboutus/>} />
          <Route exact path="/contact" element={<ContactUs/>} />
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
