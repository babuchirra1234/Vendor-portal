import React, { useState } from 'react'; 
import { Document, Page,pdfjs } from 'react-pdf'; 
import PO from './PO'

const url = 
"http://localhost:8080/files/6f3cb21a-969d-41f5-a172-5ecc699c32a1"
//"http://192.168.2.122/vendorServices/api/upload/files/1"

 function PDF() { 
	
pdfjs.GlobalWorkerOptions.workerSrc = 
`//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`; 
const [numPages, setNumPages] = useState(null); 
const [pageNumber, setPageNumber] = useState(1); 

/*To Prevent right click on screen*/
document.addEventListener("contextmenu", (event) => { 
	event.preventDefault(); 
}); 
	
/*When document gets loaded successfully*/
function onDocumentLoadSuccess({ numPages }) { 
	setNumPages(numPages); 
	setPageNumber(1); 
} 

function changePage(offset) { 
	setPageNumber(prevPageNumber => prevPageNumber + offset); 
} 

function previousPage() { 
	changePage(-1); 
} 

function nextPage() { 
	changePage(1); 
} 

return ( 
	<> 
	<div className="section"> 
	<Document 
		file={url} 
		onLoadSuccess={onDocumentLoadSuccess} 
	> 
		<Page pageNumber={pageNumber} /> 
	</Document> 
	<div >  
		<div className="pagec"> 
		Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'} 
		</div> 
		<div className="buttonc"> 
		<button 
		type="button"
		disabled={pageNumber <= 1} 
		onClick={previousPage} 
		className="Pre"
			
		> 
		Previous 
		</button> 
		<button 
		type="button"
		disabled={pageNumber >= numPages} 
		onClick={nextPage} 
		
		> 
		Next 
		</button> 
		</div> 
	</div> 
	</div> 
	</> 
); 
}
export default PDF