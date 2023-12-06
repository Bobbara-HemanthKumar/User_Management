import axios from "axios";
import { useState, useEffect } from "react";
import { Link  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './users.css';
export default function Users() {
   
    const [contactinfo, setContact] = useState([]);
    const [feedinfo, setfeed] = useState([]);
    const [studentinfo,setStudent] = useState([]);
    const [tutorinfo,setTutor] = useState([]);
    
    
    useEffect(() => {

        axios.get('http://localhost:5000/contactinfo').then((res) => {
            setContact(res.data);
        })
    }, [])

    useEffect(() => {

        axios.get('http://localhost:5000/feedinfo').then((res) => {
            setfeed(res.data);
        })
    }, [])
    useEffect(()=>{
        axios.get('http://localhost:5000/studen').then((res)=>{
            setStudent(res.data)
        })
    },[studentinfo])

    useEffect(()=>{
        axios.get('http://localhost:5000/tuto').then((res)=>{
            setTutor(res.data);
            
            
        })
    },[tutorinfo]) 

    


    
        // JavaScript code to count the number of rows in the table
        const updateEntryCount=()=>{
            
                const table = document.getElementById('data-table');
                const entriesCountSpan = document.getElementById('entries-count');
                const rowCount = table.rows.length  ;
    
                entriesCountSpan.textContent = rowCount;
            
            }

            const updateEntryCount1=()=>{
            
                const table = document.getElementById('data-table1');
                const entriesCountSpan = document.getElementById('entries-count1');
                const rowCount = table.rows.length ;
    
                entriesCountSpan.textContent = rowCount;
            
            }
            const updateEntryCount2=()=>{
            
                const table = document.getElementById('data-table2');
                const entriesCountSpan = document.getElementById('entries-count2');
                const rowCount = table.rows.length -1 ;
    
                entriesCountSpan.textContent = rowCount;
            
            }
            const updateEntryCount3=()=>{
            
                const table = document.getElementById('data-table3');
                const entriesCountSpan = document.getElementById('entries-count3');
                const rowCount = table.rows.length -1 ;
    
                entriesCountSpan.textContent = rowCount;
            
            }

            const contact = ()=>{
                document.getElementById('contdetails').style.display='block';
                document.getElementById('layout').style.display='none';
                
            }
            const back = ()=>{
                document.getElementById('contdetails').style.display='none';
                document.getElementById('feedbackdetails').style.display='none';
                document.getElementById('layout').style.display='grid';
                
            }

            const feed = ()=>{
                document.getElementById('feedbackdetails').style.display='block';
                document.getElementById('layout').style.display='none';
                
            }
    return (
        <>
            <section >
             <table id="data-table1" style={{display:'none'}} >
             {tutorinfo.map((item) =>
                            <>
                              <tr >
                                    <th scope="row">{item.id}</th>
                                    <td>{item.firstname}</td>
                                    
                                    <td>{item.email}</td>
                                   
                                    <td>{item.roletype}</td>
                                    
                                    
                                    
                                </tr>

                            </>
                        )}
            </table>   

                   <table id="data-table" style={{display:'none'}}>
                   {studentinfo.map((item) =>
                            <>
                                <tr >
                                    <th scope="row">{item.id}</th>
                                    <td>{item.firstname}</td>
                                    
                                    <td>{item.email}</td>
                                    
                                    <td>{item.roletype}</td>
                                    
                                   
                                    

                                    <td>{item.assigned_to}</td>
                                    
                                    <td>{item.status}</td>
                                </tr>
                            </>
                        )}
                        </table>

                        
                        
                <div id="layout" style={{ display: "grid",gridTemplateColumns:'auto auto auto ', gap: "30px", boxShadow: "2px 8px 32px 2px gray", margin: "50px 0 0 150px", borderRadius: '10px', width: '850px',height:'500px'}}>
                    
                        <div className="tiles"  onMouseOver={updateEntryCount} >
                        <Link to='/stu' style={{ textDecoration: 'none' }}>
                            <h1 align="center" style={{background:'grey',color:'white',borderRadius:'8px 8px 10px 10px'}}>Students</h1>
                            <h3 align="center" style={{color:'grey'}}>Total Entries:</h3>
                            <h2 align="center" style={{color:'black'}}><span id="entries-count"></span></h2>
                            </Link>
                        </div>

                    
                    <div className="tiles"  onMouseOver={updateEntryCount1} >
                    <Link to='/tut' style={{ textDecoration: 'none' }}>
                            <h1 align="center" style={{background:'grey',color:'white',borderRadius:'8px 8px 10px 10px'}}>Trainer</h1>
                            <h3 align="center" style={{color:'grey'}}>Total Entries:</h3>
                            <h2 align="center" style={{color:'black'}}><span id="entries-count1"></span></h2>
                            </Link>
                        </div>

                    <div className="tiles" >
                        <Link to='/finance' style={{ textDecoration: 'none' }}>

                            <h1 align="center" style={{background:'grey',color:'white',borderRadius:'8px 8px 10px 10px'}}>Finance</h1>
                            <h1 align="center" style={{color:'black'}}><span style={{fontSize:'32px'}}>&#8377;</span></h1>        
                        </Link>
                        </div>
                        <div className="tiles"  onClick={contact} onMouseOver={updateEntryCount2} style={{margin:'-20px 0 0 40px'}} >
                    <Link to='/users' style={{ textDecoration: 'none' }}  >
                            <h1 align="center" style={{background:'grey',color:'white',borderRadius:'8px 8px 10px 10px'}}>Contact</h1>
                            <h3 align="center" style={{color:'grey'}}>Total Entries:</h3>
                            <h2 align="center" style={{color:'black'}}><span id="entries-count2"></span></h2>
                            </Link>
                        </div>
                        <div className="tiles"  onClick={feed} onMouseOver={updateEntryCount3} style={{margin:'-20px 0 0 40px'}} >
                    <Link to='/users' style={{ textDecoration: 'none' }}>
                            <h1 align="center" style={{background:'grey',color:'white',borderRadius:'8px 8px 10px 10px'}}>Feedback</h1>
                            <h3 align="center" style={{color:'grey'}}>Total Entries:</h3>
                            <h2 align="center" style={{color:'black'}}><span id="entries-count3"></span></h2>
                            </Link>
                        </div>
                </div><br />
                <div style={{ display: "flex", gap: "30px", boxShadow: "2px 8px 32px 2px gray", margin: "30px 0 0 150px", borderRadius: '10px', width: '850px', }}>
                
               </div>

                {/* <div id="users" style={{ margin: '20px 0 0 5px' }}>
                    <button id="tutor" style={{ borderRadius: '10px', backgroundColor: "rgba(37, 117, 252, 1)", fontWeight: 'bold' }}><Link to={'/tut'} style={{ color: "white", textDecoration: "none" }}>Tutor</Link></button> &nbsp;
                    <button id="student" style={{ borderRadius: '10px', backgroundColor: "rgba(37, 117, 252, 1)", color: "white", fontWeight: 'bold' }}><Link to={'/stu'} style={{ color: "white", textDecoration: "none" }}>Student</Link></button>
                </div> */}


                <div id="contdetails" style={{display:'none'}}>
                <button onClick={back} style={{borderRadius:'10px',backgroundColor:"rgba(37, 117, 252, 1)",fontWeight:'bold',margin:'-300px 0 0 0'}}><Link to={'/users'} style={{color:"white",textDecoration:"none"}}>Back</Link></button> &nbsp;
                    <caption align="center" style={{ fontWeight: 'bold', fontSize: '20px', color: 'white', borderRadius: '0 10px 0 10px', background: 'grey', margin: '5px' }} >Contact_Details</caption>
                    <table id="data-table2" class="table table-bordered" style={{ borderColor: 'white', background: 'rgba(0, 0, 0,0.2)',fontFamily:'bahnschrift condensed' }}>

                        <thead>
                            <tr align="center">
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Comment</th>
                                
                            </tr>
                        </thead>
                        <tbody style={{fontFamily:'bahnschrift condensed'}}>
                            {contactinfo.map((item) =>
                                <>
                                    <tr align="center"  >
                                        <td >{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td align="left">{item.comment}</td>

                                    </tr>
                                </>
                            )}
                        </tbody>
                    </table><br /></div>

                    <div id="feedbackdetails" style={{display:'none'}}>
                <button onClick={back} style={{borderRadius:'10px',backgroundColor:"rgba(37, 117, 252, 1)",fontWeight:'bold',margin:'-300px 0 0 0'}}><Link to={'/users'} style={{color:"white",textDecoration:"none"}}>Back</Link></button> &nbsp;
                    <caption align="center" style={{ fontWeight: 'bold', fontSize: '20px', color: 'white', borderRadius: '0 10px 0 10px', background: 'grey', margin: '5px' }} >Feedback_Details</caption>
                    <table id="data-table3" class="table table-bordered" style={{ borderColor: 'white', background: 'rgba(0, 0, 0,0.2)' }}>

                        <thead>
                            <tr align="center">
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Feedback</th>
                                
                            </tr>
                        </thead>
                        <tbody style={{fontFamily:'bahnschrift condensed'}}>
                            {feedinfo.map((item) =>
                                <>
                                    <tr align="center"  >
                                        <th scope="row">{item.id}</th>
                                        <td>{item.firstname}</td>
                                        <td>{item.email}</td>
                                        <td align="left">{item.feedback}</td>

                                    </tr>
                                </>
                            )}
                        </tbody>
                    </table><br /></div>

            </section>

        </>
    )
}