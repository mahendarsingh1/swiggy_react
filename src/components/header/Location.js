import React from "react";
import './styles/Location.css'

import dropDwnIcon from '../../assests/images/dropdown.svg'

function Location(){
    return <div id="location" className="inline">
            <ins>Sevashrama</ins> 
            <span> Bangalore Railway Station</span>
            <img src={dropDwnIcon} alt=""/>
        </div>
}

export default Location;