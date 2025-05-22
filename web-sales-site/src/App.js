import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from './components/Hero';
import Home from "./pages/Home";
import './index.css';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      {/* other components */}
    </div>
  );
}

export default App;
