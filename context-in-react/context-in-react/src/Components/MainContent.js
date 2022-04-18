import React from "react"

import { UserContext } from "../App";
import UserBox from "./UserBox"

const MainContent = () => {
    const userNameContext = React.useContext(UserContext);
    return (
        <div className="bg-green-400 border-2">
            <h1>MainContent here!</h1>
            <UserBox />
        </div>
    );
}

export default MainContent;