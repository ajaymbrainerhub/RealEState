import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Buy from "./components/pages/buy";
import Rent from "./components/pages/rent";
import Shop from "./components/pages/shop";
import Dashboard from "./components/pages/shop/dashboard/Dashboard";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import UserDetails from "./components/UserDetails/UserDetails";
import Sell from "./components/pages/sell";
import Head from "./components/head/Head";
import Settings from "./components/Settings/Settings";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Menu from "./components/Menu/Menu";
import RegisterBusiness from "./components/registerBusiness/registerBusiness";
import UserProfile from "./components/UserProfile/UserProfile";
import SecondNavbar from "./components/secondnavbar/secondNavbar";
import User from "./components/User/User";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Map from "./components/map/map";
import { useSelector } from "react-redux";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import VendorDetails from "../src/components/pages/shop/vendor/VendorDetails";
import CategoryDetails from "../src/components/category/CategoryDetails";
import Agent from "./components/agent/agent";
import Chat from "./components/agent/Chat";
import BookingAppoimentSuccess from "./components/appoiment/BookingAppoimentSuccess";
import EditAppoimentSuccess from "./components/appoiment/EditAppoimentSuccess";
import Appointment from "./components/appoiment/Appointment";
import EditAppointment from "./components/appoiment/EditAppointment";
import { useTranslation } from "react-i18next";
import VendorsDetail from "../src/components/vendor/VendorDetails";
import Company from "./components/Company/Company";
import Product from "./components/Product/Product";
import CategoryList from "../src/components/category/CategoryList";
import CategoryProduct from "../src/components/category/CategoryProduct";
import Cart from "../src/components/cart/Cart";
import Checkout from "../src/components/cart/Checkout";
import LoginB from "../src/components/login/login/login/Login";
import RegisterB from "./components/login/register/Register";
import ChatBot from "./components/chat/ChatBot";
import Wallets from "../src/components/wallets/Wallets";
import Payment from "./components/wallets/Payment";
import LoadMoney from "./components/wallets/LoadMoney";
import CreaditCard from "./components/wallets/CreaditCard";
import Shops from "./components/shop/Shops";
import PaymentHistory from "./components/wallets/PaymentHistory";
import PaymentCardHistory from "./components/wallets/PaymentCardHistory";
import ManageDashboard from "./components/ManageDashboard/ManageDashboard";
import Maps from "./components/location/Map";
import AllVendor from "./components/vendor/AllVendor";
import BookingCart from "./components/Booking/BookingCart";
import BookingCartDetail from "./components/Booking/BookingCartDetail";
import BookingPayment from "./components/Booking/BookingPayment";

function App() {
  const [click, setClick] = useState(false);
  const OpenSidebar = () => setClick(!click);
  const { isHomePage } = useSelector((state) => state.settingReducer);

  const { t } = useTranslation();
  return (
    <>
      <div className={`App ${isHomePage ? "" : "hidesubmenu"}`}>
        <Router>
          <Navbar />
          {isHomePage && <Head />}
          {!isHomePage && <SecondNavbar test="aasdfdsf" />}
          <div className={click ? "flex activeTabs" : "flex"}>
            <div className="left">
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/logins" component={LoginB} />
                <Route path="/registers" component={RegisterB} />
                <Route path="/startForFree" component={Register} />
                <Route path="/menu" component={Menu} />
                <Route component={UserDetails} path="/buy/user/:id" />
                <Route component={ProductDetails} path="/buy/product/:id" />
                <Route path="/" exact component={Buy} />
                <Route path="/rent" component={Rent} />
                <Route path="/shop" component={Shop} />
                <Route path="/sell" component={Sell} />
                <Route path="/settings" component={Settings} />
                <Route path="/registerBusiness" component={RegisterBusiness} />
                <Route path="/userProfile" component={UserProfile} />
                <Route path="/user" component={User} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/vandordetail" component={VendorsDetail} />
                <Route path="/vendorDetails" component={VendorDetails} />
                <Route path="/categoryDetails" component={CategoryDetails} />
                <Route path="/product" component={Product} />
                <Route path="/company" component={Company} />
                <Route path="/categorylist" component={CategoryList} />
                <Route path="/categoryproduct" component={CategoryProduct} />
                <Route path="/agent" component={Agent} />
                <Route path="/chat" component={Chat} />
                <Route path="/bookingcartdetail" component={BookingCartDetail} />
                <Route path="/bookingcart" component={BookingCart} />
                <Route path="/successedit" component={EditAppoimentSuccess} />
                <Route path="/successbooking"component={BookingAppoimentSuccess} />
                <Route path="/bookingpayment" component={BookingPayment} />
                <Route path="/bookingappointment" component={Appointment} />
                <Route path="/editAppointment" component={EditAppointment} />
                <Route path="/cart" component={Cart} />
                <Route path="/chatboat" component={ChatBot} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/wallet" component={Wallets} />
                <Route path="/payment" component={Payment} />
                <Route path="/loadmoney" component={LoadMoney} />
                <Route path="/creaditcard" component={CreaditCard} />
                <Route path="/shops" component={Shops} />
                <Route path="/paymenthistory" component={PaymentHistory} />
                <Route path="/paymentcardhistory" component={PaymentCardHistory}/>
                <Route path="/managedashboard" component={ManageDashboard} />
                <Route path="/maps" component={Maps} />
                <Route path="/allvandors" component={AllVendor} />
              </Switch>
            </div>
            <div className="mobilePageTabs">
              <a onClick={OpenSidebar} className="MapTab">
                <SellOutlinedIcon /> {t("mapView")}
              </a>
              <a onClick={OpenSidebar} className="ListTab">
                <SellOutlinedIcon /> {t("listView")}
              </a>
              <a>
                <SellOutlinedIcon /> {t("saveSearch")}
              </a>
            </div>
            <div className="right">
              <Map />
            </div>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
