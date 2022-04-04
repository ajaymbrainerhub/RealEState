import React,{useEffect} from "react";
import { styled } from "@mui/material/styles";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/material/Tab";
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import Gift from "../../../../assets/shop/gift.jpg";
import Suit from "../../../../assets/shop/suit.jpg";
import Shoes from "../../../../assets/shop/shoes.jpg";
import Shoes1 from "../../../../assets/shop/shoes1.jpg";
import Art from "../../../../assets/shop/art.jpg";
import Art1 from "../../../../assets/shop/art1.jpg";
import Music from "../../../../assets/shop/music.jpg";
import Music1 from "../../../../assets/shop/music1.jpg";
import Photography from "../../../../assets/shop/photography.jpg";
import Rating from "@mui/material/Rating";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import { TextField, Card, CardContent, Button } from "@material-ui/core";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import "../vendor/vandorsDetails.css";
import { useTranslation } from "react-i18next";

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#80BFFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  800: "#004C99",
  900: "#003A75",
};
const ratingTimes = 5;

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &.${buttonUnstyledClasses.focusVisible} {
    color: #fff;
    outline: none;
    background-color: ${blue[200]};
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${blue[50]};
    color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: ${blue[500]};
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

export default function VandorsDetails() {
  const { t } = useTranslation();
  const [value, setValue] = React.useState(0);
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,

    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
  }));

  useEffect(() => {
  console.log("callll")
  }, [])
  
  const ratingElement = [
    {
      star: (
        <Rating
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        ></Rating>
      ),
      progress: <BorderLinearProgress variant="determinate" value={20} />,
    },
    {
      star: <Rating></Rating>,
      progress: <BorderLinearProgress variant="determinate" value={20} />,
    },
  ];

  const vandordetails = [
    {
      image: Gift,
      name: "Fox Home",
      price: "15$",
      type: "all",
    },
    {
      image: Suit,
      name: "Pierrer Cardin",
      price: "600$",
      type: "all",
    },
    {
      image: Shoes,
      name: "Fox Home",
      price: "15$",
      type: "all",
    },
    {
      image: Shoes1,
      name: "Pierrer Cardin",
      price: "600$",
      type: "all",
    },
    {
      image: Art,
      name: "Pierrer Cardin",
      price: "600$",
      type: "art",
    },
    {
      image: Art1,
      name: "Pierrer Cardin",
      price: "600$",
      type: "art",
    },

    {
      image: Photography,
      name: "Pierrer Cardin",
      price: "600$",
      type: "photography",
    },

    {
      image: Music,
      name: "Pierrer Cardin",
      price: "600$",
      type: "music",
    },

    {
      image: Music1,
      name: "Pierrer Cardin",
      price: "600$",
      type: "music",
    },
  ];

  const renderRatings = (index) => {
    return (
      <div className="reviewList">
        <Rating
          value={value}
          onChange={(event, newValue) => {
            console.log("call",index)
            setValue(newValue);
          }}
        ></Rating>
        <BorderLinearProgress id={index} variant="determinate" value={value * 20} />
      </div>
    );
  };

  return (
    <>
     <div className='scrollTamplate'>
      {/* { <Header /> } */}
      <div className="container">
        <div className="vendorTemplate">
            <div className="vendorbanner" style={{
                backgroundImage: "url(" + Art + ")",
              }}>
                <div className="row align-items-center">
                    <div className="col-lg-8">
                        <div className="vendorbanner-brand">
                            <span className="vendorbanner-brandImg">
                                <img src={Gift} className="img-fluid" alt=""/>
                            </span>
                            <div className="vendorbanner-brandInfo">
                                <h6 className="vendorbanner-brandTitle">{t("footLocker")}</h6>
                                <p className="vendorbanner-brandSubtitle">{t("shoesStore")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <Button className="blueBtn">{t("follow")}</Button>
                    </div>
                </div>
            </div>
            <div className="vendorContent">
                <h6 className="vendorContent-title">{t("dESCRIPTION")}</h6>
                <p className="vendorContent-text">
                {t("fusceFinibusImperdietNisiAliquetFeuguat.DonecTempusVestibulumMaximusExVitaeTristique.CartStateViverraMassaInEstTempus,UtPellentesqueLocusAndAn.")}
                </p>
            </div>

             { <TabsUnstyled defaultValue={0}>
            <TabsList>
                <Tab>{t("topRated")}</Tab>
                <Tab>{t("allCollections")}</Tab>
            </TabsList>
            <TabPanel value={0}>
                <ul className="product-Module">
                {vandordetails.length > 0 &&
                    vandordetails.map((item, index) => {
                    return (
                        <>
                        {" "}
                        <li className="product-Module__list" key={index}>
                            <div className="product-box">
                            <div
                                className="product-box__img"
                                style={{ backgroundImage: `url(${item.image})` }}
                            >
                                <div className="product-box__likeBtn">
                                <FavoriteBorderOutlinedIcon
                                    // onClick={() => handleFavChange()}
                                />
                                </div>
                                <div className="product-box__discount">
                                <span className="product-box__off">45%</span>
                                </div>
                            </div>
                            <div className="product-box__info">
                                <div className="product-box__infoTop">
                                <h6 className="product-box__brand">
                                    {item.name}
                                </h6>
                                <span className="product-box__price">
                                    {item.price}
                                </span>
                                </div>
                                <h5 className="product-box__name">{t("3 boxSimple")}</h5>
                            </div>
                            </div>
                        </li>
                        </>
                    );
                    })}
                </ul>
            </TabPanel>
            <TabPanel value={1}>
                <ul className="product-Module">
                {vandordetails.length > 0 &&
                    vandordetails.map((item, i) => {
                    return (
                        <>
                        {" "}
                        <li className="product-Module__list" key={i}>
                            <div className="product-box">
                            <div
                                className="product-box__img"
                                style={{ backgroundImage: `url(${item.image})` }}
                            >
                                <div className="product-box__likeBtn">
                                <FavoriteBorderOutlinedIcon
                                    // onClick={() => handleFavChange()}
                                />
                                </div>
                                <div className="product-box__discount">
                                <span className="product-box__off">45%</span>
                                </div>
                            </div>
                            <div className="product-box__info">
                                <div className="product-box__infoTop">
                                <h6 className="product-box__brand">
                                    {item.name}
                                </h6>
                                </div>
                                <h5 className="product-box__name">{t("3 boxSimple")}</h5>
                            </div>
                            </div>
                        </li>
                        </>
                    );
                    })}
                </ul>
            </TabPanel>
            <div className="reviewCard">
                <div className="reviewCard-head">
                    <h1 className="reviewCard-subtotel">8.0</h1>
                    <p className="reviewCard-totel">{t("outOf10")}</p>
                </div>
                <h3 className="reviewCard-Title">{t("reviews")}</h3>
                {[...Array(ratingTimes)].map((item,index) => renderRatings(index))}
            </div>
            <div className="ContactUsModule">
                <h6 className="ContactUsModule-title">{t("contactWithUs")}</h6>
                <TextField
                    required
                    id="name"
                    className="inputStyle"
                    name="name"
                    label="Your name"
                    fullWidth
                    margin="dense"
                />
                <TextField
                    required
                    id="email"
                    name="email"
                    label={t("emailAddress")}
                    type="email"
                    className="inputStyle"
                    fullWidth
                    margin="dense"
                />
                <TextField
                    required
                    id="Phone"
                    name="Phone"
                    label="Phone"
                    type="Phone"
                    className="inputStyle"
                    fullWidth
                    margin="dense"
                />
                <div className="formBtn">
                    <Button className="blueBtn">{t("send")}</Button>
                </div>
            </div>
            
            </TabsUnstyled> } 
        </div>
      </div>
      </div>
    </>
  );
}

