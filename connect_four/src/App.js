import React from 'react'
import './App.css';
import ItemList from './components/itemList.js'

function App() {
  const itemsList = [{
    id: 'e1',
    itemName: 'Play',
    action:'/play'
    },
    {
    id: 'e2',
    itemName: 'Two Players',
      action: '/twoplayers'
    }, {
    id: 'e3',
    itemName: 'Online',
      action: '/online'
    }, {
    id: 'e4',
    itemName: 'Custom Game',
      action: '/customgame'
    }]
  return (
    <>
      <div>
        <h1>Let's Start!!!</h1>
        <ItemList id = {itemsList[1].id}
          itemName={itemsList[1].itemName}
          action={itemsList[1].action}
          />
        <ItemList id = {itemsList[2].id}
          itemName={itemsList[2].itemName}
          action={itemsList[2].action}
          />
        <ItemList id = {itemsList[3].id}
          itemName={itemsList[3].itemName}
          action={itemsList[3].action}
          />
        <ItemList id = {itemsList[0].id}
          itemName={itemsList[0].itemName}
          action={itemsList[0].action}
          />
        
        
      </div>
    </>
  );
}

export default App;
