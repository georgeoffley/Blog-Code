import React from "react"

import { UserContext } from "../App";

export const Header = () => {
    const userNameContext = React.useContext(UserContext);
    return (
        <div className="text-xl border-2 bg-gray-400">
            <h1>Header here!</h1>
            <h2 className="text-white font-bold">Username: {userNameContext}</h2>
        </div>
    );
}

export default Header;