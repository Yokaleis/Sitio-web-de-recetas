import { BrowserRouter, Routes, Route } from 'react-router'

import { useState } from 'react'

import './App.css'
//LAYOUT
import { LayoutAdmin } from './layouts/layoutAdmin'
//PAGES PUBLIC
import { Login } from './pages/public/Login'

//PAGES ADMIN
import { Home } from './pages/admin/Home'
import { About } from './pages/admin/About'
import { FilterSearch } from './pages/admin/Recipes'
import { Products } from './pages/admin/Products'

function App() {  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>

        <Route path='/' element={<LayoutAdmin/>}>
          <Route index element={<Home/>}/>
          <Route path='aboutUs' element={<About/>}/>
          <Route path='recipes' element={<FilterSearch/>}/>
          <Route path='products' element={<Products/>}/>

        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
