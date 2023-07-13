import './Login.css'
import secvid from './sechalf/Login2.mp4'
import { UilFacebook,UilInstagramAlt,UilGoogle} from '@iconscout/react-unicons'
import { Link } from 'react-router-dom'
import {React,useEffect,useState} from 'react'

const Login = () => {
    const[mail,setmail]=useState('')
    const[password,setpassword]=useState('')
    const[user,setuser]=useState('')

    const handelmail=(e)=>{
        setmail(e.target.value)
    }

    const handeluser=(e)=>{
        setuser(e.target.value)
    }

    const handelpass=(e)=>{
        setpassword(e.target.value)
    }

    return (
    <div className='MainLogin'>

        <div className='FirstHalf'>

        <div className="container">
        <div className="screen">
          <div className="screen__content">
            <form className="login">

              <div className="login__field">
                <input type="text" className="login__input" placeholder="User name / Email" value={mail||user} onChange={handelmail||handeluser}/>
              </div>

              <div className="login__field">
                <input type="password" className="login__input" placeholder="Password" value={password} onChange={handelpass}/>
              </div>
              
              <button className="button login__submit">
                <span className="button__text">Log In Now</span>
              </button>		
              <div className='OrRegisterwith'> 
              <span>If You dont have account you can</span> <Link to='/register'>register</Link>
              </div>
            </form>
            <div className="social-login">
              <h3>log in via</h3>
              <div className="social-icons">
                <a className="social-login__icon fab"><UilFacebook/></a>
                <a className="social-login__icon fab"><UilInstagramAlt/></a>
                <a className="social-login__icon fab"><UilGoogle/></a>
              </div>
            </div>

          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4" />
            <span className="screen__background__shape screen__background__shape3" />		
            <span className="screen__background__shape screen__background__shape2" />
            <span className="screen__background__shape screen__background__shape1" />
          </div>		
        </div>
       </div>
             
        </div>

        <div className='SecHalf'>
        <video
    id="my-player"
    src={secvid}
    className="secvid"
    controls={false}
    muted="muted"
    loop={true}
    autoPlay={true}
    preload="auto"
    data-setup='{}'>
 
</video>
        </div>

    </div>
    );
}
 
export default Login;