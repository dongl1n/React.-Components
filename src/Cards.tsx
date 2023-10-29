import { useState } from 'react';
import { getAllCard, getPokemonCard } from './pokemonApi';

function Cards(props) {
  const [items, setItems] = useState([]);
  if (!props.name) {
    getAllCard(props.page).then((response) => {
      setItems(response);
      return response;
    });
  } else {
    getPokemonCard(props.page, props.name).then((response) => {
      setItems(response);
      return response;
    });
  }

  if (items.data) {
    const listItems = items.data.map((dat) => (
      <div className="card__container" key={dat.id}>
        <div className="card__image">
          <img src={dat.images.small} className="image" alt="card" />
        </div>
        <div>{dat.name}</div>
        <div>Type: {dat.types[0]}</div>
      </div>
    ));
    return <div className="list">{listItems}</div>;
  } else return;
}

export default Cards;
