import React from "react"

import { UserContext } from "./UserContext";

export const Header = () => {
    const contextType = React.useContext(UserContext);
    return (
        <div className="footer">
            <h1>Header here!</h1>
            <h2>Username: {contextType}</h2>
        </div>
    );
}

export default Header;