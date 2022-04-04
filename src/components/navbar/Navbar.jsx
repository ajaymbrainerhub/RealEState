import React, { useEffect, useState } from 'react';
import { Button } from '../button/Button';
import { Link } from 'react-router-dom';
import '../navbar/Navbar.css';
import { useDispatch } from 'react-redux';
import { loadProducts } from '../../store/actions/productActions';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MainLogo from '../../assets/imgs/mainLogo.png';
import { ReactComponent as Cross } from '../../assets/imgs/cross.svg';
import { ReactComponent as MenuIcon } from '../../assets/imgs/nav menu.svg';
import { useLocation } from "react-router-dom";
import { removeMapData } from '../../store/actions/mapActions';
import { useTranslation } from "react-i18next";
import LanguageSelect from "../Language/LanguageSelect";
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import Typography from "@mui/material/Typography";
import user from "../../assets/shop/user.jpeg";

function Navbar() {
  const { t } = useTranslation();
  const [click, setClick] = useState(false);
  const [notification, setNotification] = useState(false);
  // const [dropdown] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    dispatch(removeMapData({}))

    setClick(false)
  };
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  useEffect(() => {
    dispatch(loadProducts()); // eslint-disable-next-line
  }, []);

  const handlenotification = () => {
    if (!notification) {
      setNotification(true);
    } else {
      setNotification(false);
    }
  };

  return (
    <div className='mainHeader'>
      <nav className='navbar'>
        <div className='mainHeader_Menu'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={MainLogo} className="img-fluid" alt='' />
          </Link>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className={splitLocation[1] === "" ? "nav-links active" : "nav-links"} onClick={closeMobileMenu}>
                {/* Buy */}
                {t("buy")}
              </Link>
            </li>
            {/* <li className='nav-item'>
              <Link to='/sell' className='nav-links' onClick={closeMobileMenu}>
                Sell
              </Link>
            </li> */}
            <li className='nav-item'>
              <Link to='/rent' className={splitLocation[1] === "rent" ? "nav-links active" : "nav-links"} onClick={closeMobileMenu}>
                {/* Rent */}
                {t("rent")}
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/dashboard' className={splitLocation[1] === "dashboard" ? "nav-links active" : "nav-links"} onClick={closeMobileMenu}>
                {/* Shop */}
                {t("shop")}
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/menu' className={splitLocation[1] === "menu" ? "nav-links active" : "nav-links"} onClick={closeMobileMenu}>
                {t("menu")}
              </Link>
            </li>
            {/* <li className='nav-item'>
             <Link to='/settings' className='nav-links' onClick={closeMobileMenu}>
             Settings
             </Link>
          </li> */}
            {/* <li className='nav-item'>
             <Link to='/registerBusiness' className='nav-links' onClick={closeMobileMenu}>
             RegisterBusiness
             </Link>
          </li>
          <li className='nav-item'>
            <Link to='/userProfile' className='nav-links' onClick={closeMobileMenu}>
            UserProfile
            </Link>
          </li> */}
            {/* <li className='nav-item'>
            <Link to='/user' className='nav-links' onClick={closeMobileMenu}>
            User
            </Link>
          </li> */}
            <li className='nav-links-mobile'>
              <Link
                to='/StartForFree'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                {/* Login */}
                {t("login")}
              </Link>
            </li>
            <li className='nav-links-mobile'>
              <Link
                to='/StartForFree'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                {t("startForFree")}
              </Link>
            </li>
          </ul>
        </div>
        <div className='rightSideBtns'>
          <ul>
            {/* <li>
              <Link to='/' className='iconMenu'>
                <PersonOutlinedIcon />
              </Link>
            </li> */}
            {/* <li>
              <Link to='/' className='iconMenu'>
                <NotificationsNoneOutlinedIcon />
              </Link>
            </li> */}
            {notification ? (
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
            ) : null}
            <Badge badgeContent={3} color="primary">
              <NotificationsNoneOutlinedIcon onClick={handlenotification} />
            </Badge>
            <li>
              <Link to='/' className='iconMenu iconMenu--btn newAdd'>
                <FavoriteBorderOutlinedIcon />
              </Link>
            </li>
            {/* <li>
              <Link to='/cart' className='iconMenu iconMenu--btn newAdd'>
                <ShoppingCartOutlinedIcon />
              </Link>
            </li> */}
          </ul>
          <div className='menu-icon' onClick={handleClick}>
            <div className={click ? 'navIcons close' : 'navIcons open'}>
              <span className='closeIcon'><Cross /></span>
              <span className='openIcon'><MenuIcon /></span>
            </div>
          </div>
          <Button />
          <LanguageSelect />
        </div>

      </nav>
    </div>
  );
}

export default Navbar;