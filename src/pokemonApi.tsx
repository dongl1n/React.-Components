import pokemon from 'pokemontcgsdk';

pokemon.configure({ apiKey: 'dec9de6f-40f6-44cf-a11a-a7dd86667478' });

function getAllCard(page) {
  return pokemon.card.where({ pageSize: 10, page: `${page}` }).then((card) => {
    return card;
  });
}

function getPokemonCard(page, name) {
  return pokemon.card
    .where({ q: `name:${name}`, pageSize: 10, page: `${page}` })
    .then((card) => {
      return card;
    });
}

export { getAllCard, getPokemonCard };
