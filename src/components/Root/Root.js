import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import SearchResult from "../SearchResults/SearchResults";

function Root(){
    return(
        <>
        <Navbar />
        <Outlet />
        </>
    )
}
export default Root