import React from "react";
import './styles/DiscountSection.css'

function DiscountSection(){
    return(
        <div id="discount-section" className="inline">
            <h3 id="offer-heading" className="inline">OFFER</h3>
            <div id="offer-section">
                <img src="/assets/images/offers.svg" alt="" height="20px" className="invert"/>
                20% off up to ₹125 | Use KOTAK125 Above ₹500
                <br/>
                <img src="/assets/images/offers.svg" alt="" height="20px" className="invert"/>
                20% off up to ₹150 | Use PAYTMBANK150 Above ₹450
            </div>
        </div>
    )
}

export default DiscountSection;