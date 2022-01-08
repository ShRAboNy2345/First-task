import React from 'react';
import './App.css';
import card from './Api';


const App=()=>{
  return(
    <div className="main">
    
    <div className="wrapper">
    <div className="container">
      {
        card.map((value,index) =>{
          return (
          <div className="box">
        <div className="content">
          
          
          {
            value.origin.split(" ")[0]==="Automated"
            ? <h5 className='green-tag'>{value.origin}</h5>:
            <h5 className='violet-tag'>{value.origin}</h5>
          }
          <h3>{value.title}</h3>
          <p>{value.intents} intents</p>
          <button className="btn">View</button>
          <button className="btn sm">Remove</button>
         <div className="footer-bottom"><p>Last Updated: Jan 23 2021 @ 4:23am</p></div>
         </div>
      </div>
      

          )
        })
      }
    

    

      
      
    </div>
    </div>
   
      </div>
  )
}

export default App;




