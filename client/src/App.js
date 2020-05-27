import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [c1, setC1] = useState('Aw1');
  const [c2, setC2] = useState('Aw2');
  const [c3, setC3] = useState('Aw3');
  const [c4, setC4] = useState('Aw4');

  useEffect(() => {
    async function fetch() {
      const p1 = axios.get('http://localhost:8000/');
      const p2 = axios.get('http://localhost:8001/');
      const p3 = axios.get('http://localhost:8002/');
      const p4 = axios.get('http://localhost:8003/');

      const [r1, r2, r3, r4] = await Promise.all([p1, p2, p3, p4]);

      setC1(r1.data);
      setC2(r2.data);
      setC3(r3.data);
      setC4(r4.data);
    }
    fetch();
  });

  return (
    <div>
      <h1>{c1}</h1>
      <h1>{c2}</h1>
      <h1>{c3}</h1>
      <h1>{c4}</h1>
    </div>
  );
}

export default App;
