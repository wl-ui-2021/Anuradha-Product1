import React from "react"
import Stepper1 from "./Stepper1"
import Stepper2 from "./Stepper2"
import Stepper3 from "./Stepper3"

class Stepper extends React.Component{

    state={
        step:1,
        FirstName:"",
        LastName:"",
        Address1:"",
        Address2:"",
        City:"",
        State:"",
        Zip:"",
        Country:"",
        CardName:"",
        CardNumber:"",
        ExpiryDate:"",
        CVV:""
    }

    nextStep=()=>{
        const {step} =this.state
        this.setState({
            step:step+1
        })
    }

    prevStep=()=>{
        const {step} =this.state
        this.setState({
            step:step-1
        })
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
      };
    
    render(){

        const {step} =this.state
        const {FirstName , LastName ,Address1 , Address2 , City , State , Zip ,Country , CardName , CardNumber ,ExpiryDate, CVV} = this.state
        const values={FirstName , LastName ,Address1 , Address2 , City , State , Zip ,Country , CardName , CardNumber ,ExpiryDate, CVV}
        switch (step) {
            case 1:
              return (
                <Stepper1 
                  nextStep={this.nextStep}
                  handleChange={this.handleChange}
                  values={values}
                />
              );
            case 2:
              return (
                <Stepper2
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange={this.handleChange}
                  values={values}
                />
              );
            case 3:
              return (
                <Stepper3
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  values={values}
                />
              );
           
            default:
              (console.log('done'))
          }
        }
      }
export default Stepper