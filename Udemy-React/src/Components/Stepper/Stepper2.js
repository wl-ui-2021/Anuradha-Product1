import React from "react"

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Stepper2 extends React.Component{
 continue =(e)=>{
     e.preventDefault()
     this.props.nextStep()
 }

 back =(e)=>{
    e.preventDefault()
    this.props.prevStep()
}

    render(){

        const {values , handleChange} =this.props
        return(
            <div>
               
                   
               <h4>Payment Method</h4>
                      <TextField
                          placeholder="Name on Card"
                          label="CardName"
                          onChange={handleChange('CardName')}
                          defaultValue={values.CardName}
                          required={values.required}
                      />
                      <TextField
                          placeholder="Card number"
                          label="CardNumber"
                          onChange={handleChange('CardNumber')}
                          defaultValue={values.CardNumber}
                      />
                    
                      <TextField
                          placeholder="Expiry Date"
                          label="ExpiryDate"
                          onChange={handleChange('ExpiryDate')}
                          defaultValue={values.ExpiryDate}
                      />
                      <TextField
                          placeholder="CVV"
                          hint="Last three digits on signature strip"
                          label="CVV"
                          onChange={handleChange('CVV')}
                          defaultValue={values.CVV} 
                      />

                     <Button variant="contained" color="primary" onClick={this.back}>
                      Back
                    </Button>
                    <Button variant="contained" color="primary" onClick={this.continue}>
                      Next
                    </Button>
                   
               
            </div>
        )
    }
}
export default Stepper2