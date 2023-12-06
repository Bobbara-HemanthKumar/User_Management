

import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const divStyle = {
  display: 'fixed',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: '1550px 400px',
  backgroundrepeat: 'no-repeat',
  height: '400px'
}

const slideImages = [
  {
    url: 'jpeg7.jpg',
    
  },
  {
    url: 'jpeg8.jpg',
    
  },
  {
    url: 'jpeg9.jpg',
  
  },
 
];  
function App() {

  
  console.log('hiiii');
  
return (<>
  <section>
    <div >
      <br/><br/>
      <img src="jpeg10.jpg" alt="home img" width="100px" style={{margin:'0 0 0 15px'}} />
      
<h3 align={"center"}>“Wisdom is not a product of schooling but of the lifelong attempt to acquire it.” </h3>
<h5 align="center">— Albert Einstein </h5>    

<div className="slide-container" >
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index} >
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>    
              </div>
            </div>
          ))} 
        </Slide>
      </div>

  


 
  

    </div>
</section>

</>);
}

export default App;





