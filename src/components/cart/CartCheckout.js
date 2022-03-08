import React from "react";
import './styles/CartCheckout.css';

function CartCheckout(props){
    
    let { cartData, handleClearCart, totalItems } = props;

    function clickHandler(){
        let data = {
            amount,
            totalItems,
            items:cartData
        }
        localStorage.setItem('items', JSON.stringify(data));
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