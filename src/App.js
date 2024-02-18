import { useState } from 'react';
import './App.css';
import Book from './components/Book';

function App() {

  const [page, setPage] = useState(1);

  function nextPage(){
    setPage(page + 1);
  }

  function previousPage(){
    setPage(page < 2 ? 1 : page - 1);
  }
  
  return (
    <div className="App">
      <Book page={page}/>
      <div className="footer">
        <button onClick={previousPage}> Voltar </button>
        <button onClick={nextPage}> Avançar </button>
      </div>
    </div>
  );
}


export default App;
