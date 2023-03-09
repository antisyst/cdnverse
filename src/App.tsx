import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Apis from './routes/apis/api';
import Home from './routes/home/home';
import Libraries from './routes/libraries/libraries';

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/libraries" element={<Libraries />} />
          <Route path="/apis" element={<Apis />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}



