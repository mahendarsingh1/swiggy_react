import React from "react";
import './styles/FoodListItem.css'

import img from '../../assests/images/symbol.svg'

function FoodListItem(props) {

    let { category, item, handleAddToCart } = props;
    let { id, heading, amount, description, type } = item;

    function handleClick(){
        handleAddToCart(id, category);
    }

    return (
        <>
            <div className="food-list-item">
                <img src={img} className={`margin-tb-8 h-15 ${type}` } alt=""/>
                <div className="flex-space-between w-90">
                    <div>
                        <h3 className="margin-tb-8">{heading}</h3>
                        <p className="margin-tb-8">₹{amount}</p>
                    </div>
                    <button className="food-list-item-button" onClick={handleClick}>ADD</button>
                </div>
                <p className="margin-tb-8 op-6">{description}</p>
            </div>
            <hr/>
        </>
    )
}

export default FoodListItem;