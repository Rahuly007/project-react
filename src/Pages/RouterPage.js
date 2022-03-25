import React from 'react'
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom'
import { Checkout } from './Checkout'
import { Contact } from './Contact'
import { Home } from './Home'
import { Login } from './Login'
import { Register } from './Register'
import { Shop } from './Shop'
import { ShopDetail } from './ShopDetail'
import { ShoppingCart } from './ShoppingCart'

export const RouterPage = () => {
    return (
        <div>
           
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/shop' element={<Shop/>} />
                    <Route path='/shopdetail' element={<ShopDetail/>} />
                    <Route path='/cart' element={<ShoppingCart/>} />
                    <Route path='/checkout' element={<Checkout/>} />
                    <Route path='/contact' element={<Contact/>} />
                    <Route path='/register' element={<Register/>} />
                    <Route path='/login' element={<Login/>} />
                </Routes>
           
        </div>
    )
}
