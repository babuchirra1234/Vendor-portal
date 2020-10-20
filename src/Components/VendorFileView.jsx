import React from 'react'
import { Link } from 'react-router-dom';
import PDFUtility from '../pages/common/PDFUtility';
import Input from './Input';
import TextAreaComponent from './TextAreaComponent';

const VendorFileView=(props)=>{

    return(
        <>

<div id="myPopup"  style={{display : 'none'}}>
<PDFUtility   url={props.myurl}/>

</div>

               <Input rowWidth="col-md-4"
                  type="text"
                  name="purpose"
                  value={props.purpose}
                  label="Purpose"
                />
                <Input rowWidth="col-md-4"
                  type="text"
                  value={props.nameEle}
                  label="File name"
                />
                  <div className="pull-left mb-40">
                        <div className="my-btn color-green  view-btn reg4" onClick={myfunction}>
                        
                          View
                        </div>                  
                    </div>
                <Input rowWidth="col-md-4"
                  type="text"
                  value={props.expiryfrom}
                  label="expiryfrom"
                />
                <Input rowWidth="col-md-4"
                  type="text"
                  value={props.expiryto}
                  label="expiryto"
                />
                <TextAreaComponent label="Remarks"
                ></TextAreaComponent>  
                
                <div className="clearfix"></div>


                  </>
               
    )
    function myfunction() {
      document.getElementById("myPopup").style.display='block'
     
    }
}


export default VendorFileView;