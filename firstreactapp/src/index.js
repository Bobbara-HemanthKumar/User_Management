import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import First from './first';
import Second from './second';
import Menu from './home';
import Third from './third';
import Users from './users';
import Register from './register';
import Login from './login';
import Update from './update';
import Tutor from './tutor';
import Student from './student';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import TutorData from './tut';
import Payment from './payment';
import Finance from './finanace';
import TutorUpdate from './tutorupdate';
import StudentData from './stu';
import Courses from './courseupdate';




const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
<>

  <BrowserRouter>
  <Menu/>
  <Routes>
    <Route path='/' element={<App/>}> </Route>
    <Route path='/first' element={<First/>}> </Route>
    <Route path='/second' element={<Second/>}> </Route>
    <Route path='/third' element={<Third/>}></Route>
    <Route path='/users' element={<Users/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/user/update/:id/:roletype' element={<Update/>}></Route>
    <Route path='/user/tutorupdate/:id/:roletype' element={<TutorUpdate/>}></Route>
    <Route path='/tut' element={<TutorData/>}></Route>
    <Route path='/stu' element={<StudentData/>}></Route>
    <Route path='/tutor/:id/:course' element={<Tutor/>}></Route>
    <Route path='/tutor/:id/:course/courseupdate/:content' element={<Courses/>}></Route>
    <Route path='/student/:id' element={<Student/>}></Route>
    <Route path='/payment/:id' element={<Payment/>}></Route>
    <Route path='/finance' element={<Finance/>}></Route>
   
  </Routes>
  </BrowserRouter>
  {/* <React.StrictMode>
    <App />
  </React.StrictMode> */}
  </>
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
