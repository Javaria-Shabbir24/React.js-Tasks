import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Blogs from './Blogs';
import Contact from './Contact';
import NoPage from './NoPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/Blogs" element={<Layout><Blogs /></Layout>} />
        <Route path="/Contact" element={<Layout><Contact /></Layout>} />
        <Route path="*" element={<Layout><NoPage /></Layout>} /> 
      </Routes>
    </Router>
  );
}

export default App;