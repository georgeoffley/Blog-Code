import React from "react"

import UserContext from "../App"

type Props = {
    title: string;
}

export const Header: React.FC<Props> = ({title}) => {
    return (
        <div className="header">
            <h1>Header here!</h1>
            <h2>Props Here: {title}</h2>
        </div>
    )
}

export default Header