import React from "react";
import userImg from "../../assets/imgs/user.jpeg";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";

function EditAppointment() {
  let history = useHistory();
  return (
    <div className="scrollTamplate">
      <div className="appoimentModule">
        <div className="appoimentModuleHeading">
          <h3>Edit Appointment</h3>
        </div>
        <div className="appoimentModuleInner">
          <div className="appoimentModule-user">
            <span className="appoimentModule-userimg appoimentModule-userimg--circle">
              <img src={userImg} className="img-fluid" alt="" />
            </span>
            <div className="appoimentModule-userinfo">
              <h6 className="appoimentModule-username">Miki lto</h6>
              <p className="appoimentModule-userdesc">
                Real Estate Agent specialized in marketing real estate for 5
                years
              </p>
            </div>
          </div>
          <div className="appoimentModuleblock">
            <h4 className="appoimentModuleblock-title">Pick a day</h4>
          </div>
          <div className="appoimentModuleblock">
            <h4 className="appoimentModuleblock-title">Pick a Time</h4>
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
            <h4 className="appoimentModuleblock-title">Choose a specialty</h4>
            <div className="appoimentModuleblock-chooseBtn">
              <Button variant="contained" className="selected">
                Buy
              </Button>
              <Button variant="contained">Rent</Button>
            </div>
          </div>
          <div className="appoimentModuleblock">
            <h4 className="appoimentModuleblock-title">Choose a type</h4>
            <div className="appoimentModuleblock-chooseBtn">
              <Button variant="contained">Call</Button>
              <Button variant="contained">Video Call</Button>
              <Button variant="contained" className="selected">
                Metting
              </Button>
            </div>
          </div>
        </div>
        <div className="appoimentModule-btns">
          <Button
            variant="contained"
            className="ConfirmBtn"
            onClick={() => history.push("/successedit")}
          >
            Reschedule
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EditAppointment;
