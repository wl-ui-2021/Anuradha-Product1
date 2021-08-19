import React from "react"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

class Stepper3 extends React.Component{
 continue =(e)=>{
     e.preventDefault()
     this.props.nextStep()
 }

 back =(e)=>{
    e.preventDefault()
    this.props.prevStep()
}

 render(){

        const {values:{
            FirstName , 
            LastName,
            Address1 ,
            Address2,
            City,
            State,
            Zip, 
            Country,
            CardName,
            CardNumber,
            ExpiryDate, 
            CVV
        }} =this.props
    
          const {nextStep}=this.props
        console.log(this.props)
        return(
            <div>
            
                   
                      <h1>Checkout</h1>
                      <div className="border table-borderless">
                                <div>
                                    <h4>Order Summary</h4>
                                    <div className="row">
                                        <div className="col-9 m-auto">
                                            <div className="d-flex justify-content-between">
                                                <p>Product 1 - Anice thing</p>
                                                <p>&#8377; 99.00</p>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p>Product 2 - Another thing</p>
                                                <p>&#8377; 80.00</p>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p>Product 3 - Something else</p>
                                                <p>&#8377; 70.00</p>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p>Product 4 - Best thing of all</p>
                                                <p>&#8377; 140.00</p>
                                            </div>
                                            <hr/>
                                            <div className="d-flex justify-content-between">
                                                <p>Total</p>
                                                <p>&#8377; 389.00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                     <List>
                        <ListItem>
                            <ListItemText primary="First Name" secondary={FirstName} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Last Name" secondary={LastName} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Address Line 1" secondary={Address1} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Address Line 2" secondary={Address2} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="City" secondary={City} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="State/Provine/Region" secondary={State} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Zip" secondary={Zip} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Country" secondary={Country} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Name on Card" secondary={CardName} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Card Number" secondary={CardNumber} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Expiry Date " secondary={ExpiryDate} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="CVV" secondary={CVV} />
                        </ListItem>

                         </List>

                     <Button variant="contained" color="primary" onClick={this.back}>
                      Back
                    </Button>
                    <Button variant="contained" color="primary" onClick={nextStep}>
                      Confirm
                    </Button>
                   
               
            </div>
        )
    }
}
export default Stepper3