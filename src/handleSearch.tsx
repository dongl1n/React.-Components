import { useState} from 'react'
import React from 'react'
import App from './App'

class Form extends React.Component {

  constructor(props, context){
    super(props, context);
    this.state = {value: ''};
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleForm = this.handleForm.bind(this);
  }

  
  handleInput(value) {
    this.setState({ value: value })
  }

  handleSubmit(e) {
    console.log(e)
  }

  public handleForm(e){
    event.preventDefault();
    if(e!.target.matches('.search')){
      this.handleSubmit(this.state.value)
      console.log(this.state.value)
    }
    else if(e!.target) this.handleInput(e!.target.value);
  }

  
  render() {
    return (
      <>
    <section class="top">
      <h1>What is <span>Pokémon?</span></h1>
      <form class="search__container" onClick={this.handleSubmit}>
        <select name="selectedCardFilter">
        <option value="all">All</option>
          <option value="name">Name</option>
          <option value="type">Type</option>
        </select>
        <input value={this.state.value}></input>
        <button class="search"></button>
      </form>
    </section>
    <section class ="bottom">
      gfgdfdfhh
    </section>
    </>
    )
  }
}

export default Form