import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';

import { Index } from './Index';
import { Form } from './Form';
import { Header } from './Header';

function App() {


  return (
    <>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Index />}></Route>
        <Route exact path='/form' element={<Form />}></Route>
      </Routes>
    </>
  )
}

export default App
