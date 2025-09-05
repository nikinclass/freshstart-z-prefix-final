import { useContext } from 'react';
import Account from './Account.jsx';
import User from './User.jsx';
import Item from './Item.jsx';
import './styles/Home.css';
import AppContext from './AppContext';


export default function Home () {
  const{account} = useContext(AppContext);

  return (
    <div className='Home'>
      <Account/>
      <User/>
      <Item/>
      <div className='userList'>
      <button type="submit" value='user'>
        Users
      </button>
      <br />
      </div>
      <div className='itemList'>
        <button type="submit" value="item">
          Item
        </button>
        <br />
      </div>    
    </div>
  )
};


