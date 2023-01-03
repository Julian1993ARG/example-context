import React, { createContext, useContext, useState } from 'react';

// Creamos el contexto
export const exampleContext = createContext();

// Creamos el provider
export const ExampleProvider = ({ children }) => {
  const [exampleContextValue, setExampleContextValue] = useState(0);
  return (
    <exampleContext.Provider
      value={{ exampleContextValue, setExampleContextValue }}
    >
      {children}
    </exampleContext.Provider>
  );
};

// Creamos el hook
export const useExampleContext = () => {
  const context = useContext(exampleContext);
  return context;
};
