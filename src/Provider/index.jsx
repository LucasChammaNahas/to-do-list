import React, { createContext, useState } from 'react';

// Criação do AppContext
const AppContext = createContext();

// Criação do Provider
const Provider = ({ children }) => {
  const [isSaving, setIsSaving] = useState(false);
  const [timeoutBool, setTimeoutBool] = useState(false);
  const [timeoutId, setTimeoutId] = useState();
  const [filter, setFilter] = useState({
    timestamp: true,
    status: false,
    alphabet: false,
  });
  const [todoList, setTodoList] = useState([]);

  const statesPkg = {
    todoList,
    setTodoList,
    isSaving,
    setIsSaving,
    timeoutId,
    setTimeoutId,
    timeoutBool,
    setTimeoutBool,
    filter,
    setFilter,
  };

  return (
    <AppContext.Provider value={statesPkg}>
      {children}
    </AppContext.Provider>
  );
};

// Simplificação do uso posterior do useContext
const useGlobalState = () => React.useContext(AppContext);

// Exports
export { Provider };
export { useGlobalState };
