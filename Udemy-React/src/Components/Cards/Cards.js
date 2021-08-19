import React , {useState , useEffect} from "react"


import axios from "axios"
import { Link } from "react-router-dom"
export default function Cards(){

  const [productsData, setProductsData] = useState([])
  const [isLoading , setIsLoading] = useState(true)
   
/*   const addtocart=(course)=>{
    const CourseExist =cartItem.find((item) =>item.id ==course.id);
    
   } */
  const getData = async ()=>{
      const res = await axios.get('/data1.json') 
      setProductsData(res.data)
      setIsLoading(false)
  } 

  useEffect(()=>{
      getData()
  },[])

  return(
    
      <div className="container my-3"  id="courseList">
        <h2>
          Loaded with JSON
        </h2>
        
           <div className="row">
          
      {productsData.map((post,index)=>{
       return(
         
         <div key={index} className="col-sm-3 py-3"  >
        
         <Link to={`/course/${post.id}`} style={{ textDecoration: 'none' }} >
          <div className="card  shadow-sm"  >
          <div className="card-header">
                         
          <img className="card-img-top "    src={post.img} alt="Card image cap" /></div>
          <div className="card-body my-10 "  style={{textDecoration: 'none' , color:"black"}}>
          <h6 style={{textDecoration: "none" , color:"black"}}>{post.name}</h6>
     
         <p className="card-text " style={{textDecoration: 'none' , color:"black"}}><small className="text-muted "style={{textDecoration: "none" , color:"black"}}>
         <i className="fas fa-star text-warning"></i>
         <i className="fas fa-star text-warning"></i>
         <i className="fas fa-star text-warning"></i>
         <i className="fas fa-star text-warning"></i>
         <i className="fas fa-star-half text-warning"></i>
         4.5 (18,560)</small>
         <span className="d-block"></span>
         <span className="float-right py-3"> 
         <small style={{textDecoration: "line-through" , color:"black"}} className="text-muted ">
           (₹199)</small><strong className="price" >{post.price}</strong> </span>
           
         </p>
       <button className="btn btn-primary text-light add-to-cart"   data-id={post.id}> Buy Now </button>
         </div>
         </div>
         
         </Link>
           </div>
    
      
          
       )
      })}
    </div>
    </div>

  )
}




