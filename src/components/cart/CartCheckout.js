import React from "react";

function CartCheckout(props){
    
    let { cartData, handleClearCart } = props;

    function clickHandler(){
        localStorage.setItem('items', JSON.stringify(cartData));
        alert('Data Added to Local Storage');
        handleClearCart();
    }

    let amount = cartData.reduce((sum, item)=> sum + (item.quantity*item.amount), 0);

    return (
        <>
            <div id="totalAmount" className="flex-space-between">
                <h4>SubTotal</h4>
                <h4>₹{amount}</h4>
            </div>
            <button id="checkout-button" onClick={clickHandler} >CHECKOUT →</button>
        </>
    )
}

export default CartCheckout;