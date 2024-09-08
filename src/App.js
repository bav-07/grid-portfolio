import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TilesHeader from './containers/TilesHeader';
import About from './containers/About'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/grid-portfolio" element={<TilesHeader/>}/>      
        <Route path="/grid-portfolio/about" element={<About/>}/> 
      </Routes>
    </BrowserRouter>

  );
}

export default App;
