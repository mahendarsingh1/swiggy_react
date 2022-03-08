import React from "react";

function DescriptionBox(props){
    return (
        <div id={props.id} className={props.classes}>
            {props.img && <img src={props.img} alt={props.heading}/>}
            <h4 className="inline">{props.heading}</h4>
            <p className="op-6">{props.paragraph}</p>
        </div>
    )
}

export default DescriptionBox;