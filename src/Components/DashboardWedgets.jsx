import React from "react";
import { NavLink } from "react-router-dom";

const DashboardWidgets = (props) => {
  return (
    <div className="col-lg-4">
      <div className={props.widgetName}>
        <div className={props.colourName}>
          <i className={props.iconName} aria-hidden="true"></i>
        </div>
        <h4>{props.widgetHeading}</h4>
        <ul>
          <li>
            <NavLink to={props.submitTo}>{props.submitText}</NavLink>
          </li>
          <li>
            <NavLink to={props.to}>
              {props.numberText}
              <span className="right">{props.number}</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default DashboardWidgets;