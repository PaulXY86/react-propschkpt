import React from "react";
 
 const FullName = props => {
    console.log(`props:`,props)
     return (
        <div style={{backgroundColor: 'yellowgreen',margin:35}}>
            <h2>Full Name: {props.fullname}</h2>
        </div>
    )
}
 
export default FullName;
