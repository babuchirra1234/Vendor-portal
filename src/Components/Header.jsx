import React from 'react'
import profile from  "../images/profile.png";
import logout from "../images/logout.png"
const Header=(props)=>{

    
    return(
        <>
      
            <div className="section">

            <div className="section-top">
                <div className="top-bar">
                    <div className="extra-info">
                        <ul>
                            
                            <li className="dropdown">
                                <a href="#"  data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    <i className="fa fa-bell" aria-hidden="true"></i><span className="badge">15</span>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="dLabel">
                                    <h5>Notification</h5>
                                    <div className="activity-feeds">
                                        <li>
                                            <a href="#">
                                                <div className="activity">
                                                    <div className="icon">
                                                        <i className="fa fa-file-text-o" aria-hidden="true"></i>
                                                    </div>
                                                    <ul>
                                                        <li className="feed-count">25 <span>(+0.5%)</span></li>
                                                        <li className="feed-name">New Invoices</li>
                                                    </ul>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="activity">
                                                    <div className="icon">
                                                        <i className="fa fa-file-o" aria-hidden="true"></i>
                                                    </div>
                                                    <ul>
                                                        <li className="feed-count">50 <span>(+7.5%)</span></li>
                                                        <li className="feed-name">Average Monthly PO</li>
                                                    </ul>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="activity">
                                                    <div className="icon">
                                                        <i className="fa fa-line-chart" aria-hidden="true"></i>
                                                    </div>
                                                    <ul>
                                                        <li className="feed-count">18 <span>(+7.5%)</span></li>
                                                        <li className="feed-name">New Querries</li>
                                                    </ul>
                                                </div>
                                            </a>
                                        </li>
                                    </div>
                                </ul>
                            </li>
                            <li className="profile-pic">
                                
                                <img src={profile} alt="profile" />
                                <span className="name">Jhone Deo</span>
                            </li>
                            <li>
                                <a href="#"><img src={logout} alt="logout" width="15"/>
                                    <span className="logout">Logout</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
          
            </div>

        </>
    )
    
}


export default Header;