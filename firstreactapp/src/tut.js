import axios from "axios"
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link, useNavigate,useParams} from "react-router-dom";

export default function TutorData(){
    
    const [tutorinfo,setTutor] = useState([])
    const useParam= useParams();
    const {id} = useParam;
     const Nav = useNavigate();
    useEffect(()=>{
        axios.get('http://localhost:5000/tuto').then((res)=>{
            setTutor(res.data);
            
            
        })
    },[tutorinfo,id]) 

   
    const del = (id) => {
           
           axios.post(`http://localhost:5000/deltut/${id}`).then((res) => {
               
                    alert('Record deleted successfully!!!!');
                   console.log({id});
                   Nav('/tut')
    
           })
        
        }


    return(
        <>
        <section>
        <div id="users" style={{margin:'20px 0 0 5px'}}>
                    <button id="tutor" style={{borderRadius:'10px',backgroundColor:"rgba(37, 117, 252, 1)",fontWeight:'bold'}}><Link to={'/users'} style={{color:"white",textDecoration:"none"}}>Back</Link></button> &nbsp;
                    
                   </div>
        <div>
        <caption align="center" style={{fontWeight:'bold' ,fontSize:'20px',color:'white',borderRadius:'0 10px 0 10px',background:'grey',margin:'5px'}} >Trainer</caption>
                <table className="table table-bordered" style={{borderColor:'white',background: 'rgba(0, 0, 0,0.2)'}} >
                    <thead>
                        <tr align="center" >
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            
                            <th scope="col">Email</th>
                            
                            <th scope="col">Role</th>
                            <th scope="col">Course</th>
                            <th scope="col">Start_time</th>
                            <th scope="col">End_time</th>
                            <th scope="col">Status</th>
                            
                            <th scope="col">Action</th>
                            
                        </tr>
                    </thead>
                    <tbody align="center" style={{background: 'rgba(255, 255, 255,0.2)',fontSize:'20px',fontFamily:'bahnschrift condensed'}}>
                    
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
                                    <td>{item.status}</td>
                                   
                                    <td><button type="button" className="btn btn-outline-warning"><Link to={`/user/tutorupdate/${item.id}/${item.roletype}`} style={{textDecoration:'none'}}>Edit</Link></button>&nbsp;
                                    <button type="button" className="btn btn-outline-danger" onClick={()=>del(item.id)} >Delete</button></td>
                                    
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