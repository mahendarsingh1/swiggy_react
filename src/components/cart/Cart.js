import React from "react";
import EmptyCart from './EmptyCart'
import FilledCart from "./FilledCart";

function Cart(props){

    let { cartData, handleQuantityUpdate } = props;

    return(
        <div id="cart">
            {cartData.length === 0 ? 
                <EmptyCart/>
            :
                <FilledCart 
                    cartData={cartData}
                    handleQuantityUpdate={handleQuantityUpdate} 
                    handleClearCart={props.handleClearCart}
                />
            }
        </div>
    )
}

export default Cart;