import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";  
import NoPage from "./pages/NoPage";
import "./App.css";

export default function App() {
  return (
<div>
<div className="box" id="box-1">
<div className="box" id="box-2">
<div className="box" id="box-3">
<div className="box" id="box-4">
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Layout />}>    
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} /> 
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    

    </BrowserRouter>n

     </div> </div> </div> </div>
  </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);