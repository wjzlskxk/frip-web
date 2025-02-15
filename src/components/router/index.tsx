import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from '../Auth/SIgnin';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
