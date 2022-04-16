import React from "react"
import { useContext } from "react";

import Header from "./Header"
import Footer from "./Footer"

export const Page = () => {

    return (
        <>
            <Header children={contextUser} />
            <Footer children={contextUser} />
        </>
    );
}