import './Register.css'
import reg from './reg.mp4'
import { UilFacebook,UilInstagramAlt,UilGoogle} from '@iconscout/react-unicons'
import { Link } from 'react-router-dom'
import {React,useEffect,useState} from 'react'



const Register = () => {
    const[username,setusername]=useState('')
    const[mail,setmail]=useState('')
    const[password,setpassword]=useState('')
    const[phone,setphone]=useState('')

    const handelusername=(e)=>{
        setusername(e.target.value)
    }
    const handelemail=(e)=>{
        setmail(e.target.value)
    } 
    const handelpassword=(e)=>{
        setpassword(e.target.value)
    }
     const handelphone=(e)=>{
        setphone(e.target.value)
    }

    return (
    <div className="MainRegister">
<div className='FirstHalf'>
<div className="container">
        <div className="screen">
          <div className="screen__content">
            <form className="register">

              <div className="register__field">
                <input type="text" className="login__input" placeholder="User name" value={username} onChange={handelusername}/>
              </div>

              <div className="register__field">
                <input type="text" className="register__input" placeholder="Enter your Email" value={mail} onChange={handelemail}/>
              </div>

              <div className="register__field">
                <input type="password" className="login__input" placeholder="Password" value={password} onChange={handelpassword}/>
              </div>

              <div className="register__field">
                <input type="text" className="register__input" placeholder="Phone Number" value={phone} onChange={handelphone}/>
              </div>

              <button className="button register__submit">
                <span className="button__text">Register</span>
              </button>		
              <div className='OrLoginwith'> 
              <span>If You  have account you can</span> <Link to='/login'>Login</Link>
              </div>
            </form>
            <div className="social-register">
              <h3>Register With</h3>
              <div className="social-icons">
                <a className="social-register__icon fab"><UilFacebook/></a>
                <a className="social-register__icon fab"><UilInstagramAlt/></a>
                <a className="social-register__icon fab"><UilGoogle/></a>
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
    src={reg}
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
 
export default Register;