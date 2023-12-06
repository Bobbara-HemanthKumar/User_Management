import './update.css';
import React from 'react';


import { useParams } from 'react-router-dom';

import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


export default function TutorUpdate() {
    const Nav = useNavigate();
    const useParam = useParams();
    const { id } = useParam;
    

    const [data, setData] = useState({ firstname: '', email: '', password: '', roletype: '' });
    
   

    const handler = (e) => {

        const { name, value } = e.target;

        setData((prevState) =>
            ({ ...prevState, [name]: value }));

    }


    React.useEffect(() => {
        axios.get(`http://localhost:5000/tutorsingleuser/${id}`).then((res) => {

            setData({ firstname: res.data[0].firstname, email: res.data[0].email, password: res.data[0].password, course: res.data[0].course, roletype: res.data[0].roletype, assigned_to: res.data[0], status: res.data[0] })
        }
        )
    }, [id])


    const update = () => {
        const userdetails = { firstname: data.firstname, email: data.email, password: data.password, course: data.course,start_time: data.start_time, end_time: data.end_time, roletype: data.roletype, assigned_to: data.assigned_to, status: data.status }
        axios.post(`http://localhost:5000/tutorupdateuser/${id}`, userdetails).then((res) => {
            console.log(res.data);
            if (res !== '') {
                alert('details  updated successfully!!!!');
                console.log({ id });
                Nav('/tut')
                
                data.firstname = '';

                data.email = '';
                data.password = '';
                data.roletype = '';

                data.assigned_to = '';
                data.status = '';
            }

        })




    }

   

    return (
        <section>
            <div  >


                <div className="mask d-flex gradient-custom-3" style={{ height: '100%', margin: '-25px 0 0 0' }}>
                    <div className="container h-100" style={{ padding: '6%' }}>
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card" style={{ margin: "-15px 0 0 -225px", width: '900px', height: '500px' }} >
                                    <div className="card-body p-5" style={{ height: '520px' }} >
                                        <div style={{ background: 'black', marginTop: '-30px', borderRadius: '10px', width: '100%' }}>
                                            <h2 className="text-uppercase text-center mb-5" style={{ color: 'white' }}>Update Register Info</h2>
                                        </div>

                                        <div style={{ display: 'flex', gap: '30px' }}>
                                            <div className="form-outline mb-4">

                                                <label className="form-label" htmlFor="form3Example1cg" style={{ fontWeight: 'bold', fontSize: '18px' }}>First Name</label>
                                                <input type="text" id="form3Example1cg" className="form-control form-control-lg" value={data.firstname} name="firstname" onChange={handler} />


                                            </div>

                                           

                                            <div>
                                                <label className="form-label" htmlFor="form3Example1cg" style={{ fontWeight: 'bold', fontSize: '18px' }}>Email</label>
                                                <input name="email" type="email" id="form3Example3cg" className="form-control form-control-lg" value={data.email} onChange={handler} />
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example4cg" style={{ fontWeight: 'bold', fontSize: '18px' }}>Password</label>
                                                <input type="password" name="password" id="form3Example4cg" className="form-control form-control-lg" value={data.password} onChange={handler} />
                                            </div>
                                        </div><br />
                                        
                                        <div className='Assign' style={{ display: 'flex' }}>
                                            <div >
                                                <label style={{ fontWeight: 'bold', margin: '10px 0 0 0', fontSize: '18px' }} id='cours' >Course Catalog</label>&nbsp;
                                                <select name='course' onChange={handler} id='select' style={{ fontSize: '18px' }} >
                                                    <option >Select</option>
                                                    <option>Full Stack</option>
                                                    <option >Devops</option>
                                                    <option >Testing</option>
                                                    <option >Sales Force</option>
                                                </select>
                                            </div>&emsp;
                                            
                                            <div>
                                            <label style={{ fontWeight: 'bold', margin: '10px 0 0 0', fontSize: '18px' }} >Schedule:</label>
                                            <label style={{ margin: '0 0 0 10px', fontWeight: 'bold' }}>Start Time</label>&nbsp;
                                            <input name='start_time' type='time' onChange={handler} />
                                            <label style={{ margin: '0 0 0 10px', fontWeight: 'bold' }}>End Time</label>&nbsp;
                                            <input name='end_time' type='time' onChange={handler} />



                                        </div><br />

                                        </div><br />
                                        
                                        
                                        <div style={{ display: 'flex', gap: "50px" }}>
                                            
                                            <div>
                                                <label style={{ fontWeight: 'bold' ,margin:'20px 0 0 0' }}>Status</label>&nbsp;
                                                <select name='status' value={data.status} onChange={handler} style={{ borderRadius: '5px', height: '30px' }}>
                                                    <option>Select</option>
                                                    <option>Active</option>
                                                    <option>Inactive</option>
                                                </select><br /><br />
                                            </div>



                                        </div>
                                        

                                        
                                        <div>
                                            <div className="d-flex justify-content-center">
                                                <button type="button"
                                                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={update} style={{ fontFamily: "'Times New Roman', Times, serif", fontWeight: 'bold', margin: '20px 0 0 0' }}>Update</button>
                                            </div>


                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};