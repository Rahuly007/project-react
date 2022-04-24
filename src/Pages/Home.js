import React from 'react'
import { Link } from 'react-router-dom'
import { Category } from '../Components/Category'
import { Features } from '../Components/Features'
import { Footer } from '../Components/Footer'
import { Navbar } from '../Components/Navbar'
import { Offer } from '../Components/Offer'
import { Product } from '../Components/Product'
import { Product2 } from '../Components/Product2'
import { Subscribe } from '../Components/Subscribe'
import { Topbar } from '../Components/Topbar'
import { Vendor } from '../Components/Vendor'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Home = () => {
    var emailAuth = localStorage.getItem('email');
    return (
        <React.Fragment>
            <ToastContainer />
            <Topbar />


            <Navbar email={emailAuth}/>

            <Features />

            <Category />


            <Offer />

            {/* Trandy products */}
            <div className="container-fluid pt-5">
                <div className="text-center mb-4">
                    <h2 className="section-title px-5"><span className="px-2">Trandy Products</span></h2>
                </div>
                <Product />
            </div>




            <Subscribe />



            {/* Just Arrived*/}
            <div className="container-fluid pt-5">
                <div className="text-center mb-4">
                    <h2 className="section-title px-5"><span className="px-2">Just Arrived</span></h2>
                </div>
                <Product2 />
            </div>




            <Vendor />



            <Footer />


            {/* <!-- Back to Top --> */}
            <Link to="/" className="btn btn-primary back-to-top"><i className="fa fa-angle-double-up"></i></Link>



        </React.Fragment>
    )
}
