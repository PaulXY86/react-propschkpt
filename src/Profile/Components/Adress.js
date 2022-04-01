import React from 'react';

const Adress = props => {
    console.log(`props:`,props)
     return (
        <div style={{backgroundColor: 'yellowgreen',margin:35}}>
            <h2>Adress: {props.adress}</h2>
        </div>
    )
}

export default Adress;
