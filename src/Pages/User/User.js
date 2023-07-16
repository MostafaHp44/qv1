import React from "react";
import './User.css'
import user from './User.mp4'
import { UilUsersAlt,UilSitemap,UilAnalytics} from '@iconscout/react-unicons'
import { Link } from 'react-router-dom'


const User = () => {
    return (

        <div className='MainUser'>
        <div className='BoxUser'>

                <div className='User'>
                    
                    <div className='UserName'><span className='hello'>Hello</span> <span className='Name'>Mostafa</span></div>
                    <div className='UserPic'><img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="picofadmin" ></img></div>
                    <div className='LogoutUser'><button className="Logout-User">Log Out</button></div>

                </div>

                 <div className='WelcomeUser'>
            <video
    id="my-player"
    src={user}
    className="UserVid"
    controls={false}
    muted="muted"
    loop={true}
    autoPlay={true}
    preload="auto"
    data-setup='{}'>
 
</video>
                 </div>

                 <div className='Widgates'>

                    <div className='W1-USER-Profile'>
                        <span className='UserProfile'><Link to='userprofile'> MY Profile <UilUsersAlt className='icnonuser'/></Link></span>
                    </div>
                    
                    <div className='W2-Favitem'>
                        <span className='FavProducat'><Link to='favproducat'>FavProducat <UilSitemap className='icnonuser'/></Link></span>
                    </div>

                    <div className='W3-Custmize'>
                        <span className='Custom'> <Link to='customproducat'>Customize Producat <UilAnalytics className='icnonuser'/></Link></span>
                    </div>

                    <div className='W4-Order'>
                        <span className='MyOrder'> <Link to='myorder'>My Order</Link> <UilAnalytics className='icnonuser'/></span>
                    </div>

                   

                 </div>
        </div>
    </div>
    );
}
 
export default User;