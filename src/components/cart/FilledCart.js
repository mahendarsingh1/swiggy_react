import React from "react";
import CartCheckout from "./CartCheckout";
import CartItem from "./CartItem";


function FilledCart(props){

    let { cartData, handleQuantityUpdate } = props;

    let totalItems = cartData.reduce((sum, item) => sum+item.quantity, 0)
    let cartItems = cartData.map( item => {
        return <CartItem 
                    item={item} 
                    key={item.id} 
                    handleQuantityUpdate={handleQuantityUpdate}
                />
    })
    
    return(
        <>
            <h2>Cart</h2>
            <p>{totalItems} ITEMS</p>
            {cartItems}
            <CartCheckout cartData={cartData} totalItems={totalItems} handleClearCart={props.handleClearCart} />
        </>
    )
}

export default FilledCart;