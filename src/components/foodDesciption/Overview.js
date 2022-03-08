import React from "react";

function Overview(props){
    
    let links = props.categories.map(category =>{
            return(
                <p key={category}>
                    <a href={`#${category}`}> {category} </a>
                </p>
            )
        });
    
    return(
        <div id="overview">
            {links}
        </div>
    )
    
}

export default Overview;