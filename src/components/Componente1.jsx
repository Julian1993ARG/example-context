import React from 'react';
import { useExampleContext } from '../context/ExampleContext.jsx';

const Componente1 = () => {
  const { exampleContextValue } = useExampleContext();
  return <div>{exampleContextValue}</div>;
};

export default Componente1;
