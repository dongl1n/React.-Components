import { useState } from 'react';
import './App.css';
import Cards from './Cards';

function App() {
  let quaryText = '';
  if (localStorage.getItem('pokemonQuary'))
    quaryText = localStorage.getItem('pokemonQuary');
  const [pages, setPages] = useState(1);
  const [input, setInput] = useState('');
  const [quary, setQuary] = useState(quaryText);

  return (
    <>
      <section className="top">
        <h1>
          What is <span>Pokémon?</span>
        </h1>
        <form
          className="search__container"
          onClick={(event) => {
            event.preventDefault();
          }}
        >
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
              localStorage.setItem('pokemonQuary', input);
              setPages(1);
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
