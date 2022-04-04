import React, { useState } from "react";

// import { CartState } from "../../context/Context";

import { useHistory } from "react-router-dom";
// import Badge from '@mui/material/Badge';
//dependencies
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import PersonOutline from "@material-ui/icons/PersonOutline";
// import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import Clear from "@material-ui/icons/Clear";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import StorefrontIcon from "@mui/icons-material/Storefront";
import Drawer from "@mui/material/Drawer";
import Slider from "@mui/material/Slider";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@mui/material/Button";
// import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MenuItem, Select } from "@material-ui/core";
import { Link } from "react-router-dom";
// import Typography from "@mui/material/Typography";

//icons
import profile from "../../assets/icons/profile.svg";
import groupChat from "../../assets/icons/group-chat.svg";
import Vacant from "../../assets/icons/vacantLand.svg";
import card from "../../assets/icons/cart.svg";
import location from "../../assets/icons/location.svg";

//componenets
import "./header.css";
import LanguageSelect from "../../components/Language/LanguageSelect";

//images
import userImg from "../../assets/shop/user.jpeg";
import search from "../../assets/shop/search.png";
// import user from "../../assets/shop/user.jpeg";

// import Dashboard from '../Dashborad/Dashboard';

const Header = () => {
  // const {
  //   state: { cart },
  // } = CartState();
  const { t } = useTranslation();

  // const navigate = useNavigate();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [category, setCategory] = useState("");
  const [priceValue, setPriceValue] = useState([20, 37]);
  const [isSizeSelected, sizeSelected] = useState(false);
  const [value, setValue] = useState(0);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [subToggleMenu, setSubToggleMenu] = useState(false);
  const [notification, setNotification] = useState(false);

  const [click, setClick] = useState(false);
  let history = useHistory();
  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      history.push("/home");
    }
    if (newValue === 1) {
      history.push("/");
    }
    if (newValue === 2) {
      history.push("/");
    }
  };
  const closeMobileMenu = () => setClick(false);
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handlePriceChange = (event, newValue) => {
    setPriceValue(newValue);
  };

  const handlenotification = () => {
    if (!notification) {
      setNotification(true);
    } else {
      setNotification(false);
    }
  };

  function valuetext(value) {
    return `${value}°C`;
  }

  const categoryList = [
    { label: "Dress (831)", value: "dress" },
    { label: "Kurti", value: "kurti" },
    { label: "Sari", value: "sari" },
  ];

  const sizeList = [
    { size: "X", value: "x", id: 1 },
    { size: "S", value: "s", id: 2 },
    { size: "M", value: "m", id: 3 },
    { size: "L", value: "l", id: 4 },
    { size: "Xl", value: "xl", id: 5 },
    { size: "XXL", value: "xxl", id: 5 },
  ];

  const colorList = [
    { code: "#ffffff", value: "white" },
    { code: "#c69c6d", value: "" },
    { code: "#846dc6", value: "" },
    { code: "#6dc684", value: "" },
    { code: "#e76d6d", value: "" },
    { code: "#c6c6c6", value: "" },
  ];
  const handleSizeChange = (item, i) => {};
  return (
    <div className="main">
      <div className={isMenuOpen ? "mainheader active-menu" : "mainheader"}>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-3 col-2">
              <div className="headerLeft">
                <div className="headerMainLogo">
                  {/* <p>{t("hello_welcome_to_react")}</p> */}
                  <a className="mainheader__btnLogo">RealEState</a>
                </div>
                {/* {isMenuOpen ? (
                  <Drawer
                    anchor="left"
                    className="SideDrawer"
                    open={isMenuOpen ? true : false}
                    onClose={() => setMenuOpen(false)}
                  >
                    <div className="SideDrawerHead">
                      <span
                        onClick={() => setMenuOpen(false)}
                        className="closeBtn"
                      >
                        {" "}
                        <Clear />
                      </span>
                      <div className="menu">
                        <div className="menu-inner">
                          <div className="menuHead">
                            <div className="menuUser">
                              <span className="menuUser-img">
                                <img
                                  src={userImg}
                                  className="img-fluid"
                                  alt="My Awesome"
                                />
                              </span>
                              <div className="menuUser-title">
                                {t("userName")}
                              </div>
                            </div>
                            <div
                              className="menuHead-btn"
                              // onClick={() => history.push("/")}
                            ></div>
                          </div>
                          <ul className="menuList">
                            <li>
                              <img
                                src={profile}
                                className="menuList-img"
                                alt="My Awesome"
                              />
                              <Link
                                to="/registerbusiness"
                                className="nav-links"
                                onClick={closeMobileMenu}
                              >
                                {t("registerBusiness")}
                              </Link>
                            </li>
                            <li>
                              <img
                                src={profile}
                                className="menuList-img"
                                alt="My Awesome"
                              />
                              <Link
                                to="/userProfile"
                                className="nav-links"
                                onClick={closeMobileMenu}
                              >
                                {t("businessProfile")}
                              </Link>
                            </li>
                            <li>
                              <img
                                src={profile}
                                className="menuList-img"
                                alt="My Awesome"
                              />
                              <Link
                                to="/managedashboard"
                                className="nav-links"
                                onClick={closeMobileMenu}
                              >
                                {t("manageDashbord")}
                              </Link>
                            </li>
                            <li>
                              <img
                                src={search}
                                className="menuList-img"
                                alt="agent"
                              />
                              <Link
                                to="/shops"
                                className="nav-links"
                                onClick={closeMobileMenu}
                              >
                                {t("searchForShop")}
                              </Link>
                            </li>
                            <li>
                              <img
                                src={location}
                                className="menuList-img"
                                alt=""
                              />
                              {t("propertiesAroundme")}
                            </li>
                            <li>
                              <StorefrontIcon className="menuList-img" />
                              {t("marketplace")}
                            </li>
                            <li>
                              <img
                                src={groupChat}
                                className="menuList-img"
                                alt=""
                              />
                              {t("groupChats")}
                            </li>
                            <li>
                              <img
                                src={Vacant}
                                className="menuList-img"
                                alt="My Awesome"
                              />
                              {t("referralProgram")}
                            </li>
                            <li>
                              <img
                                src={profile}
                                className="menuList-img"
                                alt="My Awesome"
                              />
                              {t("Invitefriends")}
                            </li>
                            <li>
                              <img
                                src={groupChat}
                                className="menuList-img"
                                alt="My Awesome"
                              />
                              {t("orders")}
                            </li>
                            <li>
                              <img
                                src={card}
                                className="menuList-img"
                                alt="My Awesome"
                              />
                              {t("card")}
                            </li>
                          </ul>
                        </div>
                        <div className="menuFooter">
                          <button
                            className="btn-gray"
                            onClick={() => history.push("/userprofile")}
                          >
                            {t("myProfile")}
                          </button>
                          <button className="btn-blue">
                            {t("chatWithBot")}
                          </button>
                          <div className="menufooterBtns">
                            <a className="menufooterLink">
                              <LogoutIcon /> {t("logout")}{" "}
                            </a>
                            <div className="menufooterLink">
                              <SettingsIcon />
                              {t("settings")}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Drawer>
                ) : (
                  ""
                )} */}
                <Tabs
                  value={value}
                  indicatorColor="primary"
                  textColor="primary"
                  onChange={handleChange}
                  aria-label="disabled tabs example"
                  className="MainMenu"
                >
                  <Tab
                    label={t("home")}
                    onClick={() => {
                      history.push("/dashboard");
                    }}
                  />
                  <Tab
                    label={t("shop")}
                    onClick={() => {
                      history.push("/dashboard");
                    }}
                  />
                  <Tab
                    label={t("categories")}
                    onClick={() => {
                      history.push("/categorylist");
                    }}
                  />
                </Tabs>
              </div>
            </div>

            <div className="col-lg-9 col-10 text-right">
              <div className="headerRight">
                {/* <Button className="dropBtn" onClick={() => setMenuOpen(true)}>
                  <MenuIcon />
                </Button> */}
                <Button
                  className="dropBtn d-none d-lg-flex"
                  onClick={() => setDrawerOpen(true)}
                >
                  <FilterAltIcon />
                </Button>
                {isDrawerOpen ? (
                  <Drawer
                    anchor="right"
                    className="SideDrawer"
                    open={isDrawerOpen ? true : false}
                    onClose={() => setDrawerOpen(false)}
                  >
                    <div className="SideDrawerHead">
                      <h6 className="SideDrawerTitle">{t("headerFilters")}</h6>
                      <span
                        onClick={() => setDrawerOpen(false)}
                        className="closeBtn"
                      >
                        {" "}
                        <Clear />
                      </span>
                    </div>
                    <div className="filterBlock">
                      <h6 className="filterBlockTitle">{t("category")}</h6>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={category}
                        label="category"
                        className="selectCategory"
                        onChange={handleCategoryChange}
                      >
                        {categoryList.map((item) => {
                          return (
                            <MenuItem value={item.label}>{item.label}</MenuItem>
                          );
                        })}
                      </Select>
                    </div>
                    <div className="filterBlock">
                      <h6 className="filterBlockTitle">{t("priceRange")}</h6>
                      <span>{priceValue}</span>
                      <Slider
                        getAriaLabel={() => "Temperature range"}
                        value={priceValue}
                        onChange={handlePriceChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                      />
                    </div>
                    <div className="filterBlock">
                      <h6 className="filterBlockTitle">{t("size")}</h6>
                      <div className="filterBlockRow">
                        {sizeList.map((item, i) => {
                          return (
                            <span
                              className={isSizeSelected ? "active" : ""}
                              onClick={() => handleSizeChange(item, i)}
                            >
                              {t(item.value)}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                    <div className="filterBlock">
                      <h6 className="filterBlockTitle">{t("color")}</h6>
                      <div className="colorCode">
                        {colorList.map((item, i) => {
                          return (
                            <span
                              style={{
                                background: item.code,
                                borderColor: item.code,
                              }}
                            ></span>
                          );
                        })}
                      </div>
                    </div>
                    <div className="saveFilter">
                      <Button className="blueBtn">{t("apply")}</Button>
                    </div>
                  </Drawer>
                ) : (
                  ""
                )}

                <form
                  className={
                    isSearchOpen
                      ? "search-container d-none d-lg-block active-search"
                      : "search-container d-none d-lg-block"
                  }
                >
                  <a className="search-container__btn">
                    <SearchOutlinedIcon />
                  </a>
                  <input
                    type="text"
                    id="search-bar"
                    placeholder="Search"
                    className="search-container__input"
                  />
                </form>
                <Button
                  className="dropBtn d-none d-lg-flex d-xl-none"
                  onClick={() => {
                    if (isSearchOpen) setSearchOpen(false);
                    else setSearchOpen(true);
                  }}
                >
                  <SearchOutlinedIcon />
                </Button>
                {/* <Button className="dropBtn">
                  <PersonOutline onClick={() => history.push("/userprofile")} />
                </Button> */}
                {/* <Button className="dropBtn">
                  <Badge badgeContent={3} color="primary">
                    <NotificationsNoneIcon onClick={handlenotification} />
                  </Badge>
                </Button> */}
            {/* `    {notification ? (
                  <Typography sx={{ p: 2 }}>
                    <div className="chatMainBox chatMainBox">
                      <div className="chatMainBox__inner">
                        <div className="chatMainBox__img">
                          <img
                            src={user}
                            alt=""
                            height={50}
                            width={50}
                            className="img-fluid"
                          />
                        </div>
                        <div className="chatMainBox__info">
                          <h4 className="chatMainBox__name">{t("chatbot")}</h4>
                          <p className="chatMainBox__text">
                            lorem ipsum dolor sir amet
                          </p>
                        </div>
                      </div>
                      <span className="chatMainBox__time">4pm</span>
                    </div>
                  </Typography>
                ) : null}` */}
                <Button
                  onClick={() => {
                    history.push("/logins");
                  }}
                  className="loginBtn d-none d-lg-block "
                >
                  {t("login")}
                </Button>
                <a
                  className="mainheader__btn mainheader__btn--cart"
                  onClick={() => {
                    if (
                      window.location.pathname === "/company" ||
                      window.location.pathname === "/product" ||
                      window.location.pathname === "/bookingcart" ||
                      window.location.pathname === "/bookingcartdetail"
                    )
                      history.push("/bookingcart");
                    else history.push("/cart");
                  }}
                >
                  <ShoppingCartOutlinedIcon />
                  {/* <span className="mainheader--cartNo">{cart.length}</span> */}
                </a>
                <div className="mainheader__btn mainheader__btn--cart">
                  <AccountBalanceWalletIcon
                    onClick={() => {
                      history.push("/wallet");
                    }}
                  />
                </div>

                <div className="mainheader__btn mainheader__btn--cart d-none d-lg-flex">
                  <AddLocationAltIcon
                    onClick={() => {
                      history.push("/maps");
                    }}
                  />
                </div>

                <Button
                  variant="contained"
                  className="solidBtn d-none d-lg-block"
                  onClick={() => {
                    history.push("/registers");
                  }}
                >
                  {t("startForFree")}
                </Button>
                {/* <LanguageSelect /> */}
                <div className="lanSelector">
                  {/* <LanguageSelect /> */}
                </div>
              </div>
            </div>
            <div className="col-12 d-flex d-lg-none">
              <div
                className={
                  subToggleMenu ? "mobileSearch activeSubMenu" : "mobileSearch "
                }
              >
                <form
                  className={
                    isSearchOpen
                      ? "search-container active-search"
                      : "search-container"
                  }
                >
                  <a className="search-container__btn">
                    <SearchOutlinedIcon />
                  </a>
                  <input
                    type="text"
                    id="search-bar"
                    placeholder="Search"
                    className="search-container__input"
                  />
                </form>
                {/* <div className="mainheader__btn mainheader__btn--cart d-flex d-lg-none">
                  <AddLocationAltIcon
                    onClick={() => {
                      history.push("/maps");
                    }}
                  />
                </div> */}
                <Button
                  className="dropBtn d-flex d-lg-none"
                  onClick={() => setDrawerOpen(true)}
                >
                  <FilterAltIcon />
                </Button>
                <a
                  className="mainheader__btn mainheader__btn--cart d-flex d-lg-none"
                  onClick={() => {
                    if (subToggleMenu) setSubToggleMenu(false);
                    else setSubToggleMenu(true);
                  }}
                >
                  <span className="openMenu">
                    <MenuIcon />
                  </span>
                  <span className="closeMenu">
                    <CloseOutlinedIcon />
                  </span>
                </a>
                <div className="responsiveSubMenu">
                  <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                    className="MainMenu"
                  >
                    <Tab
                      label={t("home")}
                      onClick={() => {
                        history.push("/dashboard");
                      }}
                    />
                    <Tab
                      label={t("shop")}
                      onClick={() => {
                        history.push("/dashboard");
                      }}
                    />
                    <Tab
                      label={t("categories")}
                      onClick={() => {
                        history.push("/categorylist");
                      }}
                    />
                    {/* <Tab
                      label={t("login")}
                      onClick={() => {
                        history.push("/logins");
                      }}
                    /> */}
                    <Tab
                      label={t("startForFree")}
                      onClick={() => {
                        history.push("/registers");
                      }}
                    />
                  </Tabs>
                  {/* <Button
                    
                    className="loginBtn"
                  >
                    {t("login")}
                  </Button>
                  <Button
                    variant="contained"
                    className="solidBtn"
                    
                  >
                    {t("startForFree")}
                </Button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
