import React from "react";
import img from '../../assests/images/symbol.svg'

function FoodListItem(props) {
    return (
        <>
            <div className="food-list-item">
                <img src={img} className={"margin-tb-8 h-15 " + props.item.type } alt=""/>
                <div className="flex-space-between w-90">
                    <div>
                        <h3 className="margin-tb-8">{props.item.heading}</h3>
                        <p className="margin-tb-8">₹{props.item.amount}</p>
                    </div>
                    <button className="food-list-item-button" data-id={props.id}>ADD</button>
                </div>
                <p className="margin-tb-8 op-6">{props.item.description}</p>
            </div>
            <hr/>
        </>
    )
}

export default FoodListItem;