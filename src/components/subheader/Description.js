import React from "react";
import DescriptionBox from "./DescriptionBox";
import DescriptionText from "./DescriptionText";

import starIcon from '../../assests/images/star.svg'


function Description(){
    return (
        <div id="description" className="inline">
            <DescriptionText/>
            <div id="description-values" className="flex">
                <DescriptionBox id="description-rating" classes="margin-2 border-r" heading="3.9" paragraph="100+ Ratings" img={starIcon} />
                <DescriptionBox id="description-delivery" classes="margin-2 border-r" heading="Closed" paragraph="For delivery" />
                <DescriptionBox id="description-cost" classes="margin-2" heading="₹200" paragraph="Cost for two" />
            </div>
        </div>
    )
}

export default Description;