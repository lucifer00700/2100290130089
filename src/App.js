import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Even from './pages/even';
import Fibo from './pages/fibo';
import Prime from './pages/prime';
import Rand from './pages/rand';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="/even"><button>Even Numbers</button></Link>
          </li>
          <li>
            <Link to="/fibo"><button>Fibonacci Sequence</button></Link>
          </li>
          <li>
            <Link to="/prime"><button>Prime Numbers</button></Link>
          </li>
          <li>
            <Link to="/rand"><button>Random Numbers</button></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/even" element={<Even />} />
        <Route path="/fibo" element={<Fibo />} />
        <Route path="/prime" element={<Prime />} />
        <Route path="/rand" element={<Rand />} />
      </Routes>
    </Router>
  );
}

export default App;
