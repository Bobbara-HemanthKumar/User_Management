import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
export default function Login() {
    const Nav = useNavigate();
    const [data, setData] = useState({ email: '', password: '' });
    

    const handler = (e) => {
        const { name, value } = e.target;

        setData((prevState) =>
            ({ ...prevState, [name]: value }));


    }
    

    const login = () => {
        const userdetails = { email: data.email, password: data.password }
        axios.post('http://localhost:5000/login', userdetails).then((res) => {
            console.log('loginres', res.data[0].firstname);

            localStorage.setItem('username', res.data[0].firstname);
            localStorage.setItem('roletype', res.data[0].roletype);

            if (res !== '') {
                data.email = '';
                data.password = '';
                data.roletype = '';
                alert('logged in successfully');
                if (res.data[0].roletype === 'Admin') {
                    Nav('/users');
                }
                
            }


        })

        axios.post('http://localhost:5000/tutorlogin', userdetails).then((res) => {
            console.log('loginres', res.data[0].firstname);

            localStorage.setItem('username', res.data[0].firstname);
            localStorage.setItem('roletype', res.data[0].roletype);

            if (res !== '') {
                data.email = '';
                data.password = '';
                data.roletype = '';
                alert('logged in successfully from Tutor Table');
                if (res.data[0].roletype === 'Tutor') {
                    Nav(`/tutor/${res.data[0].id}/${res.data[0].course}`);
                }
                
            }


        })

        axios.post('http://localhost:5000/studentlogin', userdetails).then((res) => {
            console.log('loginres', res.data[0].firstname);

            localStorage.setItem('username', res.data[0].firstname);
            localStorage.setItem('roletype', res.data[0].roletype);
            localStorage.setItem('id', res.data[0].id);

            if (res !== '') {
                data.email = '';
                data.password = '';
                data.roletype = '';
                alert('logged in successfully from Student Table');
                if (res.data[0].roletype === 'Student') {
                    Nav(`/student/${res.data[0].id}`);
                }
                
            }


        })


    }

    const togglePasswordVisibility = () => {
        var passwordInput = document.getElementById("typePasswordX");
        var toggleIcon = document.getElementById("togglePassword");

        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            toggleIcon.innerHTML = '<i class="bi bi-eye"></i>';
        } else {
            passwordInput.type = "password";
            toggleIcon.innerHTML = '<i class="bi bi-eye-slash"></i>';
        }
    }

    



    return (
        <>
    <section>
            
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="  text-black" style={{ borderRadius: "1rem",background:'white',margin:'-20px 0 0 0' }} >
                                <div className="card-body p-5 text-center">

                                    <div className="mb-md-5 mt-md-4 pb-5">

                                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                        <p className="text-black-50 mb-5">Please enter your Email and password!</p>

                                        <div className="form-outline form-white mb-4">
                                            <label className="form-label" for="typeEmailX" style={{ float: 'left' }}>Email</label>
                                            <input type="email" id="typeEmailX" name="email" class="form-control form-control-lg" placeholder='Enter your email' onChange={handler} />

                                        </div>

                                        <div className="form-outline form-white mb-4">
                                            <label className="form-label" for="typePasswordX" style={{ float: 'left' }}>Password</label>
                                            <input type="password" id="typePasswordX" name="password" class="form-control form-control-lg" placeholder='Enter your password' onChange={handler} />
                                            <button class="btn btn-outline-secondary" type="button" id="togglePassword" onClick={togglePasswordVisibility}>
                                                <i class="bi bi-eye"></i>
                                            </button>
                                        </div>

                                       
                                        <button className="btn btn-outline-dark  btn-lg px-5" type="submit" onClick={login}>Login</button><br /><br />
                                        <p className="mb-0">Don't have an account? <a href="/register" className="text-black-50 fw-bold" >Register Now!</a>
                                        </p>
                                    </div>
                                    <div class="video-container">
                                        <video autoPlay muted loop id="video-background" >
                                            <source src="library_-_846 (720p).mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           
            </section>


        </>
    )
}