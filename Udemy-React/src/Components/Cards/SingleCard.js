import React, { useState, useEffect } from 'react'
import {Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/'



import axios from 'axios'




const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column' 
  },
  cardMedia: {
    paddingTop: '56.25%'
  },
  
})) 
/*   {props.match.params.id} */
export const SingleCard = (props) => {
  const {onAdd}=props
  const classNamees = useStyles();
  const { product } = props




  const classes = useStyles();
  const [productData, setProductData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
     console.log(productData)

  const getProductData = async () => {
    const res = await axios.get('/data2.json');
    const findProductData = res.data.find((p) => p.id === props.match.params.id)
    setProductData(findProductData)
    setIsLoading(false)
  }

  useEffect(() => {
    getProductData()

    return () => {
      console.log("cleaned up")
    }
  }, [])

  return (
    <>

      <div className="border border-dark bg-dark">
        <div class="container">
          <div className="row">
            <div className="col-lg-8 mb-4">
              <div className="card bg-dark text-light">
                <img className="card-img-top" src="" alt="" />

                <div className="card-body">
                  <h1 className="card-title fs-10">{productData.name}</h1>
                  <p class="card-text">
                    <h4><small>{productData.description}</small></h4>
                  </p>
                  <p className="card-text"><small className="text-muted text-light text-decoration-none">
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star-half text-warning"></i>
                    4.5 (18,560) <strong className="text-light px-3">{productData.Enrolled} Students Enrolled</strong></small>

                    <p>Created By: <strong>{productData.author}</strong> </p>
                    <p>Language : English</p>


                  </p>

                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen>
                    <img className="card-img-top px-3 py-2 w-100" src="https://i.udemycdn.com/course/240x135/1395136_3f8a_3.jpg" alt="" />
                  </iframe>
                </div>



                <div className="card-body">
                  <h5 className="card-title text-center"><strong>&#8377;{productData.price}</strong></h5>
            <Link to="/cart"><div className="col-md-12 text-center"><button className=" btn btn-danger " onClick={()=>onAdd(productData)} >Add to Cart</button></div></Link>

                  <h5 className="card-title text-center"><strong>30-Day Money-Back Guarantee</strong></h5>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 px-5">
        <div className="card border-dark px-3" style={{ width: "100%" }}>

          <div className="card-body">
            <h5 className="card-title">What you'll learn</h5>

            <p className="px-3"> <strong className="px-2">.</strong>Understand the Fundamental Theories of Algorithm Analysis</p>
            <p className="px-3"> <strong className="px-2">.</strong>Be able to Compare Various Algorithms</p>
            <p className="px-3"> <strong className="px-2">.</strong>Understand When to use Different Data Structures and Algorithms</p>
            <p className="px-3"> <strong className="px-2">.</strong>Understand the Fundamentals of Computer Science theory</p>
            <p className="px-3"> <strong className="px-2">.</strong>Understand the Core Sorting Algorithms</p>



          </div>
        </div>
      </div>

      <div className="py-1 px-5">
        <div className="card " style={{ width: "100%" }}>
          <div className="card-body">
            <h5 className="card-title"><b>Master the Theory to Becoming a Good Programmer!</b> </h5>
            <p className="card-text">If youre looking to learn the theory that makes great programmers, youve come to the right place! This course is perfect for anyone interested in learning the fundamentals to Computer Science Theory. </p>
          </div>
          <div className="card-body">
            <h5 className="card-title"><b>No Previous Experience Necessary! </b> </h5>
            <p className="card-text">Computer science and technology are often thought of as things only for "analytical minds". I believe however that technology and its theory are for everyone. So I designed this course to teach each topic in a variety of easy to digest ways. Through these multiple reinforcing steps, I believe anyone can follow along and succeed!  </p>
          </div>
      
          <div className="card-body">
            <h5 className="card-title"><b>Enroll Now and youll Learn: </b> </h5>
            <p className="card-text">I am so confident you will enjoy this course, I offer a 100% 30-day money-back guarantee through Udemy. If you are not happy with your purchase, I have no problem with giving your money back!  </p>
          </div>
          <div className="card-body">
            <h5 className="card-title"><b>My Guarantee</b> </h5>
            <p className="card-text">If youre looking to learn the theory that makes great programmers, youve come to the right place! This course is perfect for anyone interested in learning the fundamentals to Computer Science Theory. </p>
          </div>
          <div className="card-body">
            <h5 className="card-title"><b>Are You Ready to Get Started? </b> </h5>
            <p className="card-text">I will be waiting for you inside the course!

              Remember, this is an online course, so you can take it at your own pace. Are you busy right now? Thats okay. Enroll today, and take the course at your own pace.

              Thanks so much for your interest in this Computer Science 101 Course!

              See you inside!

              Kurt

            </p>
          </div>
        </div>
      </div>

      <div className="py-1 px-5">
        <div className="card" style={{ width: "100%" }}>

          <div className="card-body">
            <h4 className="card-title">Course content</h4>
            <p className="card-body">
              <div>
<hr />
{/* 
              <div>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Collapsible Group Item #1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Collapsible Group Item #2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Collapsible Group Item #3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div> 


 */}


                <video width="200" height="100" controls > <i class="fas fa-video"> <small className="px-3 fs-5">Introduction</small><small className="float-right  fs-5" style={{ marginRight: "400px" }}>1:00</small></i>
                  <source src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" type="video/mp4" />
                 
                </video><hr />
             
               
                <i class="fas fa-video"> <small className="px-4 fs-5">Welcome To Part1</small> <small className="float-right px-4 fs-5">5:00</small></i><hr />
                <i class="fas fa-video"> <small className="px-4 fs-5">Importing The libraries</small> <small className="float-right px-4 fs-5">8:00</small></i><hr />
                <i class="fas fa-video"> <small className="px-4 fs-5">Basics</small> <small className="float-right px-4 fs-5">2:08:30</small></i><hr />
                <i class="fas fa-video"> <small className="px-4 fs-5">First Project</small> <small className="float-right px-4 fs-5">1:30:00</small></i><hr />

                <i class="fas fa-video"> <small className="px-4 fs-5">Advanced Topics</small> <small className="float-right px-4 fs-5">2:00:07</small></i><hr />
                <i class="fas fa-video"> <small className="px-4 fs-5">Bonus</small> <small className="float-right px-4 fs-5">30:00</small></i>
 
              </div>


            </p>
          </div>
        </div>
      </div>
    </>

  )
}