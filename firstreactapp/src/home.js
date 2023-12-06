import { Link, useNavigate } from "react-router-dom";
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


export default function Menu() {
    
    const Nav = useNavigate();
    const logout = () => {
        localStorage.clear();
        Nav('/login');
    }
    


    return (
        <>
            <div id="head"  >
                <img src="logo-removebg-preview.png" alt="#" height={'60px'} width={'200px'} />
                <div class="dropdown">
                    <button class="dropbtn" >Courses</button>
                    <div class="dropdown-content">
                        <div class="cour">
                        <div class="linkcont">
                        <a href=" " >Full Stack</a>
                        <div class="subdrp">
                        <a>HTML</a>
                        <a>CSS</a>
                        <a>JAVA Script</a>
                        <a>REACT</a>
                        <a>NODE</a>
                        </div>
                        </div>

                        <div class="linkcont1">
                        <a href=" ">TESTING</a>
                        <div class="subdrp1">
                            <a>Java OOPS</a>
                            <a>Selenium</a>
                            <a>Cucumber Framework</a>
                            
                        </div>
                        </div>
                        
                        <div class="linkcont2">
                        <a href=" " >Devops</a>
                        <div class="subdrp2">
                        <a>Programming Language</a>
                        <a>OS Concept</a>
                        <a>Linux</a>
                        <a>Cloud Computing</a>
                        </div>
                        </div>
                        
                        </div>
                    </div>
                </div>

            </div>



            <input type="checkbox" id="check" style={{ margin: '10px 0 0 0 ' }} />

            <label for="check">

                
                <img id="btn1" src="menu.png" alt="" height="40px" width="40px" style={{ margin: '50px 0 0 0', position: 'fixed' }} ></img>
                <i class="bi bi-x-lg" id="canc" style={{ margin: '50px 0 0 0', position: 'fixed' }}></i>
            </label>
            <div className='slidebar'>

                <header>
                    <img src="user.jpg" alt="" height="80px" width="80px" style={{ borderRadius: '50%', marginBottom: '-20px', marginLeft: '20px' }}></img><br />
                    {localStorage.getItem('username') !== null ? <h5 id="greets" style={{margin:'20px 0 0 -160px',fontSize:'18px'}}>Welcome {localStorage.getItem('username')} </h5> : ''}
                </header>
                <ul>
                    {/* Home Page */}
                    <li><Link to='/'><i class="bi bi-house-fill"></i>Home</Link></li>

                    {/* Contact Page */}
                    <li><Link to='/first' ><i class="bi bi-person-lines-fill"></i>Contact</Link></li>

                    {/* Registration Page */}
                    {localStorage.getItem('username') == null ? <li><Link to='/register' ><i class="bi bi-r-circle-fill"></i>Register</Link></li> : ''}

                    {/* Users Page */}
                    {localStorage.getItem('roletype') === 'Admin' ? <li><Link to='/users' ><i class="bi bi-people-fill"></i>Users</Link></li> : ''}

                    
                    {/* Login Page */}
                    {localStorage.getItem('username') == null ? <li><Link to='/login' ><i class="bi bi-door-open-fill"></i>Login</Link></li> : ''}

                    {/* About Page */}
                    {localStorage.getItem('username') == null ? <li><Link to='/third' ><i class="bi bi-ticket-detailed-fill"></i>About</Link></li> : ''}

                    {/* Logout Page */}
                    {localStorage.getItem('username') !== null ? <li onClick={logout}><Link to=""><h5 id="logout"><i class="bi bi-door-closed-fill"></i>Logout</h5></Link></li> : ''}




                </ul>
            </div>
            <section></section>
        </>
    )
}