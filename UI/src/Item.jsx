import { useState, useContext } from 'react';
import './styles/Home.css';
import AppContext from './AppContext';

export default function Item () {
  const{ itemList, setItemList } = useContext(AppContext);

  const fetchItems = async () => {
    const res = await fetch('http://localhost:8000/item');
    const data = await res.json();
    setItemList(data);
  };
  
  return (
    <div className='itemList'>
      <button type="button" onClick={fetchItems}>
        All Items
      </button>
      <br />
      <ul>
          {itemList.map(i => (
            <><li key={i.item_id}>{i.item_id}</li><li key={i.user_id}>{i.user_id}</li><li key={i.item_name}>{i.item_name}</li><li key={i.description}>{i.description}</li><li key={i.quantity}>{i.quantity}</li></>
          ))}
      </ul>
    </div>
  );
}