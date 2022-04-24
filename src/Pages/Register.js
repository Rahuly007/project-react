import React, { useEffect, useState, } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export const Register = () => {

    const navigate = useNavigate();
    const [input, setinput] = useState({
        firstName: "",
        email: "",
        password: "",
        role: ""
    })
    const handleChange = (e) => {
        // console.log(e.target);
        const { name, value } = e.target;

        setinput((prevInput) => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }
    const handleClick = (event) => {
        event.preventDefault();
        let newData = {
            firstName: input.firstName,
            email: input.email,
            password: input.password,
            role: input.role
        }

        axios.post('http://localhost:3000/users', newData).then(res => {
            console.log(res.data);
            navigate('/');
        })
    }
    return (
        <React.Fragment>
            <form >
                <section className="vh-100" style={{ backgroundColor: " #eee" }}>
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-lg-12 col-xl-11">
                                <div className="card text-black" style={{ borderRadius: "25px" }}>
                                    <div className="card-body p-md-5">
                                        <div className="row justify-content-center">
                                            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                                <form className="mx-1 mx-md-4">

                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <label className="form-label" for="form3Example1c">Your Name</label>
                                                            <input autoComplete='off' type="text" id="form3Example1c" className="form-control" name='firstName' value={input.firstName} onChange={handleChange} />
                                                        </div>
                                                    </div>

                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <label className="form-label" for="form3Example3c">Your Email</label>
                                                            <input autoComplete='off' type="email" id="form3Example3c" className="form-control" name='email' value={input.email} onChange={handleChange} />
                                                        </div>
                                                    </div>

                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <label className="form-label" for="form3Example4c">Password</label>
                                                            <input autoComplete='off' type="password" id="form3Example4c" className="form-control" />
                                                        </div>
                                                    </div>

                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <label className="form-label" for="form3Example4cd">Repeat your password</label>
                                                            <input autoComplete='off' type="password" id="form3Example4cd" className="form-control" name='password' value={input.password} onChange={handleChange} />
                                                        </div>
                                                    </div>



                                                    <div className="form-check d-flex justify-content-center mb-5">
                                                        <input
                                                            // className="form-check-input me-2"
                                                            type="checkbox"
                                                            value=""
                                                            id="form2Example3c"
                                                        /> <hr />
                                                        <label className="form-check-label" for="form2Example3">
                                                            I agree all statements in <a href="#!">Terms of service</a>
                                                        </label>
                                                    </div>

                                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                        <button onClick={handleClick} className="btn btn-primary btn-lg">Register</button>
                                                    </div>

                                                </form>

                                            </div>
                                            <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </form>

        </React.Fragment>
    )
}
