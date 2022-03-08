import React from "react";
import FoodListSection from "./FoodListSection";
import './styles/FoodList.css'


function FoodList(props){

    let { foodListData, handleAddToCart } = props;

    let keys = Object.keys(foodListData);
    let list = keys.map(category=>{
        return <FoodListSection 
                    key={category} 
                    category={category} 
                    items={foodListData[category]} 
                    handleAddToCart={handleAddToCart} 
                />
    })
    
    return(
        <div id="food-list" className="op-9">
            {list.length>0 && list}
        </div>
    )
}

export default FoodList;