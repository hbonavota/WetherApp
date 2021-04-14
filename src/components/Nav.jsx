import React from 'react';
import Logo from './logo.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
      <div className={"navbar"} >
        <div>
          <h1 className={"title"}>CLIMA </h1>
          <img className={"logo"} src={Logo} alt="no hay foto"/>
        </div>
        <SearchBar className={"input"} onSearch={onSearch}/>
        <h5 className={"textNav"}>- Weather App -</h5>
      </div>
  );
}

export default Nav;
