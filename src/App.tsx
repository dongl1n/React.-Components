import { useState } from 'react';
import './App.css';
import Cards from './Cards';
import ErrorBoundary from './ErrorBoundary';
import Button from './Button';

function App() {
  let quaryText = '';
  if (localStorage.getItem('pokemonQuary'))
    quaryText = localStorage.getItem('pokemonQuary');
  const [pages, setPages] = useState(1);
  const [input, setInput] = useState('');
  const [quary, setQuary] = useState(quaryText);
  const [error, setError] = useState(false);

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
          </select>
          <input
            placeholder={quary}
            onChange={(event) => {
              setInput(event?.target.value);
            }}
          ></input>
          <Button
            err={error}
            setErr={setError}
            pages={pages}
            setPages={setPages}
            input={input}
            setInput={setInput}
            quary={quary}
            setQuary={setQuary}
          />
        </form>
        <div>
          Enter the Pokemon&#39;s name. For example: Pikachu, Eevee, Bulbasaur,
          etc.
        </div>
      </section>
      <section className="bottom" id="bottom">
        <ErrorBoundary err={error} setErr={setError}>
          <Cards page={pages} name={quary} err={error} setErr={setError} />
        </ErrorBoundary>
        <button
          className="nav prev"
          onClick={() => {
            if (pages != 1) setPages(pages - 1);
            location.reload();
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
