import React from "react";

function DescriptionBox(props){
    return (
        <div id={props.id} className={props.classes}>
            <h4>
                {props.img && <img src={props.img} alt={props.heading}/>}
                {props.heading}
            </h4>
            <p className="op-6">{props.paragraph}</p>
        </div>
    )
}

export default DescriptionBox;