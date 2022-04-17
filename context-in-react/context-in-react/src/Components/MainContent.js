import React from "react"

import { UserContext } from "./UserContext";

const MainContent = () => {
    const contextType = React.useContext(UserContext);
    return (
        <div className="main-content">
            <h1>MainContent here!</h1>
            <h2>For Logged In User:</h2>
            <h3>{contextType}</h3>
        </div>
    );
}

export default MainContent;