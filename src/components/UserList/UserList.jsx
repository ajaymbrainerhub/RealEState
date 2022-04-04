import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img from '../../assets/imgs/user.jpeg';
import user2 from '../../assets/imgs/user2.jpg';
import { useHistory } from 'react-router';
import './UserList.css';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Chip from '@mui/material/Chip';
import { useSelector } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useTranslation } from "react-i18next";

function UserList({ users }) {
  const { t } = useTranslation();
  const history = useHistory();
  const  data  = useSelector((state) => state.mapReducer)
  console.log("dataaa",data.maps)
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

  return (
    <div className='sidebarMainList'>
      {/* <h3 className='sidebarTitle'>Agents in this area</h3> */}
      <Tabs>
        <TabList>
            <Tab> {t("agent")}</Tab>
            <Tab>{t("advocate")}</Tab>
            <Tab>{t("fadyinancialAdvisor")} </Tab>
        </TabList>
        <TabPanel>
          <div className='user-list'>
            <Carousel responsive={responsive}>
              {users.map((user) => {
                return (
                  <div onClick={() => history.push("/user")}>
                    <StyledBadge
                      overlap="circular"
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                      variant="dot"
                    >
                      <img
                        src={img}
                        alt='myimg'
                        className='imgg'
                        key={user.id}
                        // onClick={() => history.push(`/buy/user/${user.id}`)}
                      />
                    </StyledBadge>
                    <span className='user-listName'>{t("mikiLto")}</span>
                  </div>

                );
              })}
            </Carousel>
          </div>
        </TabPanel>
        <TabPanel>
          <div className='user-list'>
            <Carousel responsive={responsive}>
              {users.map((user) => {
                return (
                  <div onClick={() => history.push("/user")}>
                    <StyledBadge
                      overlap="circular"
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                      variant="dot"
                    >
                      <img
                        src={user2}
                        alt='myimg'
                        className='imgg'
                        key={user.id}
                        // onClick={() => history.push(`/buy/user/${user.id}`)}
                      />
                    </StyledBadge>
                    <span className='user-listName'>{t("mikiLto")}</span>
                  </div>

                );
              })}
            </Carousel>
          </div>
        </TabPanel>
        <TabPanel>
          <div className='user-list'>
            <Carousel responsive={responsive}>
              {users.map((user) => {
                return (
                  <div onClick={() => history.push("/user")}>
                    <StyledBadge
                      overlap="circular"
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                      variant="dot"
                    >
                      <img
                        src={img}
                        alt='myimg'
                        className='imgg'
                        key={user.id}
                        // onClick={() => history.push(`/buy/user/${user.id}`)}
                      />
                    </StyledBadge>
                    <span className='user-listName'>{t("mikiLto")}</span>
                  </div>

                );
              })}
            </Carousel>
          </div>
        </TabPanel>
      </Tabs>

      <div>
          <div className='sidebarHeading'>
          <h2 className='sidebarTitle'>{t("apartmentsInArea")}</h2>
            {/* <h2 className='sidebarText'>96 apartments to buy</h2> */}
            <Chip label={t("sortingPopularty")} />
          </div>
          
        </div>
    </div>
  );
}

export default UserList;
