import Header from "./components/Header";
import About from "./components/about/About";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';


function App() {
  return (
    <Router>
    <div className="container">
      <Header/>
     <Routes>
       <Route path="/about" element={<About/>}/>
     </Routes>
     <Footer/>
    </div>
    </Router>
  );
}

export default App;
