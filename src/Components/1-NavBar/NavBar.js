import './NavBar.css'
import {UilUserPlus,UilShoppingBag} from '@iconscout/react-unicons'
import {React} from 'react'
import logo1 from './1.png'
import Badge from 'react-bootstrap/Badge';
import BlueLine from '../../SharedComponents/BlueLine/BlueLine';
import { Link } from 'react-router-dom';

const NavBar = () => {
   


    return (
    <div className="MainNav">
      

      <div className='TopNav' >
    <span className='Text'><BlueLine/></span>
      </div>

      <div className="DownNav">

        <div className='Left-Nav'>
           <Link to='/'><img src={logo1} style={{width:"5em"}} alt=''></img></Link> 
        </div>
        <div className='Center-Nav'>
            <nav>
                <ul className='Category'>
                    <li className='C1'><Link to='/curtains'>curtains</Link></li>
                    <li className='C1'><Link to='/fabricit'>Fabric it</Link></li>
                    <li className='C1'><Link to='/furniture'>furniture</Link></li>

                </ul>
            </nav>
        </div>

        <div className='Right-Nav'>
            <button className='UserBtn'><UilUserPlus size="30"/></button>
            <button className='UserBtn'><UilShoppingBag size="30"/><Badge pill bg="primary">0</Badge>
</button>
        </div>

       
      </div>
    </div>
    );
}
 
export default NavBar;