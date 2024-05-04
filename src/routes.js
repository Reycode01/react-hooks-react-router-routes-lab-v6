// src/routes.js
import React from 'react';
import { createRoutes } from '@remix-run/react';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Actors from './pages/Actors';
import Directors from './pages/Directors';
import ErrorPage from './pages/ErrorPage';

const routes = createRoutes([
  { path: '/', component: Home },
  { path: '/movie/:id', component: Movie },
  { path: '/actors', component: Actors },
  { path: '/directors', component: Directors },
  { path: '*', component: ErrorPage },
]);

export default routes;



