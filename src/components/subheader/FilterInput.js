import React from "react";

function SearchBox(props){
    return(
        <div id={props.id} className="inline filter-inputs">
            {props.img && <img src={props.img} alt="" height="15px"/>}
            {props.inputId && <input id={props.inputId} type={props.inputType} placeholder={props.inputPlaceholder}/>} 
            {" "}
            {props.text && props.text}
        </div>
    )
}

export default SearchBox;