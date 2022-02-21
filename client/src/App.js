import './App.css';
import Aboutus from './Components/About-US/Aboutus';
import Header from './Components/Login_Page/Header/Header';
import FrontPage from "./Front-Page/FrontPage";
import ErrorPage from "./Front-Page/Error-404";
import Contnent from "./Components/Home/contnent";
import LoginPage from './Components/Login_Page/Login/LoginPage';
import SignUpPage from './Components/Login_Page/SignUp/SignUpPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/signup" element={<SignUpPage/>} />
          <Route exact path="/login" element={<LoginPage/>} />
          <Route exact path="/" element={<FrontPage />} />
          <Route exact path="/home" element={<Contnent/>} />
          <Route exact path="/about" element={<Aboutus/>} />
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
