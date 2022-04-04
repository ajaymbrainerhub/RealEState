import React, { useState } from "react";
//component
import Header from "../header/Header";
import "../cart/checkout.css";
//images
import Visa from "../../assets/shop/visa.jpg";
import MasterCard from "../../assets/shop/mastercard.png";
import Debitcard from "../../assets/shop/debitcard1.png";
//dependencies
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { useTranslation } from "react-i18next";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@material-ui/core";

function Checkout() {
  let history = useHistory();
  const { t } = useTranslation();

  const [showaddress, setShowAddress] = useState(false);
  const [showcard, setShowCard] = useState(false);

  return (
    <div className='scrollTamplate'>
      <Header />
      <div className="pageTemplate">
        <div className="container">
          {!showaddress && !showcard ? (
            <div>
              <div className="templateHeading">
                <span className="backIcon">
                  <ArrowBackIcon
                    onClick={() => {
                      history.push("/");
                    }}
                  />
                </span>
                <h1 className="templateTitle">{t("checkout")}</h1>
              </div>
              <div className="checkoutBlocks">
                <h5 className="checkoutBlocks-title">{t("deliveryAddress")}</h5>
                <div className="row align-items-center">
                  <div className="col-lg-4">
                    <TextField
                      id="outlined-basic"
                      label={t("homeAddress")}
                      variant="outlined"
                      placeholder={t("homeAddress")}
                    />
                  </div>
                  <div className="col-lg-12 text-center">
                    <Button
                      variant="text"
                      onClick={() => setShowAddress(true)}
                      className="LinkBtn"
                    >
                      <AddIcon /> {t("newAddress")}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="checkoutBlocks">
                <h5 className="checkoutBlocks-title">
                  {" "}
                  {t("choosePaymentMethod")}
                </h5>
                <div className="row justify-content-center">
                  <div className="col-lg-4">
                    <div className="PaymentCards">
                      <div className="PaymentCards-img">
                        <img
                          src={Visa}
                          alt=""
                          height={100}
                          width={100}
                          className="img-fluid"
                        />
                      </div>
                      <span className="PaymentCards-no">{t("cardNo")}</span>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="PaymentCards">
                      <div className="PaymentCards-img">
                        <img
                          src={MasterCard}
                          alt=""
                          height={100}
                          width={100}
                          className="img-fluid"
                        />
                      </div>
                      <span className="PaymentCards-no">{t("cardNo")}</span>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="PaymentCards">
                      <div className="PaymentCards-img">
                        <img
                          src={Visa}
                          alt=""
                          height={100}
                          width={100}
                          className="img-fluid"
                        />
                      </div>
                      <span className="PaymentCards-no">{t("cardNo")}</span>
                    </div>
                  </div>
                  <div className="col-lg-12 text-center">
                    <Button
                      variant="text"
                      onClick={() => setShowCard(true)}
                      className="LinkBtn"
                    >
                      <AddIcon />
                      {t("addNewCard")}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="checkoutBlocks">
                <h5 className="checkoutBlocks-title">{t("payWithBlance")}:</h5>
                <p className="text-center">{t("totalEcredits")}:147</p>
              </div>
              <div className="checkoutBlocks">
                <h5 className="checkoutBlocks-title">{t("payWithBlance")}:</h5>
                <div className="text-center">
                  <Button variant="text" className="LinkBtn">
                    <AddIcon />
                    {t("showAllBonuses")}
                  </Button>
                </div>
              </div>
              <div className="checkoutFooterBtn">
                <Button
                  variant="outlined"
                  onClick={() => {
                    history.push("/checkout");
                  }}
                >
                  {t("payNow")}
                </Button>
              </div>
            </div>
          ) : (
            <>
              {showaddress ? (
                <div>
                  <div className="templateHeading">
                    <span className="backIcon">
                      <ArrowBackIcon onClick={() => setShowAddress(false)} />
                    </span>
                    <h1 className="templateTitle"> {t("newAddress")}</h1>
                  </div>
                  <div className="checkoutBlocks">
                    <h5 className="checkoutBlocks-title text-center">
                      {t("deliveryAddress")}
                    </h5>
                    <div className="row">
                      <div className="col-lg-6">
                        <TextField
                          id="outlined-basic"
                          label={t("country")}
                          variant="outlined"
                        />
                      </div>
                      <div className="col-lg-6">
                        <TextField
                          id="outlined-basic"
                          label={t("city")}
                          variant="outlined"
                        />
                      </div>
                      <div className="col-lg-6">
                        <TextField
                          id="outlined-basic"
                          label={t("zipcode")}
                          variant="outlined"
                        />
                      </div>
                      <div className="col-lg-6">
                        <TextField
                          id="outlined-basic"
                          label={t("street")}
                          variant="outlined"
                        />
                      </div>
                      <div className="col-lg-6">
                        <TextField
                          id="outlined-basic"
                          label={t("appartment")}
                          variant="outlined"
                        />
                      </div>
                      <div className="col-lg-6">
                        <TextField
                          id="outlined-basic"
                          label={t("phone")}
                          variant="outlined"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="checkoutFooterBtn">
                    <Button
                      variant="outlined"
                      onClick={() => setShowAddress(false)}
                    >
                      {t("save")}
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="templateHeading">
                    <span className="backIcon">
                      <ArrowBackIcon onClick={() => setShowCard(false)} />
                    </span>
                    <h1 className="templateTitle">{t("addNewCard")}</h1>
                  </div>
                  <div className="checkoutBlocks">
                    <div className="checkoutBlocks-mainImg text-center">
                      <img
                        src={Debitcard}
                        alt=""
                        height={500}
                        width={500}
                        className="img-fluid"
                      />
                    </div>
                    <h5 className="checkoutBlocks-title text-center">
                      {t("paymentMethod")}
                    </h5>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="cardTextNo">
                          <TextField
                            id="outlined-basic"
                            label={t("cardNumber")}
                            variant="outlined"
                          />
                          <img
                            src={MasterCard}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="row">
                          <div className="col-6">
                            <TextField
                              id="outlined-basic"
                              label={t("expiryDate")}
                              variant="outlined"
                            />
                          </div>
                          <div className="col-6">
                            <TextField
                              id="outlined-basic"
                              label={t("CVC/CVV")}
                              variant="outlined"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <TextField
                          id="outlined-basic"
                          label={t("cardame")}
                          variant="outlined"
                        />
                      </div>
                    </div>
                    <div className="checkoutFooterBtn">
                      <Button
                        variant="outlined"
                        onClick={() => setShowCard(false)}
                      >
                        {t("save")}
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
