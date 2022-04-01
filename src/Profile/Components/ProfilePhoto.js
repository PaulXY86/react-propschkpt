import React from 'react';

const ProfilePhoto = props => {
    console.log(`props:`,props)
     return (
        <div style={{backgroundColor: 'yellowgreen',margin:35}}>
            <h2>Profile Photo: {props.profilephoto}</h2>
        </div>
    )
}

export default  ProfilePhoto;
