

import React from "react";
import { NavLink } from "react-router-dom";

const Notification=(props)=>{
    return(
<li>
<NavLink to="/">
  <div className="activity">
    <div className="icon">
      <i className="fa fa-file-text-o" aria-hidden="true"></i>
    </div>
    <ul>
      <li className="feed-count">{props.notificationCOunt} <span>({props.notificationPercent})</span></li>
      <li className="feed-name">{props.NotificationHeading}</li>
    </ul>
  </div>
</NavLink>
</li>
    )
}

export default Notification;