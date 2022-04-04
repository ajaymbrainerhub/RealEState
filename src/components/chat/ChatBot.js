import React, { useEffect, useState } from "react";

//dependencies
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MenuIcon from "@mui/icons-material/Menu";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import SendIcon from "@mui/icons-material/Send";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import AddIcon from "@mui/icons-material/Add";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useDispatch } from "react-redux";
import {
  // Checkbox,
  Button,
  buttonUnstyledClasses,
  TabPanelUnstyled,
  TabsListUnstyled,
  TabsUnstyled,
  TabUnstyled,
  tabUnstyledClasses,
  TextField,
} from "@mui/material";
import Checkbox from '@mui/material/Checkbox';

import { useTranslation } from "react-i18next";
import { getChatValue } from "../../store/actions/chatActions";

//icon
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";

//css
import "../chat/chatbot.css";

//images
import user from "../../assets/shop/user.jpeg";
import user1 from "../../assets/shop/user1.jpg";
import user2 from "../../assets/shop/user2.png";
import user3 from "../../assets/shop/user3.jpg";
import FoxHomeImage from "../../assets/shop/foxHome.jpg";
import CafeJoe from "../../assets/shop/cafejoe.jpg";
import { useSelector } from "react-redux";

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
const Tabv = styled(TabUnstyled)`
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

export default function ChatBot() {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectMemeberlist, setSelectMemeberList] = useState([]);
  const [ischecked, setIschecked] = useState(false);
  const [createnewGroup, setCreateNewGroup] = useState(false);
  const [showanswer, setShowanswer] = useState(false);

  const dispatch = useDispatch();
  const { isChatOpen } = useSelector((state) => state.chatReducer);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    if (setAnchorEl) {
      dispatch(getChatValue(true));
    }
  };

  const products = [
    {
      image: FoxHomeImage,
      name: t("foxHome"),
      value: 0,
    },
    {
      image: CafeJoe,
      name: t("cafeJoe"),
      value: 1,
    },
    {
      image: FoxHomeImage,
      name: t("foxHome"),
      value: 0,
    },
    {
      image: CafeJoe,
      name: t("cafeJoe"),
      value: 1,
    },
    {
      image: FoxHomeImage,
      name: t("foxHome"),
      value: 0,
    },
    {
      image: CafeJoe,
      name: t("cafeJoe"),
      value: 1,
    },
    {
      image: FoxHomeImage,
      name: t("foxHome"),
      value: 0,
    },
    {
      image: CafeJoe,
      name: t("cafeJoe"),
      value: 1,
    },
  ];

  const chatmembers = [
    {
      id: 1,
      image: user3,
      name: t("kiara"),
    },
    {
      id: 2,
      image: user1,
      name: t("jarvis"),
    },
    {
      id: 3,
      image: user2,
      name: t("sandey"),
    },
    {
      id: 4,
      image: user3,
      name: t("piff"),
    },
    {
      id: 5,
      image: user1,
      name: t("kiara"),
    },
  ];

  const handleClose = () => {
    setAnchorEl(null);
    dispatch(getChatValue(false));
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [isAttachment, setAttachment] = useState(false);
  const [singleChat, setSingleChat] = useState(false);
  const [groupChat, setGroupChat] = useState(false);
  const [tabValue, setTabValue] = useState(0);

  const [newGroup, setNewGroup] = useState(false);

  useEffect(() => {
    console.log("isChatOpen", isChatOpen);
  });
  const footer = () => {
    return (
      <div className='scrollTamplate'>
      <div className="agentChatFooter agentChatFooter-Sticky">
        <div className="TypeingBlock">
          <input
            type="text"
            placeholder={t("typeMessege")}
            name="location"
            // onChange={'handleChange'}
            className="input-t"
          />
          <div className="TypeingBlockBtnBox">
            <button className="TypeingBlockBtn">
              <KeyboardVoiceIcon />
            </button>
            <button
              className="TypeingBlockBtn"
              onClick={() => {
                if (isAttachment) setAttachment(false);
                else setAttachment(true);
              }}
            >
              <AddCircleIcon />
            </button>
            <button className="TypeingBlockBtn TypeingBlockBtn--solid">
              <SendIcon />
            </button>
          </div>
        </div>

        {isAttachment ? (
          <div className="addMediaModule">
            <ul className="addMediaModule-List">
              <li className="addMediaModule-item">
                <span className="addMediaModule-itemIcon">
                  <CameraAltOutlinedIcon />
                </span>
                <h6 className="addMediaModule-itemName">{t("camera")}</h6>
              </li>
              <li className="addMediaModule-item">
                <span className="addMediaModule-itemIcon">
                  <PhotoOutlinedIcon />
                </span>
                <h6 className="addMediaModule-itemName">{t("photos")}</h6>
              </li>
              <li className="addMediaModule-item">
                <span className="addMediaModule-itemIcon">
                  <VideocamOutlinedIcon />
                </span>
                <h6 className="addMediaModule-itemName">{t("videos")}</h6>
              </li>
              <li className="addMediaModule-item">
                <span className="addMediaModule-itemIcon">
                  <ArticleOutlinedIcon />
                </span>
                <h6 className="addMediaModule-itemName">{t("files")}</h6>
              </li>
              <li className="addMediaModule-item">
                <span className="addMediaModule-itemIcon">
                  <LocationOnOutlinedIcon />
                </span>
                <h6 className="addMediaModule-itemName">{t("location")}</h6>
              </li>
              <li className="addMediaModule-item">
                <span className="addMediaModule-itemIcon">
                  <ContactPageOutlinedIcon />
                </span>
                <h6 className="addMediaModule-itemName">{t("contacts")}</h6>
              </li>
              <li className="addMediaModule-item">
                <span className="addMediaModule-itemIcon">
                  <KeyboardVoiceIcon />
                </span>
                <h6 className="addMediaModule-itemName">{t("audio")}</h6>
              </li>
              <li className="addMediaModule-item">
                <span className="addMediaModule-itemIcon">
                  <MoreHorizOutlinedIcon />
                </span>
                <h6 className="addMediaModule-itemName">{t("more")}</h6>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
      </div>
    );
  };

  // const header = () => {
  //   <div className="chatDetailsHead">
  //     <div className="chatDetailsHead-inner">
  //       <ArrowBackIcon />
  //       <div className="chatMainBox">
  //         <div className="chatMainBox__inner">
  //           <div className="chatMainBox__img">
  //             <img
  //               src={user}
  //               alt=""
  //               height={50}
  //               width={50}
  //               className="img-fluid"
  //             />
  //           </div>
  //           <div className="chatMainBox__info">
  //             <h4 className="chatMainBox__name">{t("chatbot")}</h4>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     <div className="text-right">
  //       <MoreVertIcon />
  //     </div>
  //   </div>;
  // };

  /**
   * render single chat list
   * @returns
   */
  const renderSingleChat = () => {
    return (
      <Typography className="chatDetailsBlock">
        <div className="chatDetailsHead">
          <div className="chatDetailsHead-inner">
            <ArrowBackIcon
              onClick={() => {
                setTabValue(0);
                setSingleChat(false);
              }}
            />
            <div className="chatMainBox">
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
                </div>
              </div>
            </div>
          </div>

          <div className="text-right">
            <MoreVertIcon />
          </div>
        </div>
        <div className="chatingList">
          <div className="chatingList-details">
            <h5 className="chatingList__date">17-jan-2021</h5>
            <div className="sendBlock">
              <div className="msgTime">
                <p className="msgTime__text">1min ago</p>
                <span className="msgTime__img">
                  <img
                    src={user}
                    alt=""
                    height={50}
                    width={50}
                    className="img-fluid"
                  />
                </span>
              </div>
              <div className="msgbox">{t("whatques")}?</div>
            </div>
            <div className="receiveBlock">
              <div className="msgTime">
                <span className="msgTime__img">
                  <img
                    src={user}
                    alt=""
                    height={50}
                    width={50}
                    className="img-fluid"
                  />
                </span>
                <p className="msgTime__text">{t("now")}</p>
              </div>
              <div className="msgbox">{t("heres")}</div>
            </div>
            <div className="chatAccordion">
              <div className="chatAccordion-Head">
                <span>{t("howto")}?</span>
                <AddIcon
                  onClick={() => {
                    !showanswer ? setShowanswer(true) : setShowanswer(false);
                  }}
                />
              </div>

              {showanswer ? (
                <div className="chatAccordion-body">
                  <p>{t("toplace")}</p>
                </div>
              ) : null}
            </div>
            <div className="chatAccordion">
              <div className="chatAccordion-Head">
                <span>{t("arrange")}</span>
                <AddIcon />
              </div>
            </div>
            <div className="chatAccordion">
              <div className="chatAccordion-Head">
                <span>{t("ipay")}?</span>
                <AddIcon />
              </div>
            </div>
            <div className="chatAccordion">
              <div className="chatAccordion-Head">
                <span>{t("spinvoice")}?</span>
                <AddIcon />
              </div>
            </div>
            <div className="chatAccordion">
              <div className="chatAccordion-Head">
                <span>{t("rorder")}?</span>
                <AddIcon />
              </div>
            </div>
          </div>
        </div>
        {footer()}
      </Typography>
    );
  };

  /**
   *
   * @returns render main chat
   */
  const renderMainChatBot = () => {
    return (
      <div>
        <div className="chatHead">
          <MenuIcon />
          <span className="text-center chatHead__title">{t("chatbot")}</span>
          <div className="text-right">
            <AddCircleIcon
              color="#00a9d6"
              onClick={() => {
                setNewGroup(true);
              }}
            />
            <SearchIcon />
          </div>
        </div>
        <TabsUnstyled
          defaultValue={tabValue ? tabValue : 0}
          className="centerTabs"
        >
          <TabsList>
            <Tabv onChange={() => setTabValue(0)}>{t("allmessages")}</Tabv>
            <Tabv onChange={() => setTabValue(1)}>{t("groupmessages")}</Tabv>
          </TabsList>
          <TabPanel value={0}>
            <div className="chatingList">
              <div
                className="chatMainBox chatMainBox--selected"
                onClick={() => setSingleChat(true)}
              >
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
              <div className="chatMainBox chatMainBox--active">
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
              <div className="chatMainBox">
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
              <div className="chatMainBox">
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
            </div>
            {footer()}
          </TabPanel>
          <TabPanel value={1}>
            <div className="chatingList">
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
              <div
                className="chatMainBox chatMainBox--selected"
                onClick={() => setGroupChat(true)}
              >
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
                    <h4 className="chatMainBox__name">Group1</h4>
                    <p className="chatMainBox__text">
                      lorem ipsum dolor sir amet
                    </p>
                  </div>
                </div>
                <span className="chatMainBox__time">4pm</span>
              </div>
              <div className="chatMainBox">
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
                    <h4 className="chatMainBox__name">Group2</h4>
                    <p className="chatMainBox__text">
                      lorem ipsum dolor sir amet
                    </p>
                  </div>
                </div>
                <span className="chatMainBox__time">4pm</span>
              </div>
            </div>
            {footer()}
          </TabPanel>
        </TabsUnstyled>
      </div>
    );
  };

  /**
   *
   * @returns render group chat list
   */
  const renderGroupchat = () => {
    return (
      <div>
        <div className="chatDetailsHead">
          <div className="chatDetailsHead-inner">
            <ArrowBackIcon
              onClick={() => {
                setTabValue(1);
                setGroupChat(false);
              }}
            />
            <div className="chatMainBox">
              <div className="chatMainBox__inner">
                <div className="chatMainBox__imgGroup">
                  <div className="chatMainBox__img">
                    <img
                      src={user}
                      alt=""
                      height={50}
                      width={50}
                      className="img-fluid"
                    />
                  </div>
                  <div className="chatMainBox__img">
                    <img
                      src={user}
                      alt=""
                      height={50}
                      width={50}
                      className="img-fluid"
                    />
                  </div>
                  <div className="chatMainBox__img">
                    <img
                      src={user}
                      alt=""
                      height={50}
                      width={50}
                      className="img-fluid"
                    />
                  </div>
                  <div className="chatMainBox__img">
                    <img
                      src={user}
                      alt=""
                      height={50}
                      width={50}
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="chatMainBox__info">
                  <h4 className="chatMainBox__name">{t("friendsgroup")}</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="text-right">
            <AddCircleIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Typography>
          <div className="chatingList">
            <div className="receiveBlock">
              <div className="msgTime">
                <span className="msgTime__img">
                  <img
                    src={user}
                    alt=""
                    height={50}
                    width={50}
                    className="img-fluid"
                  />
                </span>
                <p className="msgTime__text">5 min ago</p>
              </div>
              <div className="msgbox">{t("helpto")} !!</div>
              <div className="msgbox">{t("nike")}?</div>
            </div>
            <div className="sendBlock">
              <div className="msgTime">
                <span className="msgTime__img">
                  <img
                    src={user}
                    alt=""
                    height={50}
                    width={50}
                    className="img-fluid"
                  />
                </span>
                <p className="msgTime__text">1 min ago</p>
              </div>
              <div className="msgbox">{t("ithink")}</div>
            </div>
            <div className="receiveBlock">
              <div className="msgTime">
                <span className="msgTime__img">
                  <img
                    src={user}
                    alt=""
                    height={50}
                    width={50}
                    className="img-fluid"
                  />
                </span>
                <p className="msgTime__text">now</p>
              </div>
              <div className="msgbox">{t("gchoice")}</div>
            </div>
            <div>
              <ScrollingCarousel>
                <ul className="categoryList">
                  {products.length > 0 &&
                    products.map((item) => {
                      return (
                        <>
                          <li className="product-Module__list">
                            <div className="product-box">
                              <div
                                className="product-box__img"
                                style={{
                                  backgroundImage: `url(${item.image})`,
                                }}
                              >
                                <div className="product-box__likeBtn"></div>
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
                                <h5 className="product-box__name">
                                  3 {t("boxSimple")}{" "}
                                </h5>
                              </div>
                            </div>
                            <Button
                              variant="contained"
                              className="product-box__cartBtn"
                            >
                              <AddIcon />
                              {t("addtocart")}
                            </Button>
                          </li>
                        </>
                      );
                    })}
                </ul>
              </ScrollingCarousel>
            </div>
          </div>
          {footer()}
        </Typography>
      </div>
    );
  };

  const renderNewGroupchat = () => {
    const label = { inputProps: { "aria-label": "Checkbox demo" } };
    return (
      <>
        <Typography>
          <div className="chatDetailsHead">
            <div className="chatDetailsHead-inner">
              <ArrowBackIcon
                onClick={() => {
                  setNewGroup(false);
                }}
              />
              <div className="chatMainBox">
                <div className="chatMainBox__inner">
                  <div className="chatMainBox__info">
                    <h4 className="chatMainBox__name">{t("newg")}</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <MoreVertIcon />
            </div>
          </div>
          <div className="chatSearch">
            <div className="search-container">
              <a className="search-container__btn">
                <SearchOutlinedIcon />
              </a>
              <input
                type="text"
                id="search-bar"
                placeholder="Search by name @username or email"
                className="search-container__input"
              />
            </div>
          </div>
          <div className="addedUserBlock">
          
            <ScrollingCarousel>
           {console.log("selectMemeberlist" ,selectMemeberlist)}
              {selectMemeberlist.length > 0 &&
                selectMemeberlist.map((memeber) => {
                  return (
                    <div className="addedUser">
                      <img src={memeber.image} alt="" height={30} width={30} />
                      <span
                        onClick={() => {
                          //Remove group member
                          let removeValue = selectMemeberlist.filter(
                            (x) => x.id !== memeber.id
                          );
                          setSelectMemeberList(removeValue);
                        }}
                      >
                        <CloseIcon />
                      </span>
                    </div>
                  );
                })}
              {ischecked && selectMemeberlist.length > 0 ? (
                <div className="addedUserBlockBtn">
                  <Button
                    variant="contained"
                    className="product-box__cartBtn"
                    onClick={() => {
                      setSingleChat(false);
                      setGroupChat(false);
                      setNewGroup(false);
                      setCreateNewGroup(true);
                    }}
                  >
                    <ArrowForwardIcon />
                  </Button>
                </div>
              ) : null}
            </ScrollingCarousel>
          </div>
          <div className="chatingList">
            {chatmembers.length > 0 &&
              chatmembers.map((item) => {
                return (
                  <div className="chatMainBox chatMainBox">
                    <div className="chatMainBox__inner">
                      <div className="chatMainBox__img">
                        <img
                          src={item.image}
                          alt=""
                          height={50}
                          width={50}
                          className="img-fluid"
                        />
                      </div>
                      <div className="chatMainBox__info">
                        <h4 className="chatMainBox__name">{item.name}</h4>
                        <p className="chatMainBox__text">
                          lorem ipsum dolor sir amet
                        </p>
                      </div>
                    </div>
                    <span className="summaryCard-ListItemscheck">
                    <Checkbox
                      // className="circleCheckbox"
                        {...label}
                        inputProps={{ 'aria-label': 'controlled' }}
                        onClick={(e) => {
                          debugger
                          setIschecked(e.target.checked);
                          let temp = [];
                          if (e.target.checked) {
                            temp.push(item);
                            setSelectMemeberList([...selectMemeberlist, item]);
                          } else {
                            let removeValue = selectMemeberlist.filter(
                              (x) => x.id !== item.id
                            );
                            setSelectMemeberList(removeValue);
                         
                          }
                          
                        }}
                        
                      />
                    </span>
                  </div>
                );
              })}
          </div>
        </Typography>
      </>
    );
  };

  const renderCreateNewGroup = () => {
    return (
      <>
        <Typography>
          <div className="chatDetailsHead">
            <div className="chatDetailsHead-inner">
              <ArrowBackIcon
                onClick={() => {
                  setNewGroup(true);
                  setCreateNewGroup(false);
                }}
              />
              <div className="chatMainBox">
                <div className="chatMainBox__inner">
                  <div className="chatMainBox__info">
                    <h4 className="chatMainBox__name">{t("newgroup")}</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <MoreVertIcon />
            </div>
          </div>
          <div>
            <div className="createGroupBlock">
              <div className="chatMainBox__img">
                <img
                  src={user}
                  alt=""
                  height={50}
                  width={50}
                  className="img-fluid"
                />
              </div>
              <div className="createGroupBlock-name">
                <TextField
                  id="outlined-basic"
                  label="Group name"
                  variant="outlined"
                  placeholder="Group name"
                />
                <div className="createGroupBlock-nameText">{t("plesep")}</div>
              </div>
            </div>
            <div className="chatingmember">
              <div className="addedUserBlock">
                <ScrollingCarousel>
                  {selectMemeberlist.length > 0 &&
                    selectMemeberlist.map((memeber) => {
                      return (
                        <div className="addedUser">
                          <img
                            src={memeber.image}
                            alt=""
                            height={30}
                            width={30}
                          />
                          <span
                            onClick={() => {
                              let removeValue = selectMemeberlist.filter(
                                (x) => x.id !== memeber.id
                              );
                              setSelectMemeberList(removeValue);
                            }}
                          >
                            <CloseIcon />
                          </span>
                        </div>
                      );
                    })}
                </ScrollingCarousel>
              </div>
              <div className="createGroupBtn">
                <Button variant="contained" className="product-box__cartBtn">
                  {t("createn")}
                </Button>
              </div>
            </div>
          </div>
        </Typography>
      </>
    );
  };
  return (
    <div>
      {/* {!isChatOpen ?  <div onClick={handleClick} className="mainChat">
        
        <ChatIcon aria-describedby={id} variant="contained"></ChatIcon>
      </div>:""}
     */}

      <Popover
        id={id}
        open={open || isChatOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 200, left: 400 }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        className="chatModel"
      >
        <Typography sx={{ p: 2 }}>
          {/*** Main Popup */}
          {!singleChat && !groupChat && !newGroup && !createnewGroup
            ? renderMainChatBot()
            : ""}

          {tabValue === 0 && singleChat ? renderSingleChat() : ""}
          {tabValue === 1 && groupChat ? renderGroupchat() : ""}
          {newGroup ? renderNewGroupchat() : ""}
          {createnewGroup ? renderCreateNewGroup() : ""}
        </Typography>
      </Popover>
    </div>
  );
}
