import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Payment() {
    
    
    const [form,setForm]=useState({
        firstname:'',
        lastname:'',
        address1:'',
        address2:'',
        city:'',
        state:'',
        zip:'',
        country:'',
        nameoncard:'',
        cardnumber:'',
        expirydate:'',
        cvv:''
    })
    const [count,setCount]=useState(1) 
    const updateForm=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    return (
        <div className="container">
                <div className="row">
                    <div className="col-8 m-auto">
                        <form>
                            <h2 className="text-center">Checkout</h2>
                            <div className="d-flex justify-content-between">
                                <span>Purchase the Course</span>
                                <span>Payment details</span>
                                <span>Review your order</span>
                            </div>
                            {count === 1 ? (
                            <div className="border table-borderless">
                                <table className="table table-borderless">
                                    <tbody>
                                        <tr>
                                            <td colSpan="2"><h4> Student Details</h4></td>
                                        </tr>
                                        <tr>
                                            <td><input type="text" value={form.firstname} name="firstname" className="form-control" placeholder="First name*" onChange={updateForm} /></td>
                                            <td><input type="text" value={form.lastname} name="lastname" className="form-control" placeholder="Last name*" onChange={updateForm} /></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2"><input type="text" value={form.address1} name="address1" className="form-control" placeholder="Address line 1*" onChange={updateForm} /></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2"><input type="text" value={form.address2} name="address2" className="form-control" placeholder="Address line 2" onChange={updateForm} /></td>
                                        </tr>
                                        <tr>
                                            <td><input type="text" value={form.city} name="city" className="form-control" placeholder="City *" onChange={updateForm} /></td>
                                            <td><input type="text" value={form.state} name="state" className="form-control" placeholder="State/Province*" onChange={updateForm} /></td>
                                        </tr>
                                        <tr>
                                            <td><input type="text" value={form.zip} name="zip" className="form-control" placeholder="Zip / Postal code*" onChange={updateForm} /></td>
                                            <td><input type="text" value={form.country} name="country" className="form-control" placeholder="Country*" onChange={updateForm} /></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2">
                                                <input type="checkbox" name="checked"/> Use this address for payment details
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div> ) : null}
                            {count === 2 ? (
                            <div className="border table-borderless">
                                <table className="table table-borderless">
                                    <tbody>
                                        <tr>
                                            <td colSpan="2"><h4>Payment Method</h4></td>
                                        </tr>
                                        <tr>
                                            <td><input type="text" value={form.nameoncard} name="nameoncard" className="form-control" placeholder="name on card*" onChange={updateForm} /></td>
                                            <td><input type="text" value={form.cardnumber} name="cardnumber" className="form-control" placeholder="card number*" onChange={updateForm} /></td>
                                        </tr>
                                        <tr>
                                            <td><input type="text" value={form.expirydate} name="expirydate" className="form-control" placeholder="expiry date*" onChange={updateForm} /></td>
                                            <td><input type="text" value={form.cvv} name="cvv" className="form-control" placeholder="cvv*" onChange={updateForm} /></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2">
                                                <input type="checkbox" name="checked"/> Remember credit card details for next time
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            ) : null}
                            {count === 3 ? (
                            <div className="border table-borderless">
                                <div>
                                    <h4>Order Summary</h4>
                                    <div className="row">
                                        <div className="col-9 m-auto">
                                            <div className="d-flex justify-content-between">
                                                <p>Course 1 - Anice thing</p>
                                                <p>&#8377; 99.00</p>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p>Course 2 - Another thing</p>
                                                <p>&#8377; 80.00</p>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p>Course 3 - Something else</p>
                                                <p>&#8377; 70.00</p>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p>Course 4 - Best thing of all</p>
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
                            ) : null}
                            {count === 3 ? (
                            <div>
                       <Link to="/"  >   <button className="btn btn-sm btn-outline-primary" type="submit" onClick={()=>alert("You have sussesfully purchased a Course , Keep Learning , Thank you..!")}>Place Order</button></Link>
                            </div>
                            ) : null}
                        </form>
                        <div>
                            {count === 1 ? null : ( <button className="btn btn-outline-success" onClick={()=>setCount(count-1)}>Back</button>)}
                            {count === 3 ? null : ( <button className="btn btn-outline-success" onClick={()=>setCount(count+1)} >Next</button>)}
                        </div>
                    </div>
                </div>
            </div>
    )
}