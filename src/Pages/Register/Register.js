import './Register.css'
import reg from './reg2.mp4'
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

            <form className="register">

              <div className="register__field">
                <input type="text" className="login__input" placeholder="User name" value={username} onChange={handelusername} required/>
              </div>

              <div className="register__field">
                <input type="text" className="register__input" placeholder="Enter your Email" value={mail} onChange={handelemail} required/>
              </div>

              <div className="register__field">
                <input type="password" className="login__input" placeholder="Password" value={password} onChange={handelpassword} required/>
              </div>

              <div className="register__field">
                <input type="tel" className="register__input" placeholder="Phone Number" value={phone} onChange={handelphone} required/>
              </div>

              <button className="button register__submit">
                <span className="button__text">Register</span>
              </button>		
              <div className='OrLoginwith'> 
              <span>If You  have account you can</span> <Link to='/login' style={{textDecoration:"none",color:"black"}}>Login</Link>
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