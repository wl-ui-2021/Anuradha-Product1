import React, { Component } from 'react';

import image5 from "./image5.jpg"
import image4 from "./image4.jpg"
import image1 from "./image1.jpg"
import image from "./image.jpg"

class Slidder extends Component {
    render() {
        return (
        
    
            <div id="carouselExampleIndicators" className="carousel slide " data-ride="carousel" >

                 

            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block item  col-md-12 " style={{height:"400px"}}  data-interval="1000" src={image} alt="First slide" />
              </div>
             <div className="carousel-item">
                <img className="d-block item  col-md-12"   data-interval="2000" src={image5} alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block item  col-md-12"  data-interval="3000" src={image4} alt="Third slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block item  col-md-12"  data-interval="3000" src={image1} alt="fourth slide" />
              </div> 
            </div>
            
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
               

      
        
          
          </div>
          
        );
    }
}
export default Slidder