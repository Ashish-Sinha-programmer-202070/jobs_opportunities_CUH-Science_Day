import './App.css';
import Aboutus from './Components/About-US/Aboutus';
// import Header from './Components/Login_Page/Header/Header';
import FrontPage from "./Front-Page/FrontPage";
// import ErrorPage from "./Front-Page/Error-404";
import Process from './Components/Process/Process';
import Contnent from "./Components/Home/contnent";
import Internship from './Components/Internship/Internship';
import InternshipDetail from './Components/Internship/internship-detail';
import ContactUs from './Components/Contact-US/ContactUs';
// import ii from './Components/Internship/ii';
import LoginPage from './Components/Login_Page/Login/LoginPage';
import SignUpPage from './Components/Login_Page/SignUp/SignUpPage';
import AdminLogin from './Components/Login_Page/Login/AdminLogin';
import Dashboard from './Components/dashboard/index'
import Admin from './Components/Forms/Admin/Admin'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthContextProvider from './context/AuthContext';
import Header from './Components/Login_Page/Header/Header';

function App() {
  return (
    <div className="App">

      <AuthContextProvider>
        <Router>
          <Header/>
          <Routes>
          {/* <Route exact path="/" element={<ii/>} /> */}
          <Route exact path="/signup" element={<SignUpPage/>} />
            <Route exact path="/login" element={<LoginPage/>} />
            <Route exact path="/adminlogin" element={<AdminLogin/>} />
            <Route exact path="/dashboard/add-opportunity" element={<Admin/>} />
            <Route exact path="/dashboard" element={<Dashboard/>} />
            <Route exact path="/front" element={<FrontPage />} />
            <Route exact path="/process" element={<Process />} />
            <Route exact path="/internship" element={<Internship />} />
            <Route exact path="/internshipdetails/:intern_id" element={<InternshipDetail />} />
            <Route exact path="/" element={<Contnent/>} />
            <Route exact path="/home" element={<Contnent/>} />    
            <Route exact path="/about" element={<Aboutus/>} />
            <Route exact path="/contact" element={<ContactUs/>} />
            {/* <Route exact path="*" element={<ErrorPage />} /> */}
          </Routes>
        </Router>
      </AuthContextProvider>
      
    </div>
  );
}

export default App;
