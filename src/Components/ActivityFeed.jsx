
import React from "react";
import { NavLink } from "react-router-dom";

const ActivityFeed=(props)=>{
    return(
<NavLink to="/">
<div className="activity">
  <div className="icon">
    <i className="fa fa-file-o" aria-hidden="true"></i>
  </div>
  <ul>
    <li className="feed-count">{props.feedCount}  <span>({props.feedPercent})</span></li>
    <li className="feed-name">{props.feedName}</li>
  </ul>
</div>
</NavLink>
    )
}
export default ActivityFeed;