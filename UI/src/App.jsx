import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AppContext from './AppContext.jsx';
import Account from './Account.jsx';
import Home from './Home.jsx';
import User from './User.jsx';
import Item from './Item.jsx';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState(null);
  const [item, setItem] = useState(null);  

  useEffect(() => {
    fetch('http://localhost:8000/user')
    .then(response => {
      if (response.status !=200) {
        throw new Error ('unable to fetch equipment information from resource')
      } else {
        return response.json();
      }
    })
    .then(data => setEquipmentList(data))
    .catch(err => console.log(err))
  }, [])
  return (
    // response.json()
    <AppContext.Provider value={{User:user, Item: item}}>
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
            {/* <Route path="/user:item" element={<Item />} /> */}
            <Route path="/item" element={<Item />} />
          </Routes>
      </Router>
    </AppContext.Provider>
  )
};
export default App
