import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";

export default function Courses(){
   
    const [tutorinfo, setTutor] = useState([])
    const useParam= useParams();
    const {id} = useParam;
     const {content} = useParam;
    const {course} = useParam;
     const Nav = useNavigate();

    const [data,setData]=useState({ course: '', content: '' });
   

    useEffect(()=>{
        axios.get(`http://localhost:5000/tutor/${id}/${course}`).then((res) => {
            setTutor(res.data);
           })

        },[tutorinfo, id,course])

    const handler = (e) => {

        const { name, value } = e.target;

        setData((prevState) =>
            ({ ...prevState, [name]: value }));

    }

    React.useEffect(() => {
        axios.get(`http://localhost:5000/fullstack/${content}`).then((res) => {
            
            setData({ course: res.data[0].course, content: res.data[0].content, date: res.data[0].date,task_staus: res.data[0].task_staus,test: res.data[0].test })
        }
        );

        axios.get(`http://localhost:5000/testing/${content}`).then((res) => {
            
            setData({ course: res.data[0].course, content: res.data[0].content, date: res.data[0].date,task_staus: res.data[0].task_staus,test: res.data[0].test })
        }
        )

    }, [content])

    const Contentupdate=()=>{
        const coursedetails = { course: data.course, content: data.content, date: data.date,task_status: data.task_status,test: data.test}
        if(data.course === "Full Stack"){
        axios.post(`http://localhost:5000/fullstackupdate/${content}`, coursedetails).then((res) => {
            console.log(res.data);
            if (res !== '') {
                alert('Full Stack details  updated successfully!!!!');
                console.log({ id });
                
                
                data.course = '';

                data.content = '';
                data.date = '';
                data.task_status = '';

                data.test = '';

               
                Nav(-1);
                
            }

           

        })
    }else if(data.course === "Testing"){

        axios.post(`http://localhost:5000/testingupdate/${content}`, coursedetails).then((res) => {
            console.log(res.data);
            if (res !== '') {
                alert('Testing details  updated successfully!!!!');
                console.log({ id });
                
              
                data.course = '';

                data.content = '';
                data.date = '';
                data.task_status = '';

                data.test = '';

                Nav(-1);
                
                
            }

        })

        

       }

       
    }
    
    return(
        <section>

           
            <div className="container py-5 h-100" style={{margin:'-40px 0 0 0'}}>
                
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5" >
                        <div className=" bg-white text-black" style={{ borderRadius: "1rem",boxShadow:"1px 1px 1px 1px",width:'700px',margin:'30px 0 0 -100px '}} >
                            <div className=" p-5 text-center" style={{height:'480px',borderRadius:'10px'}}>
                            <div style={{ marginTop: '-30px', borderRadius: '10px', width: 'auto' }}>
                                            <h3 className="text-uppercase text-center mb-5" style={{ color: 'black',textDecoration:'underline' }}>Update Course Info</h3>
                                        </div>
                                <div className="mb-md-5 mt-md-4 pb-5" style={{display:'flex',gap:'30px'}}>
                                    
                                    
                                    <div className="form-outline form-white mb-4">
                                    
                                        <label className="form-label" for="typeEmailX" style={{ float: 'left' }}>course</label>
                                        
                                        <input type="text" id="typeEmailX" name="course" class="form-control form-control-lg" value={data.course}   onChange={handler}/>
                                    
                                    </div>
                                    

                                    <div className="form-outline form-white mb-4">
                                        <label className="form-label" for="typeContent" style={{ float: 'left' }}>content</label>
                                        <input type="text" id="typeContent" name="content" class="form-control form-control-lg" value={data.content}  onChange={handler} />
                                        
                                         
                                       
                                           
                                    </div>
                                    </div>
                                    <div style={{display:'flex',gap:"30px"}}>
                                    <div>
                                    <label className="form-label" for="typePasswordX" style={{ float: 'left' }}>date</label>
                                        <input type="date" name="date" onChange={handler}/>
                                    </div><br/>
                                    <div>
                                    <label className="form-label" for="typePasswordX" style={{ float: 'left' }}>task_status</label>
                                        <select name="task_status" onChange={handler}>
                                            <option>Select</option>
                                            <option>complete</option>
                                            <option>InComplete</option>
                                        </select>
                                    </div>
                                    <div>
                                    <label className="form-label" for="typePasswordX" style={{ float: 'left' }}>task</label>
                                        <input type="file" name="test" onChange={handler} />
                                    </div> 
                                </div><br/> <br/> 
                                <button  type="submit" style={{padding:"10px 20px 10px 20px",borderRadius:"5px"}} onClick={Contentupdate} >Update</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}