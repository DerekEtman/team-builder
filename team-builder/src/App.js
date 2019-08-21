import React from 'react';
import { useState } from 'react';
import './App.css';
import data from './data';
import Card from './components/Card';
import CardForm from './components/CardForm';

function App() {
  const [teamList, setTeamList] = useState(data);

  const addNewCard = card => {
    setTeamList([...teamList, card])
    console.log(setTeamList);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Team List</h1>
      {/* CardForm displays the form to create a new card */}
        <CardForm  addNewCard={addNewCard}/>
        {/* Card is displaying the already created cards */}
        <Card cardList={teamList}/>
      </header>
    </div>
  );
}

export default App;
