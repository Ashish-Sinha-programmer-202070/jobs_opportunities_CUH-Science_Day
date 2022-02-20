import "./App.css";
import FrontPage from "./Components/FrontPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./Components/Error404";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<FrontPage />} />
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
