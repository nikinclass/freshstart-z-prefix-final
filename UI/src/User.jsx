import { useState, useEffect, useContext } from 'react';
// import { Link } from 'react-router-dom';
import App from './App.jsx';
import Home from './Home.jsx';
import './styles/Home.css';
import AppContext from './AppContext';

export default function User () {
  const [viewUser, setViewUser] = useState('default');
  const{user, userList, setUserList} = useContext(AppContext);

  return (
    <div className='userList'>
      <ul>
        {user.map(user => (
          <><li key={user.id}>{user.id}</li><li key={user.username}>{user.username}</li><li key={user.firstname}>{user.firstname}</li><li key={user.lastname}>{user.lastname}</li></>
        ))}
      </ul>
      { userList ? 'userList' : 'no users to show'};
    </div>
    );
};
