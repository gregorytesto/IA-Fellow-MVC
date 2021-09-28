import { useEffect } from 'react';
import './App.css';

function App() {

  let getFellows=async()=>{
    let response = await fetch('http://localhost:8080/api/fellows');
    let fellows = await response.json();
    console.log(fellows);
  }

  useEffect(()=>{
    getFellows();
  }, []);

  return (
    <div>

    </div>
  );
}

export default App;
