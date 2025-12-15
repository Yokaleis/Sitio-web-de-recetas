import { BrowserRouter, Routes, Route } from 'react-router'
import { useState } from 'react'



import './App.css'
//LAYOUT
import { LayoutAdmin } from './layouts/layoutAdmin'
//PAGES AUTH
import { Login } from './pages/auth/Login'
import { ForgetPassword } from './pages/auth/ForgetPassword'
import { Register } from './pages/auth/Register'

//PAGES ADMIN
import { Home } from './pages/admin/Home'
import { About } from './pages/admin/About'
import { FilterSearch } from './pages/admin/Recipes'
import { Products } from './pages/admin/Products'
import PrivateRoute from './components/PrivateRoute'
import { AuthProvider } from './context/authContext'
import { Error404 } from './pages/components/Error404'
import { Cart } from './pages/admin/Cart'




function App() {



  return (


    <>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
              <Route path='/registro' element={<Register />} />
              <Route path='/olvide-contraseña' element={<ForgetPassword />} />

              <Route path='/' element={<LayoutAdmin />}>
                <Route index element={<Home />} />
                <Route path='aboutUs' element={<About />} />
                <Route path='recipes' element={<FilterSearch />} />
                <Route path='products' element={<Products />} />
              </Route>


              <Route element={<PrivateRoute/>}>
                <Route path='/' element={<LayoutAdmin/>}>
                  <Route path='cart' element={<Cart />} />
                </Route>
              </Route>

              <Route path='*' element={<Error404/>}></Route>
           

        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
