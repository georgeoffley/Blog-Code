import React from "react"
import Header from "./Header"
import { UserContext } from "./UserContext"


export const Page: React.FC = (user) => {
    return (
        // Todo fix this
        <UserContext.Provider value={user}>
            <Header />
        </UserContext.Provider>
    )
}

export default Header