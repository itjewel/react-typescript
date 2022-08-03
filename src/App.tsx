import React from 'react';
import './App.css';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <h1>User Management App</h1>
      <Users
        name="anisul islam"
        email="anisul2010s@yahoo.co.uk"
        age={32}
        isRegistered={true}
      />
      <Users
        name="Rabeya Begum"
        email="rabu2010s@yahoo.co.uk"
        age={31}
        isRegistered={false}
      />
    </div>
  );
}

export default App;
