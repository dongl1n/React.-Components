function Button(props) {
  return (
    <button
      className="search"
      onClick={() => {
        localStorage.setItem('pokemonQuary', props.input);
        props.setPages(1);
        props.setQuary(props.input);
        console.log(props.quary);
        location.reload();
      }}
    ></button>
  );
}

export default Button;
