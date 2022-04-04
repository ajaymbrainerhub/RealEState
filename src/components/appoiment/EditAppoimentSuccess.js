import React, { useState } from "react";
import success from "../../../src/assets/imgs/success.png";
import "./appoiment.css";

function EditAppoimentSuccess() {
  return (
    <div className="scrollTamplate">
      <div className="successModule">
        <div className="successModule-inner">
          <span className="successModule-img">
            <img src={success} className="img-fluid" alt=""/>
          </span>
          <h6 className="successModule-title">Edit Success!</h6>
          <p className="successModule-text">
            Friday, 14 January 2022, at 15:30 am, Video Call with Miki Ito.
          </p>
          <button className="successModule-button">Send notification</button>
        </div>
        <div className="successModule-back">
          <button className="successModule-mainbutton">Back</button>
        </div>
      </div>
    </div>
  );
}
export default EditAppoimentSuccess;
