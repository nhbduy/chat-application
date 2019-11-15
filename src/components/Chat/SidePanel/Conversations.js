import React from 'react';

function Conversations({}) {
  return (
    <React.Fragment>
      <ul>
        <li className='contact'>
          <div className='wrap'>
            <span className='contact-status online'></span>
            <img src='img/avatar-male.png' alt='' />
            <div className='meta'>
              <p className='name'>Louis Litt</p>
              <p className='preview'>You just got LITT up, Mike.</p>
            </div>
          </div>
        </li>
        <li className='contact active'>
          <div className='wrap'>
            <span className='contact-status busy'></span>
            <img src='img/avatar-male.png' alt='' />
            <div className='meta'>
              <p className='name'>Harvey Specter</p>
              <p className='preview'>
                Wrong. You take the gun, or you pull out a bigger one. Or, you
                call their bluff. Or, you do any one of a hundred and forty six
                other things.
              </p>
            </div>
          </div>
        </li>
        <li className='contact'>
          <div className='wrap'>
            <span className='contact-status away'></span>
            <img src='img/avatar-male.png' alt='' />
            <div className='meta'>
              <p className='name'>Rachel Zane</p>
              <p className='preview'>
                I was thinking that we could have chicken tonight, sounds good?
              </p>
            </div>
          </div>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Conversations;
