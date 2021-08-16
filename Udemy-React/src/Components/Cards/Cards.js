import React from "react"
import  Data from "../data1.json"


export default function Cards(){
  return(
   
      <div className="container my-3"  id="courseList">
        <h2>
          Loaded with JSON
        </h2>
           <div className="row">
          
      {Data.map((post,index)=>{
       return(
         
         <div key={index} className="col-sm-3 my-3" >
        
         
          <div className="card  shadow-sm">
          <div className="card-header">
                         
          <img className="card-img-top "    src={post.img} alt="Card image cap" /></div>
          <div className="card-body my-10 ">
          <h6>{post.name}</h6>
     
         <p className="card-text"><small className="text-muted">
         <i className="fas fa-star text-warning"></i>
         <i className="fas fa-star text-warning"></i>
         <i className="fas fa-star text-warning"></i>
         <i className="fas fa-star text-warning"></i>
         <i className="fas fa-star-half text-warning"></i>
         4.5 (18,560)</small>
         <span className="d-block"></span>
         <span className="float-right py-3"> 
         <small style={{textDecoration: "line-through"}} className="text-muted ">
           (₹199)</small><strong className="price">{post.price}</strong> </span>
           
         </p>
       <button className="btn btn-primary text-light add-to-cart" data-id={post.id}> Buy Now </button>
         </div>
         </div>
         
           
           </div>
    
      
          
       )
      })}
    </div>
    </div>

  )
}




