// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from '@remix-run/react';
import routes from './routes';

function App() {
  return (
    <RouterProvider router={createBrowserRouter()}>
      {routes}
    </RouterProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);



