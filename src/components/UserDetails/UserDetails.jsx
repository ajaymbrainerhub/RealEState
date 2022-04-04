import React, { useEffect } from 'react';
import './UserDetails.css';
import img from '../../assets/imgs/user.jpeg';
import { ReactComponent as Zoom } from '../../assets/imgs/video.svg';
import { ReactComponent as Call } from '../../assets/imgs/phone-call.svg';
import { ReactComponent as Chat } from '../../assets/imgs/messenger.svg';
import { ReactComponent as Star } from '../../assets/imgs/star.svg';
import { ReactComponent as StarOutline } from '../../assets/imgs/star_outline.svg';
import { loadUser } from '../../store/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';

function UserDetails(props) {
  const { id } = props.match.params;
  const user = useSelector((state) => state.userReducer.currUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser(id)); // eslint-disable-next-line
  }, []);

  return user ? (
    <div className='scrollTamplate'>
      <div className='user-details col space-between'>
        <div className=' flex'>
          <img src={img} alt='my img' className='img' />
          <div className='info'>
            <div>
              <div className='bag'>
                <div >
                  <h2 className='uname' >{user.name}</h2>
                </div>
                <div className='icons flex'>
                  <div className='icon-container col'>
                    <Chat />
                    <span>chat</span>
                  </div>
                  <div className='icon-container col'>
                    <Call />
                    <span>call</span>
                  </div>
                  <div className='icon-container col'>
                    <Zoom />
                    <span>zoom</span>
                  </div>
                </div>
              </div>
              <p>{user.desc}</p>
            </div>
          </div>
        </div>

        <div className='col'>
          <div className='rate'>
            <h2>{user.rate}</h2>
            <h4>out of 10</h4>
          </div>
          <div className='col space-between ratSubTitle'>
            <h2>Reviews </h2>
            <span>Write a Review <HelpCenterOutlinedIcon /></span>

          </div>
          {[...Array(5)].map((e, i) => {
            return (
              <div className='review flex'>
                {[...Array(5 - i)].map(() => {
                  return <Star key={i} />;
                })}
                {[...Array(i)].map(() => {
                  return <StarOutline key={i} />;
                })}
                <div className='container-progress flex'>
                  <div className='progress'></div>
                </div>
              </div>
            );
          })}
          <div className='count bold'>{user.ratingCount} RATING</div>
          <div className='contact flex space-between'>
            <div className='name'> <strong>{user.name}</strong>  Contact</div>
            <button className='btn'>contact now</button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div> no user</div>
  );
}

export default UserDetails;