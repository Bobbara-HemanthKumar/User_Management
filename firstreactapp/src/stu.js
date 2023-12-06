
import axios from "axios";
import { useState ,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link, useNavigate} from "react-router-dom";

export default function StudentData(){
    
     const [tutorinfo,setTutor] = useState([])
    const [studentinfo,setStudent] = useState([]);
    const Nav = useNavigate();
    
    useEffect(()=>{
        axios.get('http://localhost:5000/studen').then((res)=>{
            setStudent(res.data)
        })
    },[studentinfo])

    useEffect(()=>{
        axios.get('http://localhost:5000/tuto').then((res)=>{
            
            setTutor(res.data)
        })
    },[tutorinfo])


    const del = (id) => {
           
        axios.post(`http://localhost:5000/delstu/${id}`).then((res) => {
            
                 alert('Record deleted successfully!!!!');
                console.log({id});
                Nav('/stu')
 
        })
     
     }
    return(
        <>
        <section>
        <div id="users" style={{margin:'20px 0 0 5px'}}>
                    <button id="tutor" style={{borderRadius:'10px',backgroundColor:"rgba(37, 117, 252, 1)",fontWeight:'bold'}}><Link to={'/users'} style={{color:"white",textDecoration:"none"}}>Back</Link></button> &nbsp;
                    
                   </div>
        <div>
        <caption align="center" style={{fontWeight:'bold' ,fontSize:'20px',color:'white',borderRadius:'0 10px 0 10px',background:'grey',margin:'5px'}} >Students</caption>
                <table className="table table-bordered" style={{borderColor:'white',background: 'rgba(0, 0, 0,0.2)',width:'100%'}} >
                    <thead  >
                        <tr align="center" >
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            
                            <th scope="col">Email</th>
                            
                            <th scope="col">Course</th>
                            <th scope="col">Content</th>
                            <th scope="col">StartingDate</th>
                            <th scope="col">EndingDate</th>
                            <th scope="col">Actual-Fee</th>
                            <th scope="col">Total-Fee</th>
                            <th scope="col">Discount%</th>
                            <th scope="col">Paid-Fee</th>
                            <th scope="col">Remaining-Fee</th>
                            <th scope="col">Project/Internship</th>
                            <th scope="col">Role</th>
                           
                            <th scope="col">Assigned-To</th>
                            <th scope="col">Status</th>
                            <th scope="col">Actions_To_Take</th>

                        </tr>
                    </thead>
                    <tbody align="center" style={{fontSize:'20px',fontFamily:'bahnschrift condensed'}} >
                        {studentinfo.map((item) =>
                            <>
                                <tr key={item.id} >
                                    <th scope="row">{item.id}</th>
                                    <td>{item.firstname}</td>
                                    
                                    <td>{item.email}</td>
                                    <td>{item.course}</td>
                                    <td>{item.content}</td>
                                    <td>{item.start}</td>
                                    <td>{item.end}</td>
                                    <td>{item.actual}</td>
                                    <td>{item.total}</td>
                                    <td>{item.discount}</td>
                                    <td>{item.paid}</td>
                                    <td>{item.remaining}</td>
                                    <td>{item.project}</td>

                                    
                                    <td>{item.roletype}</td>
                                    
                                   

                                    <td value={tutorinfo.firstname}>{item.assigned_to}</td>
                                    
                                    <td>{item.status}</td>

                                    
                                    <td><button type="button" className="btn btn-outline-warning"><Link to={`/user/update/${item.id}/${item.roletype}`} style={{textDecoration:'none'}}>Edit</Link></button>&nbsp;
                                        <button type="button" className="btn btn-outline-danger" onClick={()=>del(item.id)} >Delete</button>
                                        </td>
                                </tr>
                            </>
                        )}
                    </tbody>
                   </table><br /></div>
                   </section>

        </>
    )
}