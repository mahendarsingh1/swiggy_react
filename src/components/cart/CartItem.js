import React from "react";
import './styles/CartItem.css'

import img from '../../assests/images/symbol.svg'

function CartItem(props){

    let { item, handleQuantityUpdate } = props;
    let { id, heading, type, quantity, amount } = item;

    return (
        <div className="cartItem flex-space-between">
            <div className="flex">
                <img src={img} alt="" className={`h-15 ${type}`}/>
                <p>{heading}</p>
            </div>
            <div className="flex align-items-center">
                <div className="quantityControllers flex-space-around align-items-center">
                    <span onClick={()=>handleQuantityUpdate(id,-1)}>-</span>
                    {quantity}
                    <span onClick={()=>handleQuantityUpdate(id,1)}>+</span>
                </div>
                <p>₹{ amount*quantity }</p>
            </div>
        </div>
    )
}

export default CartItem;