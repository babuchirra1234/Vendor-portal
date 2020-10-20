import React from 'react'
const TextAreaComponent=(props)=>{
    return(
        <>

		 <div className="col-md-8">
            <div className="form-group">
            <label for={props.name}>{props.label}</label>
              <textarea placeholder="Remarks"  
              value={props.value} 
              placeholder={props.placeholder} 
              name={props.name}
              onChange={props.onChange}
            className="form-control"
            
			></textarea>
      </div></div>
      	
          
           
          
        </>
    )
}


export default TextAreaComponent;