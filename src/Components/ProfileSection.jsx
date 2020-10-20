import { render } from "@testing-library/react"
import React from "react"
import { NavLink } from "react-router-dom"
import Notification from "./Notification"
import Logout from "../images/logout.png"
import PersonProfile from "./PersonProile"
import ProfileImage from "../images/profile.png"
import ActivityFeed from "./ActivityFeed"
const ProfileSetion=()=>{
   
    return(
<div className="right-menu">
        <div className="top-bar">
          <h5>Profile</h5>
          <div className="extra-info">
            <ul>
              <li className="dropdown">
                <NavLink to="/"className="notifi1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fa fa-bell" aria-hidden="true"></i><span className="badge">15</span>
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="dLabel">
                  <h5>Notification</h5>
                  <div className="activity-feeds">
                {/*<!-- notification-->*/}
               <Notification notificationCOunt="25" notificationPercent="+5.6" NotificationHeading="NewInoice"/>
                   
                  </div>
                </ul>
              </li>
              <li>
                <NavLink to="/"><img src={Logout} alt="" width="15" className="notifi2"/>
                  <span className="notifi3">Logout</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- profile start --> */}
     <PersonProfile profileImg={ProfileImage} personName="Harry" IndustryName="Universal Industries"/>
        {/* <!-- profile end -->
        <!-- activity feeds start --> */}
        <div className="activity-feeds">
          <h4>Activity Feed</h4>
         <ActivityFeed feedCount="25" feedPercent="-2.52" feedName="News Feed" />
   
        </div>
       
      </div>
    );

        
}

export default ProfileSetion;