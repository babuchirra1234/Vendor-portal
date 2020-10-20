import React from 'react'
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
const Column=(props)=>{

    
    return(
        <>

        <AgGridColumn 
            field="{props.field}" 
            sortable={true}  
            filter={true} 
            floatingFilter={true}
            headerName="{props.headerName}"
        ></AgGridColumn>
                       
   
        </>
    )
    
}


export default Column;