import React from "react"

export default function Instructor(){
    
   return(

    <div className="container " style={{marginTop:"50px"}}>
    <div className="row">
      <div className="col text-center border-right">
       <div className="col-8 offset-1">
        <h4>Become an Instructor</h4>
        <p className="lead" style={{fontSize: "15px"}}>Teach what you love. Udemy gives you the tools to create an online course.</p>
       <a href="#" className="btn btn-lg btn-danger">Start Teaching</a>
       </div>
     </div>

     <div className="col text-center">
         <div className="col-8 offset-1">
          <h4>Udemy for Business</h4>
          <p className="lead" style={{fontSize: "15px"}}>Get unlimited access to 2,500 of Udemy’s top courses for your team.</p>
         <a href="#" className="btn btn-lg btn-danger">Get Udemy for business</a>
         </div>
       </div>

</div>
    </div>
 
   )
}