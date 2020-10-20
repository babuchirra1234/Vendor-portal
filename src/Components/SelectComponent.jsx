import React from 'react'
const SelectComponent=(props)=>{
    return(
        <>
        <div className="col-md-4">
            <div className="form-group">
                    <select className="form-control"
                     name={props.name}
                     id={props.id}
                     onChange={props.onChange}
                     onSelect={props.onSelect}
                     name={props.name}
                     >
                        <option value="">{props.dropdown}</option>
                          {props.list.map(post=><option value={post.lookup_value_id}>{post.lookup_value} </option>)}        
                    </select>
            </div>
        </div>
        </>
    )
}
export default SelectComponent;