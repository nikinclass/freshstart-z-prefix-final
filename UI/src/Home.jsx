import { useContext } from 'react';
import Account from './Account';
import './styles/Home.css';
import AppContext from './AppContext';


export default function Home () {
  const{account} = useContext(AppContext);

  return (
    <div className='Home'>
      <Account/>
    </div>    
  )
};


