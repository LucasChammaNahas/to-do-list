import React, { createContext, useState } from 'react';

// Criação do AppContext
const AppContext = createContext();

// Criação do Provider
const Provider = ({ children }) => {
  const [isSaving, setIsSaving] = useState(false);
  const [timeoutBool, setTimeoutBool] = useState(false);
  const [timeoutId, setTimeoutId] = useState();
  const [todoList, setTodoList] = useState([
    { status: 'red', msg: 'Tarefa incompleta' },
    { status: 'yellow', msg: 'To fazendo, po' },
    { status: 'green', msg: 'Tarefa feita' },
  ]);

  const statesPkg = {
    todoList,
    setTodoList,
    isSaving,
    setIsSaving,
    timeoutId,
    setTimeoutId,
    timeoutBool,
    setTimeoutBool,
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
