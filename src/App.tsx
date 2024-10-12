import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Contract from './pages/contract/Contract';
import ExamplePage from './pages/search/Search';
import Layout from './components/Layout/Layout';

import './App.css'

const App: React.FC = () => {
  return (
    <Router>
      <div className='app-container'>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Home />} />
          {/* Rutas protegidas */}
          <Route path="/profile" element={<Profile/>} />
          <Route path="/contract" element={<ProtectedRoute element={Contract} />} />
          <Route path="/search" element={<ProtectedRoute element={ExamplePage} />} />
        </Routes>
      </Layout>
      </div>
    </Router>
  );
};

export default App;