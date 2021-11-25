import React from "react";

const CenteredImage = ({imgSrc,text,imgWidth="55%"}) => {
  return (
    <div style={{width:"100%",flexDirection:"column",display:"flex",justifyContent:"center",alignItems:"center"}}>
    
        <img style={{width:imgWidth,margin:"15px"}} src={imgSrc} alt="Buy Now Pay Later" />
       <div>
       <p style={{ textAlign: "center" }}>
          {text}
        </p>
       </div>
      
    </div>
  );
};

export default CenteredImage;
