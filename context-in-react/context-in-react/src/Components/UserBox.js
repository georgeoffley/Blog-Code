import React from "react"

import { UserContext } from "../App";

const MainContent = () => {
    const userNameContext = React.useContext(UserContext);
    return (
        <div class="p-5 bg-blue-100">
            <h3 class="text-black mb-4 text-sm font-bold">
                User Card
            </h3>
            <div class="border-4 border-blue-800 bg-white p-1 rounded-lg shadow-lg">
                <h2 class="text-2xl font-bold mb-2 text-gray-800">User Name</h2>
                <p class="text-gray-700">{userNameContext}</p>
            </div>
        </div>
    )
};

export default MainContent;