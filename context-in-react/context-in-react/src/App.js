import React from 'react';

import Page from "./Components/Page"

export const UserContext = React.createContext();

function App() {
  return (
    <UserContext.Provider value="georgeoffley">
      <Page />
    </UserContext.Provider>
  );
}

export default App;
