import React from "react";
import FoodListItem from "./FoodListItem";

function FoodListSection(props){

    return (
        <>
            <h2 id={props.category}>{props.category}</h2>
            {props.items && <p className="op-9">{props.items.length} ITEMS</p>}
            {props.items.map(item => {
                return (
                    <FoodListItem key={item.id} img={props.icon} item={item} />
                );
            })}
        </>
    )
}

export default FoodListSection;