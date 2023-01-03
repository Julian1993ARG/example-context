import React from 'react';
import './style.css';
import Componente1 from './components/Componente1.jsx';
import Componente2 from './components/Componente2.jsx';
import { ExampleProvider } from './context/ExampleContext.jsx';

export default function App() {
  return (
    <ExampleProvider>
      <Componente1 />
      <Componente2 />
    </ExampleProvider>
  );
}
