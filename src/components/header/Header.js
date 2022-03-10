import React from "react";
import ControlOption from "./controlOption";
import Location from "./Location";
import { icons } from "./Helper";

function Header(){
    return (
        <div id="header">
            <img src={icons.logo} id="logo" alt="swiggy" name='swiggy' />            
            <Location/>
            <ControlOption id="search" icon={icons.searchIcon} text="Search"/>
            <ControlOption id="offers" icon={icons.offersIcon} text="Offers" new={true} />
            <ControlOption icon={icons.helpIcon} text="Help"/>
            <ControlOption icon={icons.signInIcon} text="Sign In"/>
            <ControlOption icon={icons.cartIcon} text="Cart"/>

        </div>
    )
}

export default Header;