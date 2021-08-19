import React from "react"

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Stepper1 extends React.Component{
 continue =(e)=>{
     e.preventDefault()
     this.props.nextStep()
 }

 

    render(){

        const {values , handleChange} =this.props
        return(
            <div className="container w-50 p3 border border-info">
            
                   
                      <h1>Checkout</h1> 
                     {/*  <div className="row border border-info"></div> */}
                    
                    {/*   <div className="d-flex row"> */}
                   {/*    <div className="col"> */}
                   <table>
                       <tbody>
                       <tr>
                            <td colSpan="2"><h4>Shipping address</h4></td>
                        </tr>
                        <tr>
                      <td><TextField
                          
                          placeholder="First Name"
                          label="First Name"
                          onChange={handleChange('FirstName')}
                          defaultValue={values.FirstName}
                          required={values.FirstName.required}
                      />
                      </td>
                      
                      <td><div className="col">
                      <TextField
                          className="col-sm-10"
                          placeholder="Last Name"
                          label="Last Name"
                          onChange={handleChange('LastName')}
                          defaultValue={values.LastName}
                          required={values.LastName.required}
                      />
                      </div></td>
                      </tr>

                      <tr colSpan="2">
                      <div className="col-lg-6">
                      <td><TextField
                          placeholder="Address line 1 "
                          label="Address1"
                          onChange={handleChange('Address1')}
                          defaultValue={values.Address1}
                          required={values.Address1.required}
                      /> </td>
                      </div>
                      </tr>

                      <tr colSpan="2">
                      <div className="col-lg-6">
                      <td><TextField
                          placeholder="Address line 2"
                          label="Address2"
                          onChange={handleChange('Address2')}
                          defaultValue={values.Address2}
                          required={values.Address2.required}
                      />
                      </td>
                      </div>
                      </tr>

                      <tr colSpan="2">
                      <div className="col-lg-6">
                      <td><TextField
                          placeholder="City"
                          label="City"
                          onChange={handleChange('City')}
                          defaultValue={values.City}
                          required={values.City.required}
                      />
                      </td>
                      </div>
                      </tr>


                      <div className="col-lg-6">
                      <TextField
                          placeholder="State/Province/Region"
                          label="State"
                          onChange={handleChange('State')}
                          defaultValue={values.State}
                          required={values.State.required}
                      />
                      </div>
                      <div className="col-lg-6">
                      <TextField
                          placeholder="Zip / Postal code"
                          label="City"
                          onChange={handleChange('Zip')}
                          defaultValue={values.City}
                          required={values.Zip.required}
                      />
                      </div>
                      <div className="col-lg-6">
                      <TextField
                          placeholder="Country"
                          label="Country"
                          onChange={handleChange('Country')}
                          defaultValue={values.City}
                          required={values.Country.required}
                      />
                      </div>
                     <Button variant="contained" color="primary" onClick={this.continue}>
                      Next
                    </Button>
                   
                   </tbody>
               </table>
            </div>
        )
    }
}
export default Stepper1