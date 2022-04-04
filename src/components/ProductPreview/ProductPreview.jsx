import React,{useEffect,useState} from 'react';
import '../ProductPreview/ProductPreview.css';
import { useHistory } from 'react-router';
import { ReactComponent as Bath } from '../../assets/imgs/bath.svg';
import { ReactComponent as Bed } from '../../assets/imgs/bed.svg';
import { ReactComponent as Location } from '../../assets/imgs/location.svg';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";

const Input = styled('input')({
  display: 'none',
});

function ProductPreview({ product }) {
  const { t } = useTranslation();
  const history = useHistory();
  const mapData  = useSelector((state) => state.mapReducer);

  useEffect(() => {
  if(Object.keys(mapData.maps).length !== 0){
    history.push(`/buy/product/${mapData.maps.id}`);
  }
  }, [mapData])

  return (
    <>
      <div
        className='product-preview col'
        onClick={() => {
               history.push(`/buy/product/${product.id}`);
         
        }}
      >
        <div className='product-preview-status'>
          <Chip label={t("projectTag")} />
          <Input id="icon-button-file" type="button" />
          <IconButton color="primary" aria-label="upload picture" component="span" className='likeBtn'>
            <FavoriteBorderOutlinedIcon />
          </IconButton>
        </div>
        {/* <img className='img' src={imgs[product.id]} alt=''/> */}
        <img src={require(`../../assets/imgs/houses/${product.Image}`)}  className='img' alt='' />
        <div className='productDetails'>
          <div className='productDetailsHead flex'>
            <div className='price'>{product.price}$</div>
            <div className='iconitems'>
              <div className='iconlist'>
                <Bath />
                <span>{product.bedrooms}</span>
              </div>
              <div className='iconlist'>
                <Bed />
                <span>{product.bedrooms}</span>
              </div>
            </div>
          </div>
          <div className='productTitle'>{t("kearnyPassaic")}</div>
          <div className='location'>
            <Location />
            <span>{product.location}</span>
          </div>
          <div className='footer flex'>
            <div className='distance'>{product.distance} {t("meters")} </div>
            <div className='type'>{product.type}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPreview;
