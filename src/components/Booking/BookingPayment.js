import React from "react";


//images
import Paymentsuccess from "../../assets/shop/paymentsuccess.png";

//component
import "./bookingPayment.css";
import Header from "../header/Header";

//dependencies
import { useTranslation } from "react-i18next";
import { Button } from "@material-ui/core";

function BookingPayment() {
  const { t } = useTranslation();

  return (
    <div className='scrollTamplate'>
      <Header />
      <div className="sucess_screen_main">
        <div className="sucess_screen_inner">
          <div
            className="sucess_screen_image"
            style={{ backgroundImage: `url(${Paymentsuccess})` }}
          ></div>
          <h3>{t("purchase")}</h3>
        </div>
        <div className="sucess_screen_button">
          <Button variant="contained">{t("backto")} </Button>
        </div>
      </div>
    </div>
  );
}

export default BookingPayment;
