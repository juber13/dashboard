import React from 'react'
import './topbar.css';
import {NotificationsNone , Settings , Language} from '@material-ui/icons';

const Topbar = () => {
  return (
    <div className="topbar">
        <div className='container'>
            <div className='topLeft'>
                <span className='topbarLogo'>Admin </span>
            </div>
            <div className='topRight'>
                <div className="topbarIconContainer"> 
                    <NotificationsNone/>
                    <span className='topIconBadge'>2</span> 
                </div>
                <div className="topbarIconContainer"> 
                    <Settings/>
                </div>
                <div className="topbarIconContainer"> 
                    <Language/>
                </div>

                <div className="topbarIconContainer"> 
                    <img src="https://media.licdn.com/dms/image/C5603AQHIbiGmu0XYNA/profile-displayphoto-shrink_200_200/0/1651987311733?e=1684368000&v=beta&t=R9vRGBc0E-8g178UuvIxEQzpWOd2jdG8WJ7-JoS0Fts" alt="my-image" />
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar