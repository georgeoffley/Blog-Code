import React from 'react';

import Page from "./Components/Page"
import { UserContext } from './Components/UserContext';

function App() {
  return (
    <UserContext.Provider value="not_goffley">
      <Page />
    </UserContext.Provider>
  );
}

export default App;
