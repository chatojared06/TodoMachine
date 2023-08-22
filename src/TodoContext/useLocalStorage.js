import React from "react";

function useLocalStorage(itemName, inicialValue) {
    const [item, setItem] = React.useState(inicialValue);

    const [loading, setLoading] = React.useState(true);

    const [error, setError] = React.useState(false);

  React.useEffect (() => {
    setTimeout ( () => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(inicialValue));
          parsedItem = inicialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem (parsedItem);
        }
    
        setLoading(false)
      }  catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, [] );

  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      
      setItem(newItem);
    };
  
    return {
      item,
      saveItem, 
      error, 
      loading
    };
  }

  export { useLocalStorage };


// localStorage.removeItem('Todos_V1');
// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el curso de Intro a React.js', completed: false },
//   { text: 'Jugar Xbox', completed: false },
//   { text: 'Ir con Ebrick', completed: false },
//   { text: 'que venga bengi', completed: true },
// ];

// localStorage.setItem('Todos_V1', JSON.stringify(defaultTodos));
