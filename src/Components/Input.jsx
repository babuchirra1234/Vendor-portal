import React from 'react'

const Input=(props)=>{

    
    return(
        <>
        <div className={props.rowWidth}>
    <label htmlFor={props.name}>{props.label}</label>
            <div className="form-group">
            <input type={props.type} 
            key={props.key}
            value={props.value}
            placeholder={props.placeholder}
            name={props.name}
            onChange={props.onChange}
            className="form-control"
            onClick={props.onClick}
            onSelect={props.onSelect}
            onBlur={props.onBlur}
          
            />
            </div>
        </div>
        </>
    )
    
}


export default Input;