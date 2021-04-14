import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('');
      }}>
      <input
        type="text"
        placeholder="Escribe una ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />

        <input type="submit" value="Buscar" />
    </form>
  );
}


/*
  Con clases-------->

  class SearchBar exends React.component{
    constructor(props){  // metodo propio de la clase recibe la props.
      super(props); // para hacer referencia al THIS.
      this.state = {city:""};
      this.handleOnChange= this.haldleOnChange.bind(this);
    }
    // Puedo pasar la funcion como arrow Functions
    //y de esta manera no tendria que hacer el bind
    // const handleOnChange = (e)=>{...}
    handleOnChange(e){
      this.setState({
        city: e.target.value
      })
    }


    render(){
      return (
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.onSearch(this.state.city);
          this.setState({City:""});
          }}>
          <input
            type="text"
            placeholder="Escribe una ciudad..."
            value={this.state.city}
            onChange={this.handleOnChange}
          />
          <input type="submit" value="Buscar" />
        </form>
  );



    }
  }

  export default SearchBar



*/