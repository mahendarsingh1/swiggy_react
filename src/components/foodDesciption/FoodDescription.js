import React from "react";
import Overview from "./Overview";
import FoodList from './FoodList'

class FoodDescription extends React.Component{
    
    constructor(props){
        super(props);
        this.state = { foodListData:{} }
    }

    componentDidMount(){
        fetch('./data/foodList.json')
            .then(response => response.json())
            .then(data =>{
                this.setState({foodListData : data});
            })
            .catch(err=> console.log(err));
    }

    render(){
        return (
            <div id="food-description" className="flex">
                <Overview categories={Object.keys(this.state.foodListData)} />
                <FoodList foodListData={this.state.foodListData} />
            </div>
        )
    }
}

export default FoodDescription;