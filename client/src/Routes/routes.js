import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import axios from 'axios';
import Home from '../Pages/home';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import ArticlePost from '../Pages/ArticlePost';


const index = () => {
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.token;
    console.log(axios.defaults.headers.common['Authorization']);
    return (
          <BrowserRouter>
          <Routes>
            <Route path='/signup' element = {<Signup/>}/>
            <Route path= '/login' element = {<Login/>}/>
            <Route path='/' element = {<Home/>}/>
            <Route path='/post/:id' element={<ArticlePost />} />
          </Routes>
          </BrowserRouter>
        );
      };


export default index;