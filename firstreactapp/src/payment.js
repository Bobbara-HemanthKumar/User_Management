import { useNavigate, useParams } from 'react-router-dom';
import './payment.css';
import axios from 'axios';
import { useState } from 'react';
export default function Payment() {
    const [data, setData] = useState({ paymode: ''});
    const useParam = useParams();
    const { id } = useParam;
    const Nav = useNavigate();

    const handler = (e) => {

        const { name, value } = e.target;

        setData((prevState) =>
            ({ ...prevState, [name]: value }));

    }
    const cardpay = () => {
        let method1 = document.getElementById('cardp');
        let method2 = document.getElementById('qr');
        let method3 = document.getElementById('cash');
        if (method1.style.display === "none") {
            method1.style.display = "block";
            method2.style.display = "none";
            method3.style.display = "none";

        } else {
            method1.style.display = "none";

        }

    }

    const Qrpay = () => {
        let method1 = document.getElementById('cardp');
        let method2 = document.getElementById('qr');
        let method3 = document.getElementById('cash');

        if (method2.style.display === "none") {
            method2.style.display = "block";
            method1.style.display = "none ";
            method3.style.display = "none";
        } else {
            method2.style.display = "none";


        }
    }

    const Cpay = () => {
        document.getElementById('cardp').style.display="none";
         document.getElementById('qr').style.display="none";
        document.getElementById('cash').style.display="block";

        
    }

    const update = () => {
        const userdetails = { paymode: data.paymode}
        axios.post(`http://localhost:5000/updateuserpay/${id}`, userdetails).then((res) => {
            console.log(res.data);
            if (res !== '') {
                alert('details  updated successfully!!!!');
                console.log({ id });
                Nav(`/student/${id}`)
              
               
                data.paymode = '';
            }

        })




    }

    return (
        <section>

            <div className="mainscreen" >

                <div className="pay">
                    <div className="leftside">
                        <div >
                            <img
                                src="/online-payments.jpg"
                                className="product"
                                alt="Shoes" width={'500px'}
                            />
                            <div style={{ margin: '20px 0 0 50px' }} >
                            <span><input type='radio' name='paymode' id='cpay' onClick={cardpay} onChange={handler} value="Card"  />Card</span>
                            <span><input type='radio' name='paymode' id='qrpay' onClick={Qrpay} onChange={handler} value="Scan" />QRScan</span>
                            <span><input type='radio' name='paymode' id='caspay' onClick={Cpay} onChange={handler} value="Cash"/>Cash</span>
                        </div>
                        </div><br />
                       
                    </div>
                    <div className="rightside" >
                    
                        <form action="" style={{margin:'0 0 0 35px'}}>
                            <div>
                            <h1 style={{margin:'0 0 0 150px'}}>CheckOut</h1>
                            <h2 style={{margin:'0 0 0 100px'}}>Payment Information</h2>
                            
                            </div>
                            {/* Card Pay */}
                            <div id='cardp' style={{display:'none'}} >
                                <p id='ptype'>Cardholder Name</p>
                                <input type="text" className="inputbox" name="name" required />
                                <p id='ptype'>Card Number</p>
                                <input type="number" className="inputbox" name="pay_number" id="pay_number" required />

                                <p id='ptype'>Card Type</p>
                                <select className="inputbox" name="pay_type" id="pay_type" required>
                                    <option value="">--Select a Card Type--</option>
                                    <option value="Visa">Visa</option>
                                    <option value="RuPay">RuPay</option>
                                    <option value="MasterCard">MasterCard</option>
                                </select>
                                <div className="expcvv">

                                    <p className="expcvv_text" id='ptype'>Expiry</p>
                                    <input type="date" className="inputbox" name="exp_date" id="exp_date" required />

                                    <p className="expcvv_text2" id='ptype'>CVV</p>
                                    <input type="password" className="inputbox" name="cvv" id="cvv" required />
                                </div>
                                <p id='ptype'></p>
                                <button type="submit" className="buton" name='paymode' onClick={update} >CheckOut</button>
                            </div>

                            {/* Qr Scan pay  */}
                            <div id='qr' style={{ display: 'none' }}>
                                <img src='/scan.jpg'
                                    alt='qrimg' height={'300px'} width={'280px'} style={{ margin: '0 0 0 120px' }}

                                />
                                 <button type="submit" className="buton" name='paymode' onClick={update} >CheckOut</button>
                            </div>

                            {/* Cash pay */}
                            <div id='cash' style={{ display: 'none' }}>
                                <div style={{margin:'40px 0 0 80px',fontWeight:'bold',fontSize:'32px',color:'green'}}>
                                <span > Thank You For The Payment</span>
                                <img src='/thanks.gif' alt='' width={'400px'} height={'300px'} style={{animationDelay:'.9s'}}/>
                                <button type="submit" className="buton" name='paymode' onClick={update} >CheckOut</button>
                                </div>
                            </div>

                        </form>

                    </div>
                </div>
            </div>


        </section>
    )
}