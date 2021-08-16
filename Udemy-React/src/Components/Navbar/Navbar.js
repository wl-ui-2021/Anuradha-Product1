import React from "react"
import {Link} from "react-router-dom"

class Navbar extends React.Component {
    render() {
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
                            <li class="nav-item dropdown">
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
                                    <input className="form-control form-control-lg mr-lg-0 col-8 bg-light border "
                                        style={{ borderRadius: "5px 0px 0px 5px" }}
                                        type="search" placeholder="Search for Courses" aria-label="Search" />

                                    <button className="btn btn-light btn-lg  my-1 my-sm-0 ml-0 col-2 border"
                                        style={{ borderRadius: "0px 5px 5px 0px" }}
                                        type="submit"><i className="fas fa-search text-danger "></i></button>
                                </form>
                            </li>

                        </ul>

                


                      <a className="nav-link btn btn-light text-dark mx-2 border" href="#"

                            data-bs-toggle="popover" title="Try Udemy for Business"
                            data-placement="bottom"
                            data-trigger="focus"
                            data-bs-content="Get your team access to Udemy’s top 2,500 courses anytime,
                            anywhere.">Udemy for Business</a> 
                            
                        <a className="nav-link btn btn-light text-dark border mx-2" href="#">Become an Instructor</a> 

                        <a href="https://github.com/wl-ui-2021/Anuradha-Product1"><h4 className="text-dark">Anuradha</h4></a>






                        <Link to="./Cart"><div className="dropdown show">
                            <i className="fa fa-shopping-cart dropdown-toggle nav-link btn btn-secondary mx-2 rounded-circle" data-bs-toggle="dropdown" ></i>
                            <div id="shoppping-cart" className="dropdown-menu dropdown-menu-right " style={{ width: "230px", marginTop: "20px" }}>


                            </div>

                        </div></Link>




                        
                        <a className="nav-link btn btn-danger text-light mx-2"><Link to="./singnup">Signup</Link></a>




                    </div>
                </nav>


            </div>

        )
    }
}
export default Navbar




