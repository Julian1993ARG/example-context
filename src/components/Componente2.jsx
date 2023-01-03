import React from 'react';
import { useExampleContext } from '../context/ExampleContext.jsx';

const Componente2 = () => {
  const { setExampleContextValue } = useExampleContext();
  return (
    <button onClick={() => setExampleContextValue((prev) => prev + 1)}>
      Sumar uno al Contexto
    </button>
  );
};

export default Componente2;
