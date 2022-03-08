import React from "react";
import FoodListSection from "./FoodListSection";

function FoodList(props){

    let keys = Object.keys(props.foodListData);
    let list = keys.map(category=>{
        return <FoodListSection key={category} category={category} items={props.foodListData[category]} />
    })
    
    return(
        <div id="food-list" className="op-9">
            {list.length>0 && list}
        </div>
    )
}

export default FoodList;