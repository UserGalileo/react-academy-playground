import React from 'react';
import './App.css';
import { List } from './components/List';
import { Empty } from './components/Empty';
import { Product } from './models/product';

export function App() {

  const products: Product[] | null = [
    { id: '1', name: 'Mela' },
    { id: '2', name: 'Pera' },
    { id: '3', name: 'Banana' },
  ];

  function buttonHandler(e: React.PointerEvent<HTMLButtonElement>) {
    console.log('Cliccato!', e.currentTarget.value);
  }

  function inputHandler(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      console.log('Inviato: ', e.currentTarget.value);
    }
  }

  return <>
      <div>{
        products.length > 0
            ? <List products={products} />
            : <Empty />
      }</div>

      <button value={3} onClick={buttonHandler}>Cliccami!</button>
      <input type="text" onKeyDown={inputHandler} />
  </>
}
