import React from "react";
import "./User.css";
import { ReactComponent as Price } from "../../assets/imgs/price.svg";
import userImg from "../../assets/imgs/user.jpeg";
import house1 from "../../assets/imgs/houses/1.jpg";
import house2 from "../../assets/imgs/houses/2.jpg";
import house3 from "../../assets/imgs/houses/3.jpg";
import chat from "../../assets/imgs/icons/messenger.svg";
import mail from "../../assets/imgs/icons/email.svg";
import call from "../../assets/imgs/icons/phone-call.svg";
import profile from "../../assets/imgs/icons/profile.svg";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import BusinessIcon from "@mui/icons-material/Business";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CallIcon from "@mui/icons-material/Call";
import ForumIcon from "@mui/icons-material/Forum";
import EmailIcon from "@mui/icons-material/Email";
import { ReactComponent as Bath } from "../../assets/imgs/bath.svg";
import { ReactComponent as Bed } from "../../assets/imgs/bed.svg";
import { ReactComponent as Location } from "../../assets/imgs/location.svg";
import VideoCall from "../../assets/imgs/VideoCall.jpeg";
import Metting from "../../assets/imgs/Metting.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useHistory } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import { useTranslation } from "react-i18next";

function User() {
  let history = useHistory();
  const { t } = useTranslation();
  return (
    <div className="scrollTamplate">
      <div className="user">
        <div className="user-container">
          <div
            style={{ backgroundImage: `url(${house1})` }}
            className="userHeadBanner"
          ></div>
          <div className="userTop">
            <span className="userTop-img">
              <img src={userImg} className="img-fluid" alt="" />
            </span>
            <div className="userTop-info">
              <h6 className="userTop-name"> {t("mikiLto")}</h6>

              <p className="userTop-desc">
                Real Estate Agent specialized in marketing real estate for 5
                years
              </p>
              <button className="userTop-button"> {t("cityEstate")}</button>
            </div>
          </div>
          <div className="UserContactInfo">
            <div className="UserContactInfo-box">
              <CallIcon />
              <span>{t("callMe")}</span>
            </div>
            <div className="UserContactInfo-box">
              <ForumIcon />
              <span>{t("startChat")}</span>
            </div>
            <div className="UserContactInfo-box UserContactInfoImage">
              <img src={VideoCall} alt="" />
              <span>{t("videoCall")}</span>
            </div>
            <div className="UserContactInfo-box UserContactInfoImage">
              <img
                src={Metting}
                onClick={() => history.push("/bookingappointment")}
                alt=""
              />
              <span>{t("metting")}</span>
            </div>
          </div>
          <div className="UseraboutList">
            <PersonIcon />
            <div className="UseraboutList-info">
              <h6 className="UseraboutList-title">{t("aboutMe")}</h6>
              <p>
                Lorem ipsum, dolor sit ame doloribus ullam doloremque mollitia,
                obcaecati quisquam non rem in aperiam autem.
              </p>
            </div>
          </div>
          <div className="UseraboutList">
            <BusinessIcon />
            <div className="UseraboutList-info">
              <h6 className="UseraboutList-title">{t("aboutOurCompany")}</h6>
            </div>
          </div>
          <div className="UseraboutList">
            <AccessTimeIcon />
            <div className="UseraboutList-info">
              <h6 className="UseraboutList-title">{t("openingHours")}</h6>
            </div>
          </div>
          <button className="btn-add-contacts">
            <span>{t("addToContacts")}</span>
            <AddIcon />
          </button>
          <div className="userProducts">
            <Tabs>
              <div className="userProducts-head">
                <h3 className="userProducts-title">
                  {" "}
                  {t("availableProperties")}
                </h3>
                <TabList>
                  <Tab>{t("buy")}</Tab>
                  <Tab>{t("rent")}</Tab>
                </TabList>
              </div>

              <TabPanel>
                <div>
                  <div className="userProductsBox">
                    <div className="userProductsBox-Img">
                      <img src={house1} className="img-fluid" alt="" />
                    </div>
                    <div className="userProductsBox-info">
                      <div className="userProductsBox-infoHead">
                        <h6 className="userProductsBox-price">2,130,000 $</h6>
                        <div className="iconitems">
                          <div className="iconlist">
                            <Bath />
                            <span>5</span>
                          </div>
                          <div className="iconlist">
                            <Bed />
                            <span>6</span>
                          </div>
                        </div>
                      </div>
                      <div className="userProductsBox-infoTitle">
                        {" "}
                        Kearny Passaic
                      </div>
                      <div className="location">
                        <Location /> New York, United state
                      </div>
                      <div className="userProductsBox-size">
                        {" "}
                        <span className="mr-15">124 meters</span>{" "}
                        <span>apratment</span>
                      </div>
                      <button>{t("moreDetails")}</button>
                    </div>
                  </div>
                  <div className="userProductsBox">
                    <div className="userProductsBox-Img">
                      <img src={house2} className="img-fluid" alt="" />
                    </div>
                    <div className="userProductsBox-info">
                      <div className="userProductsBox-infoHead">
                        <h6 className="userProductsBox-price">2,130,000 $</h6>
                        <div className="iconitems">
                          <div className="iconlist">
                            <Bath />
                            <span>5</span>
                          </div>
                          <div className="iconlist">
                            <Bed />
                            <span>6</span>
                          </div>
                        </div>
                      </div>
                      <div className="userProductsBox-infoTitle">
                        {" "}
                        Kearny Passaic
                      </div>
                      <div className="location">
                        <Location /> New York, United state
                      </div>
                      <div className="userProductsBox-size">
                        {" "}
                        <span className="mr-15">124 meters</span>{" "}
                        <span>apratment</span>
                      </div>
                      <button>{t("moreDetails")}</button>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div>
                  <div className="userProductsBox">
                    <div className="userProductsBox-Img">
                      <img src={house3} className="img-fluid" alt="" />
                    </div>
                    <div className="userProductsBox-info">
                      <div className="userProductsBox-infoHead">
                        <h6 className="userProductsBox-price">2,130,000 $</h6>
                        <div className="iconitems">
                          <div className="iconlist">
                            <Bath />
                            <span>5</span>
                          </div>
                          <div className="iconlist">
                            <Bed />
                            <span>6</span>
                          </div>
                        </div>
                      </div>
                      <div className="userProductsBox-infoTitle">
                        {" "}
                        Kearny Passaic{" "}
                      </div>
                      <div className="location">
                        <Location /> New York, United state
                      </div>
                      <div className="userProductsBox-size">
                        {" "}
                        <span className="mr-15">124 meters</span>{" "}
                        <span>apratment</span>
                      </div>
                      <button>{t("moreDetails")}</button>
                    </div>
                  </div>
                  <div className="userProductsBox">
                    <div className="userProductsBox-Img">
                      <img src={house1} className="img-fluid" alt="" />
                    </div>
                    <div className="userProductsBox-info">
                      <div className="userProductsBox-infoHead">
                        <h6 className="userProductsBox-price">2,130,000 $</h6>
                        <div className="iconitems">
                          <div className="iconlist">
                            <Bath />
                            <span>5</span>
                          </div>
                          <div className="iconlist">
                            <Bed />
                            <span>6</span>
                          </div>
                        </div>
                      </div>
                      <div className="userProductsBox-infoTitle">
                        {" "}
                        Kearny Passaic
                      </div>
                      <div className="location">
                        <Location /> New York, United state
                      </div>
                      <div className="userProductsBox-size">
                        {" "}
                        <span className="mr-15">124 meters</span>{" "}
                        <span>apratment</span>
                      </div>
                      <button>{t("moreDetails")}</button>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>

          <div className="galleryBlock">
            <h3 className="galleryBlock-Title">{t("gallery")}</h3>
            <div className="gallery">
              <img className="img-1" src={house1} alt="" />
              <img className="img-2" src={house2} alt="" />
              <img className="img-3" src={house3} alt="" />
              <img className="img-4" src={house1} alt="" />
              <img className="img-5" src={house2} alt="" />
              <img className="img-6" src={house3} alt="" />
              <img className="img-7" src={house1} alt="" />
            </div>
          </div>

          <div className="Contactform">
            <div className="Contactform-Heading">
              <h3 className="Contactform-Title">
                {t("interestedOnFindyourDreamHouse")}
              </h3>
              <h4 className="Contactform-text">
                {t("leaveMeyourDeatilsDownBelow")}
              </h4>
            </div>
            <div className="Contactform-form">
              <input type="text" placeholder={t("yourName")} />
              <input type="text" placeholder={t("emailAddress")} />
              <input type="text" placeholder={t("phone")} />
              <button>{t("send")}</button>
            </div>
          </div>

          <div className="socialBlock">
            <h3 className="socialBlock-Title">{t("followOnSocialNetwork")}</h3>
            <div className="social-icons">
              <span className="social-Insta-icons">
                <InstagramIcon />
              </span>
              <span className="social-Yt-icons">
                <YouTubeIcon />
              </span>
              <span className="social-Fb-icons">
                <FacebookIcon />
              </span>
            </div>
          </div>
          <div className="newsLetter">
            <h3 className="newsLetter-Title">{t("subscribeForLastNews")}</h3>
            <div className="newsLetter-form">
              <input type="text" className="mr-15" />
              <button>{t("invite")}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
