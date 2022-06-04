import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import './App.scss';

function App() {

  const [user, setUser] = useState([]);
  const [look, setLook] = useState([]);

  useEffect(() => {
    getUsers()
  }, []);

  const getUsers = async () => {
    const rApi = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await rApi.json();
    setUser(data)
    setLook(data)
  }

  const Search = event => {
    const name = event.target.value.toLowerCase();
    const filteredUser = look.filter(
      data => (`${data.name}`.toLocaleLowerCase()
      .includes(name)
      )
    );

    setUser(filteredUser);
    };

  return (
    <div className="App">
      <h1 class="title">User Data</h1>
      <input class="search" placeholder='Name...' onInput={Search}></input>
      <div class="container">
        {user.map((user, index) => (
          <Card id="card" data={user} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
