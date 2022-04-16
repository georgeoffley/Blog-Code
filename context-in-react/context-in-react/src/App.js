import React from 'react';

import Page from "./Components/Page"

const userContext = React.createContext('goffley')

function App() {
  return (
    <UserLoginContext.Provider value="not_goffley">
      <Page />
    </UserLoginContext.Provider>
  );
}

export default App;
