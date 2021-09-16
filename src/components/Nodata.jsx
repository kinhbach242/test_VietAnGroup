import React from "react";
import Img404 from "../assets/images/404";

function Nodata() {
  return (
    <>
      <div className="nodata">
        <div className="nodata_img">
          <img src={Img404} alt="Img 404" />
        </div>
        <div className="nodata_text">
          <p>No data, please try again later.</p>
        </div>
      </div>
    </>
  );
}

export default Nodata;
