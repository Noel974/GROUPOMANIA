import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"

import Home from "../Pages/home"
//import Login from "../Pages/Login"

const Routes =() => {
    return(
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={Home}></Route>
        </Routes>
        </BrowserRouter>
    )
}