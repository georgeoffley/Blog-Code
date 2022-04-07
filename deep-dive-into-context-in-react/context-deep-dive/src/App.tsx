import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header"

const UserContext = React.createContext();

function App() {
  return (
    <UserContext.Provider value="goffley">
      <Header title='goffley' />
    </UserContext.Provider>
  );
}

export default App;
