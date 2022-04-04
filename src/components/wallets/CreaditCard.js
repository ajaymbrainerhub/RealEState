import React from "react";
//componet
import Header from "../header/Header";
//dependencies
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
//css
import "../wallets/creaditcard.css";
//images
import PaymentCard from "../../assets/shop/paymentCard.jpg";


export default function CreaditCard() {
  let history = useHistory();
  const { t } = useTranslation();

  return (
    <div className='scrollTamplate'>
      <Header />
      <div className="creaditCardTemplate">
        <div className="container">
          <div className="templateHeading">
            <span
              className="backIcon"
              onClick={() => {
                history.push("/wallet");
              }}
            >
              <ArrowBackIcon />
            </span>
            <h1 className="templateTitle">{t("loadMoneyToWallet")}</h1>
          </div>
          <div className="creaditMoneyCard">
            <img src={PaymentCard} className="img-fluid" alt="My Awesome" />
            <p className="creaditMoneyCard-Text">
              {t("nofees")}
              <span>250</span>
              {t("shekelsAsGift")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
