import React, { useState, useEffect } from "react";
import userImg from "../../assets/imgs/user.jpeg";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import DatePicker from "react-horizontal-datepicker";
import { useTranslation } from "react-i18next";

function Appointment() {
  const { t } = useTranslation();
  let history = useHistory();
  const selectedDay = (val) => {};
  return (
    <>
      <div className="scrollTamplate">
        <div className="appoimentModule">
          <div className="appoimentModuleHeading">
            <h3>{t("bookAppointment")}</h3>
          </div>
          <div className="appoimentModuleInner">
            <div className="appoimentModule-user">
              <span className="appoimentModule-userimg">
                <img src={userImg} className="img-fluid" alt="" />
              </span>
              <div className="appoimentModule-userinfo">
                <h6 className="appoimentModule-username">{t("mikiLto")}</h6>
                <p className="appoimentModule-userdesc">
                  {t(
                    "aealEstateAgentSpecializedInMarketingRealEstateFor5Years"
                  )}
                </p>
              </div>
            </div>
            <div className="appoimentModuleblock">
              <h4 className="appoimentModuleblock-title">{t("pickADay")}</h4>
              <div className="dateSelector">
                <DatePicker
                  getSelectedDay={selectedDay}
                  endDate={365}
                  labelFormat={"MMMM yyyy"}
                  color={"#00a9d6"}
                />
              </div>
            </div>
            <div className="appoimentModuleblock">
              <h4 className="appoimentModuleblock-title">{t("pickATime")}</h4>
              <div className="appoimentModuleblock-chooseBtn appoimentModuleblock-chooseBtn-4">
                <Button variant="contained">8:30</Button>
                <Button variant="contained">9:30</Button>
                <Button variant="contained">10:30</Button>
                <Button variant="contained">11:30</Button>
                <Button variant="contained" className="selected">
                  12:30
                </Button>
                <Button variant="contained">13:30</Button>
                <Button variant="contained">14:30</Button>
                <Button variant="contained">15:30</Button>
                <Button variant="contained">16:30</Button>
                <Button variant="contained">17:30</Button>
                <Button variant="contained">18:30</Button>
                <Button variant="contained">19:30</Button>
              </div>
            </div>
            <div className="appoimentModuleblock">
              <h4 className="appoimentModuleblock-title">
                {t("chooseASpecialty")}
              </h4>
              <div className="appoimentModuleblock-chooseBtn">
                <Button variant="contained" className="selected">
                  {t("buy")}
                </Button>
                <Button variant="contained">{t("rent")}</Button>
              </div>
            </div>
            <div className="appoimentModuleblock">
              <h4 className="appoimentModuleblock-title">{t("chooseAType")}</h4>
              <div className="appoimentModuleblock-chooseBtn">
                <Button variant="contained">{t("call")}</Button>
                <Button variant="contained">{t("videoCall")}</Button>
                <Button variant="contained" className="selected">
                  {t("metting")}
                </Button>
              </div>
            </div>
          </div>
          <div className="appoimentModule-btns">
            <Button
              variant="contained"
              className="ConfirmBtn"
              onClick={() => history.push("/successbooking")}
            >
              {t("confirm")}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Appointment;
