import { useState, useEffect, useContext } from 'react';
import App from './App.jsx';
import Home from './Home.jsx';
import './styles/Home.css';
import AppContext from './AppContext';

export default function Item () {
  const [viewItem, setViewItem] = useState('default');
  const{item, itemList, setItemList} = useContext(AppContext);

  useEffect(() => {
    setItemList(item[0])
  }, [item])

  return (
    // <div className='home'>
    //   { userList ? 'userList' : 'no users to show'};
    // </div>
    console.log('test message for Item Page')
  );
};