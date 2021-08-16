import React from "react"

class Footer extends React.Component {
    render() {
        return (
            <div>


                <div className="row pt-5 px-3 border-top mt-5 " style={{fontSize: "13px"}}>
                    <div className="col">


                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link text-info" href="#"><b>Udemy for business</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-info" href="#"><b>Become and Instructor</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-info" href="#">Mobile Apps</a>
                            </li>
                        </ul>


                    </div>
                    <div className="col">

                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link text-info" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-info" href="#">Careers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-info" href="#">Blog</a>
                            </li>
                        </ul>

                    </div>
                    <div className="col">

                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link text-info" href="#">Topics</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-info" href="#">Support</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-info" href="#">Affiliate</a>
                            </li>
                        </ul>

                    </div>
                    <div className="col">
                        <form>
                            <div className="form-group col-6 float-right">
                                <select className="form-control" id="exampleFormControlSelect2">
                                    <option>English</option>
                                    <option>Japanese</option>
                                    <option>Yoruba</option>
                                    <option>Igbo</option>
                                    <option>Hausa</option>
                                </select>
                            </div>
                        </form>

                    </div>
                </div>

                <hr />




                <div className="row" style={{fontSize: "12px"}}>
                    <div className="col pl-5">
                        <img src="https://udemy-clone-project.herokuapp.com/assets/youdemy-3de1dab18e5cf7e4eeb4d72afe0e8228e268920aea6143be639a88eeeaf4ac77.png" width="100px" className="mr-5" /> <span>Copyright © 2018 You Udemy, Inc.</span>
                     </div>
                        
                        
                        
                        
                        <div className="col">
                            <ul className="nav justify-content-end">
                                <li className="nav-item">
                                    <a className="nav-link active text-info" href="#">Terms</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-info" href="#">Privacy and Cookie Police</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-info" href="#">Intellectual Property</a>
                                </li>
                            </ul>

                        </div>
                    

                </div>

            </div>

        )
    }
}

export default Footer