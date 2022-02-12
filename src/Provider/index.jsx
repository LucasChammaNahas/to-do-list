import React, { createContext, useState } from 'react';

// Criação do AppContext
const AppContext = createContext();

// Criação do Provider
const Provider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);

  const statesPkg = {
    todoList,
    setTodoList
  };

  return (
    <AppContext.Provider value={ statesPkg }>
      {children}
    </AppContext.Provider>
  );
};

// Simplificação do uso posterior do useContext
const useGlobalState = () => React.useContext(AppContext);

// Exports
export { Provider };
export { useGlobalState };
