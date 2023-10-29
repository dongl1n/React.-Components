import { useState } from 'react';
import { getAllCard, getPokemonCard } from './pokemonApi';

function Cards(props) {
  const [items, setItems] = useState('Loading...');
  if (!props.name) {
    getAllCard(props.page)
      .then((response) => {
        console.log('СТраница' + props.page);
        setItems(response);
        if (!items.data) setErr(true);
        return response;
      })
      .catch(function () {});
  } else {
    getPokemonCard(props.page, props.name)
      .then((response) => {
        console.log('СТраница' + props.page);
        setItems(response);
        if (!items.data.length) props.setErr(true);
        return response;
      })
      .catch(function () {});
  }

  if (items === 'Loading...') return <div>Loading...</div>;
  if (props.err) {
    throw new Error(
      'Error: No cards found. Enter a new query and refresh the page'
    );
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
  }
}

export default Cards;
