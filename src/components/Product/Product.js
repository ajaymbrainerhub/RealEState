import React, { useState } from "react";

//images
import headerHorse from "../../assets/shop/headerHorse.jpg";
//component
import "../Product/product.css";
import Header from "../header/Header";

//dependencies
import CalendarPicker from "@mui/lab/CalendarPicker";
import DateRangeIcon from "@mui/icons-material/DateRange";
import Modal from "@mui/material/Modal";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { TextField } from "@material-ui/core";
import { styled } from "@mui/material/styles";
import ReportGmailerrorredRoundedIcon from "@mui/icons-material/ReportGmailerrorredRounded";
import PushPinRoundedIcon from "@mui/icons-material/PushPinRounded";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";

function Product() {
  const [value, setValue] = useState(new Date("2014-08-18T21:11:54"));
  const [date, setDate] = React.useState(new Date());
  const { t } = useTranslation();
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [isDateSelect, setDateSelect] = useState(false);
  const [age, setAge] = React.useState("");
  const handleChangeDropdown = (event) => {
    setAge(event.target.value);
  };

  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));

  const handleClose = () => {
    setOpenDatePicker(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="scrollTamplate">
      <Header />
      <div className="container">
        <div className="appProductDetails">
          <div className="row">
            <div className="col-lg-12">
              <div className="appProductDetails-img">
                <div className="appProductDetails-tool">
                  <span className="reportIcon">
                    <LightTooltip title={t("war")}>
                      <ReportGmailerrorredRoundedIcon />
                    </LightTooltip>
                  </span>
                  <span className="pinIcon">
                    <LightTooltip title={t("pin")}>
                      <PushPinRoundedIcon />
                    </LightTooltip>
                  </span>
                </div>

                <img src={headerHorse} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="appProductDetails-info">
                <div className="appProductDetails-infoHead">
                  <div className="appProductDetails-Date">
                    <DateRangeIcon
                      onClick={() => {
                        setOpenDatePicker(true);
                      }}
                    />

                    {console.log("openDatePicker", openDatePicker)}
                    {openDatePicker ? (
                      <Modal
                        open={openDatePicker}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        className="date-picker"
                      >
                        <Box sx={style} className="product_date_picker">
                          <div className="product_date_picker_closeIcon">
                            <CloseIcon onClick={handleClose} />
                          </div>
                          <div className="product_date_picker_Title">
                            <div className="product_date_picker_Title_text">
                              {t("please")}{" "}
                            </div>
                            <div className="product_date_picker_Title_date">
                              18.11.2021
                            </div>
                          </div>
                          <div className="clear"></div>
                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                            {!isDateSelect ? (
                              <CalendarPicker
                                className="product_date_calender"
                                date={date}
                                onChange={(newDate) => {
                                  setDateSelect(true);
                                  setDate(newDate);
                                }}
                              />
                            ) : (
                              <>
                                <div className="product_secoend">
                                  <div className="product_secoend_left">
                                    <TextField required name="firstname" />
                                    <FormControl
                                      sx={{ m: 1 }}
                                      variant="standard"
                                    >
                                      <Select
                                        labelId="demo-customized-select-label"
                                        id="demo-customized-select"
                                        value={age}
                                        onChange={handleChangeDropdown}
                                      >
                                        <MenuItem value="">
                                          <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                        <MenuItem value={4}>4</MenuItem>
                                        <MenuItem value={5}>5</MenuItem>
                                        <MenuItem value={6}>6</MenuItem>
                                        <MenuItem value={7}>7</MenuItem>
                                        <MenuItem value={8}>8</MenuItem>
                                        <MenuItem value={9}>9</MenuItem>
                                      </Select>
                                    </FormControl>
                                  </div>
                                  <div className="product_secoend_right">
                                    <div className="product_secoend_text">
                                      10:00 - 10:50
                                    </div>
                                    <div className="product_secoend_text">
                                      12:30 - 13:20
                                    </div>
                                    <div className="product_secoend_text">
                                      13:45 - 14:35
                                    </div>
                                    <div className="product_secoend_text">
                                      15:00 - 15:50
                                    </div>
                                  </div>
                                  <div className="clear"></div>
                                </div>
                              </>
                            )}
                          </LocalizationProvider>
                          <div className="product_date_picker_footer_text">
                            <div className="strong">
                              {" "}
                              <span>{t("horsebackRidingTrip")}</span>
                            </div>
                            <div className="text">
                              {" "}
                              <span>{t("tomkarTours4Places")}</span>
                              <span> {t("priceBeforeDiscountNIS360")}</span>
                              <span>{t("priceAfterDiscountNIS320")}</span>
                            </div>
                          </div>
                          <div className="footer-button">
                            {" "}
                            <Button className="dark-button" variant="contained">
                              {t("addtotheBasket")}
                            </Button>
                            <Button
                              className="light-button"
                              variant="contained"
                            >
                              {t("paynow")}
                            </Button>
                          </div>
                        </Box>
                      </Modal>
                    ) : (
                      ""
                    )}

                    {value.toLocaleDateString()}
                  </div>
                  <h5 className="appProductDetails-title">
                    {t("hourlyHorsebackRiding")}
                  </h5>
                </div>
                <div className="appProductDetails-infoBody">
                  <div className="appProductDetails-brand">
                    <div
                      className="appProductDetails-brandImg"
                      style={{ backgroundImage: `url(${headerHorse})` }}
                    ></div>
                    <span className="appProductDetails-brandName">
                      {t("hourlyHorsebackRiding")}
                    </span>
                  </div>
                  <div className="appProductDetails-content">
                    <h6 className="appProductDetails-subtitle">
                      {t("descriptionoftheExperience")}{" "}
                    </h6>
                    <p>{t("exp")}</p>
                  </div>
                </div>
                <div className="appProductDetails-infoFooter">
                  <Button variant="contained" className="orangeBtn">
                    {t("addtoFavorites")}
                  </Button>
                  <Button variant="contained" className="greenBtn">
                    {t("addtotheBasket")}
                  </Button>
                  <Button variant="contained" className="darkBlueBtn">
                    {t("thetime")}
                  </Button>
                  <Button variant="contained" className="lightBlueBtn">
                    {t("paynow")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
