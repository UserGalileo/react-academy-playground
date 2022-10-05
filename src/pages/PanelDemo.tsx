import { Product } from '../models/product';
import { Panel } from '../components/Panel';
import { List } from '../components/List';
import { Empty } from '../components/Empty';
import React, { useState } from 'react';

const products: Product[] = [
  { id: '1', name: 'Mela' },
  { id: '2', name: 'Pera' },
  { id: '3', name: 'Banana' },
];

export function PanelDemo() {

  const [isVisible, setIsVisible] = useState(true);

  function dismissPanel() {
    setIsVisible(false);
  }

  return <div className="m-3">
    {
      isVisible
          ? <Panel
                title="Hello"
                headerClass={'fw-bold'}
                type="success"
                icon="fa fa-times"
                onIconClick={dismissPanel}
            >
              <div>{
                products.length > 0
                    ? <List products={products} />
                    : <Empty />
              }</div>
            </Panel>
          : <button onClick={() => setIsVisible(true)}>Show panel</button>
    }
  </div>
}
