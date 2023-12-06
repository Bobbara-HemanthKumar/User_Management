import './update.css';
import React from 'react';


import { useParams } from 'react-router-dom';

import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


export default function Update() {
    const Nav = useNavigate();
    const useParam = useParams();
    const { id } = useParam;
    const { roletype } = useParam;

    const [data, setData] = useState({ firstname: '', email: '', password: '', roletype: '' });
   
    const [tutorname, setName] = useState([]);

    const handler = (e) => {

        const { name, value } = e.target;

        setData((prevState) =>
            ({ ...prevState, [name]: value }));

    }

    
    
    const discount = () => {
        let actual = document.getElementById('actual').value;
        let total = document.getElementById('total').value;
        let diff =document.getElementById('diff').value;
        let dis =document.getElementById('discount').value;
        

        diff = actual - total;

        document.getElementById('diff').value = diff;
        
        dis =(diff/actual)*100;

        document.getElementById('discount').value = dis;

    }

    

    React.useEffect(() => {
        axios.get(`http://localhost:5000/singleuser/${id}`).then((res) => {
            
            setData({ firstname: res.data[0].firstname, email: res.data[0].email, password: res.data[0].password,course: res.data[0].course,content: res.data[0].content, roletype: res.data[0].roletype, phone_number: res.data[0].phone_number, assigned_to: res.data[0].assigned_to, status: res.data[0].status,total: res.data[0].total,paid: res.data[0].paid,remaining: res.data[0].remaining,start:res.data[0].start,end:res.data[0].end,project:res.data[0].project  })
        }
        )
    }, [id])


    const update = () => {
        const userdetails = { firstname: data.firstname, email: data.email, password: data.password,course: data.course,content: data.content,actual:data.actual,total: data.total,discount:data.discount,paid: data.paid,remaining: data.remaining,start:data.start,end:data.end,project:data.project, roletype: data.roletype, assigned_to: data.assigned_to, status: data.status, fee_detail: data.fee_detail}
        axios.post(`http://localhost:5000/updateuser/${id}`, userdetails).then((res) => {
            console.log(res.data);
            if (res !== '') {
                alert('details  updated successfully!!!!');
                console.log({ id });
                Nav('/stu')
                
                data.firstname = '';

                data.email = '';
                data.password = '';
                data.roletype = '';

                data.assigned_to = '';
                data.status = '';
            }

        })




    }

    useEffect(() => {
        axios.get(`http://localhost:5000/role/${roletype}`).then((res) => {
            setName(res.data)
        })
    }, [roletype])

    return (
        <section>
            <div  >


                <div  style={{ margin:'-25px 0 0 0',background:'rgba(143,211,244,0.5)',height:'120vh' }}>
                    <div className="container h-100" style={{ padding: '6%' }}>
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div  style={{ margin: "-15px 0 0 -255px", width: '1000px', height: '650px',background:'white',borderRadius:'10px' }} >
                                    <div className="card-body p-5" style={{ height: '520px' }} >
                                        <div style={{ marginTop: '-30px', borderRadius: '10px', width: 'auto' }}>
                                            <h3 className="text-uppercase text-center mb-5" style={{ color: 'black',textDecoration:'underline' }}>Update Register Info</h3>
                                        </div>

                                        <div style={{ display: 'flex', gap: '30px' }}>
                                            <div className="form-outline mb-4">

                                                <label className="form-label" htmlFor="form3Example1cg" style={{ fontWeight: 'bold',fontSize:'18px' }}>First Name</label>
                                                <input type="text" id="form3Example1cg" className="form-control form-control-lg" value={data.firstname} name="firstname" onChange={handler} readOnly />


                                            </div>

                                           

                                            <div>
                                                <label className="form-label" htmlFor="form3Example1cg" style={{ fontWeight: 'bold',fontSize:'18px' }}>Email</label>
                                                <input name="email" type="email" id="form3Example3cg" className="form-control form-control-lg" value={data.email} onChange={handler} readOnly />
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example4cg" style={{ fontWeight: 'bold',fontSize:'18px' }}>Password</label>
                                                <input type="password" name="password" id="form3Example4cg" className="form-control form-control-lg" value={data.password} onChange={handler} readOnly />
                                            </div>
                                        </div><br />
                                        

                                        <div className='Assign' style={{ display: 'flex' }}>
                                            <div >
                                                <label style={{ fontWeight: 'bold',margin:'10px 0 0 0',fontSize:'18px' }} id='cours' >Course Catalog</label>&nbsp;
                                                <select name='course' onChange={handler} id='select' style={{  fontSize:'18px'}  } >
                                                    <option >Select</option>
                                                    <option>Full Stack</option>
                                                    <option >Devops</option>
                                                    <option >Testing</option>
                                                    <option >Sales Force</option>
                                                </select>
                                            </div>
                                            <div >&nbsp;

                                                <label style={{ margin: '10px 0 0 50px ', fontWeight: 'bold' ,fontSize:'18px'}} id='subj'>Content</label>&nbsp;
                                               
                                                <select name='content' onChange={handler} id='content' style={{  fontSize:'18px'}  }  >
                                                    <option >Select</option>
                                                    
                                                    <option>Programming language,OS concept ,Linux,Cloud Computing</option>
                                                    <option >HTML,CSS,J.S,REACT,NODE</option>
                                                    <option >Java oops Concept,Selenium,Cucumber</option>
                                                    <option >SalesForce Admin,SalesForce Development</option>
                                                </select>
                                            </div>&emsp;
                                            
                                        </div><br />
                                        <div>
                                        <label style={{  fontWeight: 'bold' ,fontSize:'18px' }} >Schedule:</label>&nbsp;
                                            <label style={{ margin:'0 0 0 30px',  fontWeight: 'bold' }}>Start Date</label>&nbsp;
                                            <input name='start' type='date' onChange={handler}/>
                                            <label style={{ margin:'0 0 0 50px', fontWeight: 'bold' }}>End Date</label>&nbsp;
                                            <input name='end' type='date' onChange={handler}/>
                                            
                                                <label style={{ fontWeight: 'bold', margin: '30px 0 0 50px' }}>Assaiged to</label>&nbsp;
                                                <select name='assigned_to' value={data.assigned_to} onChange={handler} style={{ borderRadius: '5px', height: '30px' }}>
                                                    <option>Please Select</option>
                                                    {tutorname.map((val) =>
                                                        <option value={val.firstname}>{val.firstname}</option>
                                                    )
                                                    }
                                                </select>
                                            
                                        </div><br/>
                                        
                                        <div style={{ display: 'flex', gap: '20px' }}>
                                            
                                                <label style={{ margin: '15px 0 0 0 ', fontWeight: 'bold' }} >Fee Structure:</label>&nbsp;
                                                <div>
                                                    <label style={{ margin: '15px 0 0 -35px ', fontWeight: 'bold' }}>Actual</label>
                                                    <input type='text' id='actual' name='actual' style={{ margin: '-40px 0 0 10px', borderRadius: '3px', outline: 'none' }} size={10} onChange={handler} />&nbsp;
                                                </div>
                                                <div>
                                                    <label style={{ margin: '15px 0 0 0 ', fontWeight: 'bold' }}>Total</label>
                                                    <input type='text' id='total' name='total' style={{ margin: '-40px 0 0 10px', borderRadius: '3px', outline: 'none' }} size={10} onChange={handler} onKeyUp={discount}/>&nbsp;
                                                </div>
                                                <div style={{display:'none'}}>
                                                    <label style={{ margin: '15px 0 0 0 ', fontWeight: 'bold' }}>Difference</label>
                                                    <input type='text' id='diff' name='diff' style={{ margin: '-40px 0 0 10px', borderRadius: '3px', outline: 'none' }} size={10} onChange={handler} />&nbsp;
                                                </div>
                                                <div >
                                                    <label style={{ margin: '15px 0 0 0 ', fontWeight: 'bold' }}>Discount</label>&#x25;
                                                    <input type='number' id='discount' name='discount' style={{ margin: '-40px 0 0 10px', borderRadius: '3px', outline: 'none' ,width:'40px',alignItems:'center'}}  onChange={handler} readOnly />&nbsp;
                                                </div>
                                                <div>
                                                    <label style={{ margin: '15px 0 0 0 ', fontWeight: 'bold' }}>Paid</label>
                                                    <input type='text' id='paid' name='paid' style={{ margin: '-40px 0 0 10px', borderRadius: '3px', outline: 'none' }} size={10} onChange={handler} />&nbsp;
                                                </div>
                                                <div>
                                                    <label style={{ margin: '15px 0 0 0 ', fontWeight: 'bold' }}>Remaining</label>
                                                    <input type='text' id='remaining' name='remaining' style={{ margin: '-40px 0 0 10px', borderRadius: '2%', outline: 'none'  }} size={10}   onChange={handler}/>&nbsp;
                                                </div>
                                                
                                            




                                        </div><br/>
                                        <div style={{ display: 'flex', gap: "50px" }}>
                                            <div >
                                                <label style={{ fontWeight: 'bold',margin:'20px 0 0 0' }}>Project/Internship</label>
                                                <input type='text' name='project' id='project'  className="form-control form-control-lg" style={{margin: '-30px 0 0 160px' }} onChange={handler}/>
                                            </div>
                                            

                                            <div>
                                                <label style={{ fontWeight: 'bold', margin: '15px 0 0 150px' }}>Status</label>&nbsp;
                                                <select name='status' value={data.status} onChange={handler} style={{ borderRadius: '5px', height: '30px' }}>
                                                    <option>Select</option>
                                                    <option>Active</option>
                                                    <option>Inactive</option>
                                                </select><br /><br />
                                            </div>

                                            

                                        </div>
                                        <div>
                                                <label style={{ fontWeight: 'bold', margin: '15px 0 0 0' }}>Fee_Detail</label>&nbsp;
                                                <select name='fee_detail' value={data.fee_detail} onChange={handler} style={{ borderRadius: '5px', height: '30px' }}>
                                                    <option>Select</option>
                                                    <option>Paid</option>
                                                    <option>Pending</option>
                                                </select><br /><br />
                                            </div>

                                        

                                        <div>
                                            <div className="d-flex justify-content-center">
                                                <button type="button"
                                                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={update} style={{ fontFamily: "'Times New Roman', Times, serif", fontWeight: 'bold',margin:'-30px 0 0 0' }}>Update</button>
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