import React from "react";

const Input = (props) => {
  return (
    <>
      <div className="col-md-4">
        <div className="form-group">
          <label for="Query title">{props.title}:</label>
          {props.mandatory === "yes" ? (
            <input
              type={props.type}
              className="form-control"
              value={props.value}
              name={props.name}
              onBlur={props.onBlur}
              onChange={props.onchange}
         
              required
            />
          ) : (
            <input
              type={props.type}
              className="form-control"
              value={props.value}
              onBlur={props.onBlur}
              onChange={props.onchange}
              name={props.name}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Input;
