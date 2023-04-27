import React from 'react';
import Navbar from './components/Navbar';
import { RouterProvider } from 'react-router-dom';
import router from './router';

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
