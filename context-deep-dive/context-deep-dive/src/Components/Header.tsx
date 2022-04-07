import React from "react"

import { UserContext } from "./UserContext"

export const Header: React.FC = ({ user }) => {
    return (
        <div className="header">
            <h1>Header here!</h1>
            <h2>Username: {user}</h2>
        </div>
    )
}

export default Header