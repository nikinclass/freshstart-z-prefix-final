import { useState, useContext } from 'react';
import './styles/Home.css';
import AppContext from './AppContext';

export default function User () {
  const{ userList, setUserList } = useContext(AppContext);

  const fetchUsers = async () => {
    const res = await fetch('http://localhost:8000/user');
    const data = await res.json();
    setUserList(data);
  };
  
  return (
    <div className='userList'>
      <button type="button" onClick={fetchUsers}>
        All Users
      </button>
      <br />
      <ul>
          {userList.map(u => (
            <>
            <li key={u.id}>
              id: {u.id},
              username: {u.username}, 
              firstname: {u.firstname},
              lastname: {u.lastname}, 
              password: {u.password}
            </li>
            </>
          ))}
      </ul>
    </div>
  );
}