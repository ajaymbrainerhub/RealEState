import React, { useState } from "react";
import success from "../../../src/assets/imgs/success.png";
import "./appoiment.css";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

function BookingAppoimentSuccess() {
  let history = useHistory();
  const { t } = useTranslation();
  return (
    <div className="scrollTamplate">
      <div className="successModule">
        <div className="successModule-inner">
          <span className="successModule-img">
            <img src={success} className="img-fluid" />
          </span>
          <h6 className="successModule-title">{t("youAreRegistered")}</h6>
          <p className="successModule-text">{t("address")}</p>
        </div>
        <div className="successModule-back">
          <button
            className="successModule-mainbutton"
            onClick={() => history.push("/bookingappointment")}
          >
            {t("back")}
          </button>
        </div>
      </div>
    </div>
  );
}
export default BookingAppoimentSuccess;
