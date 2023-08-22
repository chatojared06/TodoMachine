import React from 'react';
import './TodoSearch.css'
import { TodoContext } from '../TodoContext';

function TodoSearch() {
  const {
    setSearchValue,
    searchValue,
  } = React.useContext(TodoContext);
  
  return (
    <div className="container">
      <input className="input-search" 
      value={searchValue}
      placeholder="Buscar Tarea...." 
      onChange={(event) => {
        setSearchValue (event.target.value);
      }}/>
    </div>
  );
}

export { TodoSearch };