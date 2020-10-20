

import React from "react";

const PersonProfile=(props)=>{
    return(
<div className="proifle-bg">
<div className="profile-pic">
{/* "images/profile.png" */}
  <img src={props.profileImg} alt={props.alt}/>
</div>
    <h3>{props.personName}</h3>
    <p>{props.IndustryName}</p>
</div>
    )
}
export default PersonProfile;