import React from "react";

const ImageRow = ({images}) => {
  return (
    // <div style={{width:"100%",flexDirection:"column",display:"flex",justifyContent:"center",alignItems:"center"}}>
    
    //     <img style={{width:imgWidth,margin:"15px"}} src={imgSrc} alt="Buy Now Pay Later" />
    //    <div>
    //    <p style={{ textAlign: "center" }}>
    //       {text}
    //     </p>
    //    </div>
      
    // </div>

  <div class="row">
    {
      images.map(e=>{
        return (
          <div class="col">
            <img src={e.img} alt="Get Personal Loan"/>  
            <p style={{textAlign: "center"}}> {e.subtext}</p>
          </div>
        )
      })
    }
  </div>

    
  );
};

export default ImageRow;
