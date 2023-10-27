import pokemon from 'pokemontcgsdk'

pokemon.configure({apiKey: 'e6d53ce0-e9ce-4093-99c9-93b8badada32'})

function getAllCard(){
  return pokemon.card.all()
  .then(card => {
    return card;
  })
}

function getPokemonCard(value){
  return pokemon.card.where({ q: `name:${value}` })
  .then(card => {
      return card;
  })
}

export {getAllCard, getPokemonCard}
