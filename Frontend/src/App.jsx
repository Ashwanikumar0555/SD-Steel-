import React from 'react';
import { useState } from 'react';
import Topbar from './common/Topbar';
import Navbar from './common/Navbar';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Topbar />
      {/* Increased space between Topbar and Navbar */}
      <div className="h-16 md:h-12"></div>

      <Navbar />
    </div>
  );
}

export default App;
