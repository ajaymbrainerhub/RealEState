import React, { useState } from "react";

//dependencies
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TuneIcon from "@material-ui/icons/Tune";
import RoomIcon from "@material-ui/icons/Room";
import { CartState } from "../../context/Context";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Slider from "@mui/material/Slider";
import { useTranslation } from "react-i18next";

//icons
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import PersonOutline from "@material-ui/icons/PersonOutline";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import Clear from "@material-ui/icons/Clear";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

//componenets
import "../header/header.css";
import { ListItemIcon, MenuItem, Select } from "@material-ui/core";

// import Dashboard from '../Dashborad/Dashboard';

const Header = () => {
  const { t } = useTranslation();
  const {
    state: { cart },
  } = CartState();
  const navigate = useNavigate();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [category, setCategory] = useState("");
  const [priceValue, setPriceValue] = useState([20, 37]);
  const [isSizeSelected, sizeSelected] = useState(false);
  const [value, setValue] = useState(0);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      navigate("/home");
    }
    if (newValue === 1) {
      navigate("/");
    }
    if (newValue === 2) {
      navigate("/");
    }
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handlePriceChange = (event, newValue) => {
    setPriceValue(newValue);
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
            <div className="col-4">
              <div className="headerLeft">
                <div className="headerMainLogo">
                  <a className="mainheader__btnLogo">B24Chat</a>
                </div>
                <Tabs
                  value={value}
                  indicatorColor="primary"
                  textColor="primary"
                  onChange={handleChange}
                  aria-label="disabled tabs example"
                  className="MainMenu"
                >
                  <Tab label="Home" />
                  <Tab label="Shop" />
                  <Tab label="Cartegories" />
                </Tabs>
              </div>
            </div>
            <div className="col-8 text-right">
              <div className="headerRight">
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
                <Button
                  className="dropBtn d-flex d-lg-none"
                  onClick={() => {
                    if (isSearchOpen) setSearchOpen(false);
                    else setSearchOpen(true);
                  }}
                >
                  <SearchOutlinedIcon />
                </Button>
                <Button className="dropBtn">
                  <PersonOutline onClick={() => navigate("userprofile")} />
                </Button>
                <Button className="dropBtn">
                  <NotificationsNoneIcon />
                </Button>
                <Button
                  onClick={() => {
                    navigate("/login");
                  }}
                  className="loginBtn d-none d-lg-block "
                >
                  Login
                </Button>
                <a
                  className="mainheader__btn mainheader__btn--cart"
                  onClick={() => {
                    navigate("/cart");
                  }}
                >
                  <ShoppingCartOutlinedIcon />
                  <span className="mainheader--cartNo">{cart.length}</span>
                </a>
                <a className="mainheader__btn mainheader__btn--cart">
                  <AccountBalanceWalletIcon
                    onClick={() => {
                      navigate("/wallet");
                    }}
                  />
                </a>
                <a
                  className="mainheader__btn mainheader__btn--toggle d-flex d-lg-none"
                  onClick={() => {
                    if (isMenuOpen) setMenuOpen(false);
                    else setMenuOpen(true);
                  }}
                >
                  <MenuIcon />
                </a>
                <Button
                  onClick={() => setDrawerOpen(true)}
                  variant="contained"
                  className="solidBtn d-none d-lg-block"
                >
                  {t("startForFree")}
                </Button>
              </div>
            </div>
          </div>
          {isDrawerOpen ? (
            <Drawer
              anchor="right"
              className="SideDrawer"
              open={isDrawerOpen ? true : false}
              onClose={() => setDrawerOpen(false)}
            >
              <div className="SideDrawerHead">
                <h6 className="SideDrawerTitle">Filters</h6>
                <span onClick={() => setDrawerOpen(false)} className="closeBtn">
                  {" "}
                  <Clear />
                </span>
              </div>
              <div className="filterBlock">
                <h6 className="filterBlockTitle">Category</h6>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="category"
                  className="selectCategory"
                  onChange={handleCategoryChange}
                >
                  {categoryList.map((item) => {
                    return <MenuItem value={item.label}>{item.label}</MenuItem>;
                  })}
                </Select>
              </div>

              <div className="filterBlock">
                <h6 className="filterBlockTitle">Price Range</h6>
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
                <h6 className="filterBlockTitle">Size</h6>
                <div className="filterBlockRow">
                  {sizeList.map((item, i) => {
                    return (
                      <span
                        className={isSizeSelected ? "active" : ""}
                        onClick={() => handleSizeChange(item, i)}
                      >
                        {item.value}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="filterBlock">
                <h6 className="filterBlockTitle">Color</h6>
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
                <Button className="blueBtn">Apply</Button>
              </div>
            </Drawer>
          ) : (
            ""
          )}

          {/* <div className="mainheader__filter">
                        <form className="search-container">
                            <a className="search-container__btn"><SearchOutlinedIcon /></a>
                            <input type="text" id="search-bar" placeholder="Search" className="search-container__input" />
                        </form>
                        <div className="mainheader__filterBtn">
                            <a ><RoomIcon /></a>
                            <a ><TuneIcon /></a>
                        </div>
                    </div> */}
        </div>
      </div>
      {/* <Dashboard></Dashboard> */}
    </div>
  );
};

export default Header;
