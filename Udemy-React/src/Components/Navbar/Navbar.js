import React from "react"
import { Link } from "react-router-dom"



export default function Navbar(props)  {
        const {auth  ,logoutHandler , loginHandler ,cartItems} = props
        const {countCartItems} =props
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light text-dark">
                   <Link to="/"><img src="https://udemy-clone-project.herokuapp.com/assets/youdemy-3de1dab18e5cf7e4eeb4d72afe0e8228e268920aea6143be639a88eeeaf4ac77.png" width="120px" style={{marginRight:"2px" , marginBottom:"10px"}} /></Link>


                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse " id="navbarSupportedContent">


                        <ul className="navbar-nav mr-auto container-fluid">
                            <li class="nav-item dropdown my-2 mx-2">
                                <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fa fa-list-ul"></i> Categories
                                </a>
                                <div class="dropdown-menu " aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Development</a>
                                    <a class="dropdown-item" href="#">Bussiness</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">It & Software</a>
                                </div>
                            </li>


                            <li className="nav-item col-10">
                                <form className="form-inline my-2 my-lg-0 inbutton">
                                
                                    <input className="form-control form-control-lg mr-lg-0 col-12 bg-light border "
                                        style={{ borderRadius: "5px 0px 0px 5px" }}
                                        type="search" placeholder="Search for Courses" aria-label="Search" />
                                        <button className="btn btn-light btn-lg  my-3 my-lg-0 ml-0 col-2 border"
                                        style={{ borderRadius: "0px 5px 5px 0px" }}
                                        type="submit"><i className="fas fa-search text-danger "></i></button>

                                   
                                </form>
                            </li>

                        </ul>

                
     

                         <a className="nav-link btn btn-light text-dark border mx-1" href="#">Udemy for Bussiness</a> 
                        <a className="nav-link btn btn-light text-dark border mx-1" href="#">Become an Instructor</a>  

                        <a href="https://github.com/wl-ui-2021/Anuradha-Product1"><h4 className="text-dark" style={{textDecoration:"none"}}>Anuradha</h4></a>






                        <Link to="/Cart"  >
                            <div>
                            <i className="fa fa-shopping-cart  btn btn-secondary mx-2 rounded-circle"   > {countCartItems}</i>
                           
                          </div>
                        </Link>




                        
                        
                    {!auth ?       <Link to="/Signup" ><button className="nav-link btn btn-primary text-light mx-2 text-decoration-none"  >Login</button></Link> 
                                                 
                                : <button  className="btn btn-primary" onClick={logoutHandler}>Signout</button>}


                    </div>
                </nav>


            </div>

        )
    }





