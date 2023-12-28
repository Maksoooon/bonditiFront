import { useEffect, useState } from "react";
import Main from "./pages/main";
import './App.css';

function App() {
  const [words, setWords] = useState([]);
  useEffect(() => {
    async function getWords() {
      const response = await fetch(`http://localhost:3000/dictionary`, {
      headers: {accept: 'application/json'}
    })
      const data = await response.json();
      setWords(data);
    }
    getWords();
   }, []);
  return (
    <Main words={words}/>
  );
}

export default App;
