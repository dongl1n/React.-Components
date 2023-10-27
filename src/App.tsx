import { useState, Component } from 'react'
import Form from './handleSearch'
import './App.css'
import getPokemonCard from './pokemonApi'

function App() {
  const form = new Form();
  getPokemonCard("harizard");

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
    {getPokemonCard("Charizard")}
    </section>
    </>
  )
}

export default App
