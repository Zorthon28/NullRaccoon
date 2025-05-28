import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import CaseStudy from './components/CaseStudy';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          {/* Home route with Hero */}
          <Route path="/" element={<Hero />} />
          
          {/* Case study route */}
          <Route path="/case-study/:caseId" element={<CaseStudy />} />
          
          {/* Optional: 404 page */}
          <Route path="*" element={<Hero />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;