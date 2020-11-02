import React, { useState } from 'react';
import { render } from 'react-dom';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const SearchUpdateUser = () => {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);

    const [rowData, setRowData] = useState([
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000}
    ]);

    function onGridReady(params) {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
    }

    return (
        <div className="ag-theme-alpine" style={ { height: 400, width: 600,margin:'auto' } }>
            <AgGridReact
                onGridReady={onGridReady}
                rowData={rowData}>
                <AgGridColumn field="make" sortable={true} filter={true} ></AgGridColumn>
                <AgGridColumn field="model" sortable={true} filter={true} ></AgGridColumn>
                <AgGridColumn field="price" sortable={true} filter={true} ></AgGridColumn>
            </AgGridReact>
        </div>
    );
};


export default SearchUpdateUser