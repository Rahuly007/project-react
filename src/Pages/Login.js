import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
    
    const navigate = useNavigate();
    const [input, setinput] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {

        setinput((prevInput) => {
            return {
                ...prevInput,
                [e.target.name]: e.target.value
            }
        })


    }
    
    const loginUser = (e) => {
        e.preventDefault()
        
        axios.post('http://localhost:3000/login',input).then((res)=>{
           if(res.data.status==200){
               const notify = (() => toast(res.data.msg))();
               localStorage.setItem('email',res.data.data)
               navigate('/')
               
           }else{
               alert(res.data.msg)
           }
        })
    }
    return (
        <React.Fragment>
            <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card" style={{ borderRadius: "1rem;" }}>
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                            alt="login form"
                                            className="img-fluid" style={{ borderRadius: "1rem 0 0 1rem" }}
                                        />
                                    </div>
                                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg-5 text-black">

                                            <form>

                                                <div className="d-flex align-items-center mb-3 pb-1">
                                                    <i className="fas fa-cubes fa-2x me-3" style={{ color: "#ff6219" }}></i>
                                                    <span className="h1 fw-bold mb-0">Logo</span>
                                                </div>

                                                <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Sign into your account</h5>

                                                <div className="form-outline mb-4">
                                                    <label className="form-label" for="form2Example17">Email address</label>
                                                    <input type="email" id="form2Example17" className="form-control form-control-lg" name='email' value={input.email} onChange={handleChange} />
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <label className="form-label" for="form2Example27">Password</label>
                                                    <input type="password" id="form2Example27" className="form-control form-control-lg" name='password' value={input.password} onChange={handleChange} />
                                                </div>

                                                <div className="pt-1 mb-4">
                                                    <button className="btn btn-dark btn-lg btn-block" type="button" onClick={loginUser} >Login</button>
                                                </div>

                                                <a className="small text-muted" href="#!">Forgot password?</a>
                                                <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>Don't have an account? <Link to="/register" style={{ color: "#393f81" }}>Register here</Link></p>
                                                <a href="#!" className="small text-muted">Terms of use.</a>
                                                <a href="#!" className="small text-muted">Privacy policy</a>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
