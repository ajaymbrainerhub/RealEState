import React, { useState, useEffect } from 'react';
import { ReactComponent as Back } from '../../images/back.svg';
import '../secondnavbar/secondNavbar.css';
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

function SecondNavbar() {
  const { t } = useTranslation();
  const location = useLocation();
  const [isShowMenu, setIsShowMenu] = useState(false);

  useEffect(() => {
    if (location.pathname.includes("buy/product")) {
      setIsShowMenu(true)
    } else {
      setIsShowMenu(false)
    }
  }, [location]);

  return (
    <>
    {isShowMenu && (
    <div className='second-navbar  '>
      
        <nav className='container'>
          <a className='back ' onClick={() => (window.location = '/')}>
          <Back style={{ fill: 'black' }} /> {t("back")}
          </a>
          <a className='sNav active' href="#top">{t("propertyDeatils")}</a>
          <a className='sNav' href="#top">{t("contact")}</a>
          <a className='sNav' href="#middle">{t("neighborhoodDetails")}</a>
          <a className='sNav' href="#middle">{t("pricingAndTranscations")}</a>
          <a className='sNav' href="#end">{t("reviews")}</a>

          {/* <button className='btn-1'>Property Deatils</button> */}
          {/* <button className='btn-1'>Contact</button> */}
          {/* <button className='btn-1'>Neighborhood Details</button> */}
          {/* <button className='btn-1'>Pricing and transcations</button> */}
          {/* <button className='btn-1'>Reviews</button> */}
        </nav>
      
    </div>
    )}
    </>
  );
}

export default SecondNavbar;
