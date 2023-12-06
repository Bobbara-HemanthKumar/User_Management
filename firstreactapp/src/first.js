import './first.css'
import axios from 'axios';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState } from 'react';

export default function First(props) {

     
    
    const [data,setData] =useState({name:'',email:'',comment:''});
    const [val,setVal] = useState(0);

    
    

   

    
    const handler = (e) => {
        const {name,value} = e.target;

        setData((prevState)=>
        ({...prevState,[name]:value}))
    }

    const contactdetails= ()=>{
        const contactinfo={name:data.name, email:data.email,comment:data.comment}
        axios.post('http://localhost:5000/contactreg',contactinfo).then((res)=>
        {
            console.log(res.data);
            if(res !== '')
            {
            alert('Details Submitted sucessfully');
            setVal(val + 1);
            data.name='';
            data.email='';
            data.comment='';
            }


        })
    }

    return (
        <>
        

            <section>
            &nbsp;
            <a href='https://www.facebook.com/hippocloud/' target='blank' style={{fontSize:'22px'}}><i class="bi bi-facebook"></i></a>&emsp;
            <a href='https://www.instagram.com/hippocloud.vizag/' target='blank' style={{fontSize:'22px',color:'rgb(228, 64, 95) '}}><i class="bi bi-instagram"></i></a>&emsp;
            <a href='https://www.twitter.com/hippocloud1/' target='blank' style={{fontSize:'22px'}}><i class="bi bi-twitter"></i></a>&nbsp;
          
            <form action="#" className="form" key={val}>
            <div className="contact-details" >
                <div className="contact-left">

                    <p><i class="bi bi-envelope-fill"></i>
                        <a href="contact.js">Contact@gmail.com</a></p>

                    <p><i class="bi bi-telephone-fill"></i>
                        <span>Ph:888888888</span></p>

                    <p><i class="bi bi-geo-alt-fill"></i>
                        <span>Address:VISAKHAPATNAM</span></p>
                </div>
                <div className="details">
                    <label for="name" >Name:</label>
                    <div className="field">
                        <input type="text" name="name" required onChange={handler} />
                    </div>

                    <label for="email">Email:</label>
                    <div className="field">
                        <input type="email" name="email" required onChange={handler} />
                    </div><br/>

                    <label for="comment">Comment:</label>
                        <div className="field">
                            <textarea rows="5" colspan="20" name="comment" onChange={handler} required></textarea>
                        </div><br/>

                    <div >
                        <button className="btnn" onClick={contactdetails} >submit</button>
                    </div>
                </div>
                <div>
                    <img id="cont" src="contact.jpg" alt="contact" height={'400px'} />
                </div>
            </div>
            
            </form>

            </section>
            

        </>
    )



} 