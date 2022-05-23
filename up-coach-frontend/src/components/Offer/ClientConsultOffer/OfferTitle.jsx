import React from "react";

import "../../../css/App.css"
function OfferTitle(props) {
  return ( <div>
      <p style={{fontFamily:"Space Grotesk",
     
    marginTop:"20%",
  
  lineHeight: "1,4",
    fontSize: "50px",

 fontWeight: "300",


}}> <span style={{color:"#F58025"}}>{props.title}</span>
 
 </p>
   
  
 </div>
  );
}
export default OfferTitle;
