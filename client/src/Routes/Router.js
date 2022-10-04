import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Commentaire from '../pages/Commentaire';
import Profil from '../pages/Profil';
import NotFound from '../pages/NotFound';
//import Post from '../components/Posts/Post';
import HomePage from '../pages/Homepage';
import Auth from '../Utils/Auth';

export default function Router() {

  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route element={<Auth />}>
        <Route path="/" element={<Commentaire />} />
        {/*<Route path="/post/:postId" element={<Post />} />*/}
        <Route path="/profil/:id" element={<Profil />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}