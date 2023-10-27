import { useState, Component } from 'react'
import Form from './handleSearch'
import './App.css'
import {getAllCard, getPokemonCard} from './pokemonApi'

function isEmpty(data){
  if(data){
    let listItems = data.map((dat) =>
      <div class="card__container">
        <div class="card__image">
          <img src={dat.images.small} class="image" alt="card"/>
        </div>
        <div>{dat.name}</div>
      </div>
    )
    return(
      <div class="list">{listItems}</div>
    )
  }
  else return;
}

function App() {
  const [items, setItems] = useState([]);

  const form = new Form();
  let res;
  getAllCard().then((response) => {
    setItems(response);
  })
  console.log(items.data)
  
  return (
    <>
      <section class="top">
        <h1>What is <span>Pokémon?</span></h1>
        <form class="search__container" onClick={form!.handleForm} onChange={form!.handleForm}>
          <select name="selectedCardFilter">
          <option value="all">All</option>
            <option value="name">Name</option>
            <option value="type">Type</option>
          </select>
          <input></input>
          <button class="search"></button>
        </form>
      </section>
      <section class ="bottom">
      {isEmpty(items.data)}
      </section>
    </>
  )
}

export default App
