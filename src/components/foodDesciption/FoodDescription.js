import React from "react";
import Overview from "./Overview";
import FoodList from './FoodList'
import Cart from "../cart/Cart";
import './styles/FoodDescription.css'

function getItemById(data, id){
    return data.find((item)=>item.id===id)
}

class FoodDescription extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            foodListData: {},
            cartData:[]
        }
        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.handleQuantityUpdate = this.handleQuantityUpdate.bind(this);
        this.handleClearCart = this.handleClearCart.bind(this);
    }

    

    handleAddToCart(newItemId, category){
        let {cartData, foodListData} = this.state;

        let sameItem = getItemById(cartData, newItemId)
        if(!sameItem){
            let newItem = foodListData[category].find(item => item.id=== newItemId);
            this.setState({cartData: [...cartData, {...newItem, quantity:1, description:undefined}]})
        }
    }

    handleQuantityUpdate(id,type){
        let { cartData } = this.state;

        let item = getItemById(cartData, id)
        let filteredItems = cartData.filter(item => item.id!==Number(id));

        if(!(item.quantity===1 && type===-1))   filteredItems.push({...item, quantity:item.quantity+type })

        this.setState({cartData: filteredItems})
    }

    handleClearCart(){
        this.setState({ cartData : [] });
    }

    componentDidMount(){
        fetch('./data/foodList.json')
            .then(res => res.json())
            .then(data => this.setState({foodListData : data}))
            .catch(err=> console.log(err));
    }

    render(){
        return (
            <div id="food-description" className="flex">
                <Overview categories={Object.keys(this.state.foodListData)} />
                <FoodList foodListData={this.state.foodListData} handleAddToCart={this.handleAddToCart}/>
                <Cart 
                    cartData={this.state.cartData} 
                    handleQuantityUpdate={this.handleQuantityUpdate} 
                    handleClearCart={this.handleClearCart} 
                />
            </div>
        )
    }
}

export default FoodDescription;