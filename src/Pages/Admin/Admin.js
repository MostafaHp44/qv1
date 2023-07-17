import './Admin.css'
import React from 'react';
import wad from './AdminVid/Admin2.mp4'
import { UilUsersAlt,UilSitemap,UilAnalytics} from '@iconscout/react-unicons'
import { Link } from 'react-router-dom'
import BurgerMenu from '../../Components/0-BurgerMenu/BurgerMenu'



const Admin = () => {
    return (
    <div className='MainAdmin'>
         <BurgerMenu/>
        <div className='BoxAdmin'>

                <div className='Admin'>
                    
                    <div className='AdminName'><span className='hello'>Hello </span> <span className='Name'>Mostafa</span></div>
                    <div className='AdminPic'><img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="picofadmin"></img></div>
                    <div className='LogoutAdmin'><button className="Logout-Admin">Log Out</button></div>

                </div>

                 <div className='WelcomeAdmin'>
            <video
    id="my-player"
    src={wad}
    className="AdminVid"
    controls={false}
    muted="muted"
    loop={true}
    autoPlay={true}
    preload="auto"
    data-setup='{}'>
 
</video>
                 </div>

                 <div className='Widgates'>

                    <div className='W1-USER'>
                        <span className='Manage-User'><Link to='/admin/users'>Manage-User  <UilUsersAlt className='icnonuser'/></Link></span>
                    </div>
                    
                    <div className='W2-Product'>
                        <span className='Manage-Product'><Link to='producat'>Manage-Producat  <UilSitemap className='icnonuser'/></Link></span>
                    </div>

                    <div className='W3-Reports'>
                        <span className='ShowReports'> <Link to='reports'>Show Reports <UilAnalytics className='icnonuser'/></Link> </span>
                    </div>

                 </div>
        </div>
    </div>
    );
}
 
export default Admin;