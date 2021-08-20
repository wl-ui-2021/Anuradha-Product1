import React from 'react'
import { Link } from 'react-router-dom';
export default function Cart(props) {
    const {cartItems,onAdd,onRemove}=props;
    console.log("props" , props)
    const itemsPrice=cartItems.reduce((a,c)=> a + c.price * c.qty, 0 );
    const taxPrice= itemsPrice * 0.14;
    const totalPrice = itemsPrice + taxPrice 
    
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-8 m-auto">
                    <div className="card">
                        <div className="card-header text-center bg-light">
                            <h2>My Cart</h2>
                        </div>
                        <div className="card-body">
                            <div>
                                {
                                    cartItems.length===0 && <div className="d-flex align-items-center justify-content-center " style={{width:'60vw',height:'50vh',fontSize:'50px'}}> Cart is Empty.....</div>
                                }
                            </div>
                            {
                                cartItems.map((item)=>(
                                    <div key={item.id} className="row" >
                                        <table className="table text-center">
                                            <tr>
                                            <td >
                                                    <img  src={item.img} style={{width:"120px"}}/>
                                                </td>
                                                <td>
                                                    <h5 className="fs-6"> {item.name}</h5>
                                                </td>
                                             
                                                <td>
                                                 <div> 
                                                
                                                   
                                                    <button onClick={()=>onRemove(item) }  className=" btn btn-danger text-white">Remove </button>
                                                </div> 
                                                </td>
                                                <td  className="my-5 mx-4">
                                             <strong>&#8377;{item.price}</strong>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                ))
                            }
                            {
                                cartItems.length !== 0 && (
                                    <> 
                                        <hr/>
                                        <div className="card">
                                            <div className="card-body">
                                            <table className="table d-flex justify-content-end" >
                                                <tbody>
                                                 <tr className="d-flex justify-content-between">
                                                    <td><strong>Course Price </strong> </td>
                                                    <td> &#8377; {itemsPrice.toFixed(2)}</td>
                                                </tr>
                                                <tr className="d-flex justify-content-between">
                                                    <td> <strong>Tax Price  </strong></td>
                                                    <td> &#8377; {taxPrice.toFixed(2)}</td>
                                                </tr> 
                                                
                                                <tr className="d-flex justify-content-between">
                                                    <td><strong>Total Price  </strong> </td>
                                                    <td> &#8377; {totalPrice}</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            <hr/>
                                 <div className="d-flex justify-content-end">
                                               <Link to="/payment"> <button className="btn  btn-outline-primary" >Checkout</button></Link>
                                            </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    )
}
