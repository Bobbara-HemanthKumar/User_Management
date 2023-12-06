import axios from "axios"
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {  Link, useParams } from "react-router-dom";
import './tutor.css';
import Modal from 'react-modal';

Modal.setAppElement('#root'); 

export default function Tutor() {
   
    const [courseinfo,setCourse] = useState([])
   
    const [tutorinfo, setTutor] = useState([])
    const useParam = useParams();
    const { id } = useParam;
    const { course } = useParam;
   

   
   
    useEffect(() => {
        axios.get(`http://localhost:5000/tutor/${id}/${course}`).then((res) => {
            setTutor(res.data);
        
            if(res.data[0].course === 'Full Stack'){
                axios.post('http://localhost:5000/fullstack').then((res)=>{
                    setCourse(res.data);
        
                    
                    
                    
                    
                })
            } else if(res.data[0].course === 'Testing'){
                axios.post('http://localhost:5000/testing').then((res)=>{
                    setCourse(res.data);
        
                    
                    
                    
                    
                })
            }

        })
    }, [tutorinfo, id,course])


   

    const task = () =>{
        let task1 = document.getElementById('taskdetails');
    
        if(task1.style.display === 'none'){
            task1.style.display = 'block'
        }else{
            task1.style.display = 'none'
        }
       }

    
    return (
        <>
            <section>
               
                <div>
                    <caption align="center" style={{ fontWeight: 'bold', fontSize: '20px', color: 'white', borderRadius: '0 10px 0 10px', background: 'grey', margin: '5px' }} >Trainer</caption>
                   
                    <table className="table table-bordered" style={{ borderColor: 'white', background: 'rgba(0, 0, 0,0.2)' }} >
                        <thead>
                            <tr align="center" >
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                               
                                <th scope="col">Email</th>
                               
                                <th scope="col">Role</th>
                                <th scope="col">Course</th>
                                <th scope="col">Start_time</th>
                                <th scope="col">End_time</th>
                                <th scope="col">Action</th>
                               


                            </tr>
                        </thead>
                        <tbody align="center" style={{ color: 'black', background: 'rgba(255, 255, 255,0.2)',fontSize:'20px',fontFamily:'bahnschrift condensed' }}>

                            {tutorinfo.map((item) =>
                                <>
                                    <tr >
                                        <th scope="row">{item.id}</th>
                                        <td>{item.firstname}</td>
                                        
                                        <td>{item.email}</td>
                                        
                                        <td>{item.roletype}</td>
                                        <td>{item.course}</td>
                                        <td>{item.start_time}</td>
                                        <td>{item.end_time}</td>
                                        
                                        <td><button type="button" className="btn btn-outline-primary" onClick={task} >Task</button></td>
  
                                    </tr>

                                </>
                            )}
                        </tbody>

                    </table>
                
                
                    <table id="taskdetails" className="table table-bordered" style={{borderColor:'white',background: 'rgba(0, 0, 0,0.2)',borderRadius:'20px',display:'none',width:'827px',margin:'0 0 0 120px'}} >
                    <thead>
                        <tr align="center" >
                            
                            
                            
                            <th scope="col">Content</th>
                           
                            <th scope="col">date</th>
                            <th scope="col">Task Status</th>
                            <th scope="col">Test</th>
                            <th scope="col">Action</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody className="cour" align="center" style={{color:'black',background: 'rgba(255, 255, 255,0.2)',fontSize:'20px',fontFamily:'bahnschrift condensed' }}>
                    
                        {courseinfo.map((item) =>
                            <>
                              <tr  >
                                    
                                   
                                    
                                    <td >
                                    {item.content}
                                    </td>
                                    
                                    
                                    
                                   <td>
                                    {item.date}
                                   </td>
                                   <td>
                                    {item.task_status}
                                   </td>
                                   <td>
                                    {item.test}
                                   </td>
                                   <td>
                                    <button id="upd" name="tbupdate"  style={{borderRadius:'4px'}}><Link to={`/tutor/${item.id}/${item.course}/courseupdate/${item.content}`} style={{textDecoration:'none'}}>Edit</Link></button>
                                   </td>
                                </tr>

                            </>
                        )}
                    </tbody>

                   </table>
                  
                   

                    
                <br />
                </div>
                
            </section>


        </>
    )
}