import { useState } from 'react';
import './App.css';
import Cards from './Cards';

function App() {
  const [pages, setPages] = useState(1);
  const [input, setInput] = useState('');
  const [quary, setQuary] = useState('');

  return (
    <>
      <section className="top">
        <h1>
          What is <span>Pokémon?</span>
        </h1>
        <form className="search__container">
          <select name="selectedCardFilter">
            <option value="name">Name</option>
            <option value="type">Type</option>
          </select>
          <input
            onChange={(event) => {
              setInput(event?.target.value);
            }}
          ></input>
          <button
            className="search"
            onClick={() => {
              setQuary(input);
            }}
          ></button>
        </form>
      </section>
      <section className="bottom" id="bottom">
        <Cards page={pages} name={quary} />
        <button
          className="nav prev"
          onClick={() => {
            if (pages != 1) setPages(pages - 1);
          }}
        >
          Prev
        </button>
        <button
          className="nav next"
          onClick={() => {
            setPages(pages + 1);
          }}
        >
          Next
        </button>
      </section>
    </>
  );
}

export default App;
