import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"

import Login from "../Pages/Login"

const Rotas =() => {
    return(
        <BrowserRouter>
        <Routes>
            <Route exact path="/"></Route>
            <Route path="/" element={Login}></Route>
        </Routes>
        </BrowserRouter>
    )
}