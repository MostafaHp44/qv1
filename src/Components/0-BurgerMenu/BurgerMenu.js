import { Link } from 'react-router-dom';
import './BurgerMenu.css'
import {UilUserPlus,UilShoppingBag,UilHeartAlt} from '@iconscout/react-unicons'
import Badge from 'react-bootstrap/Badge';


const BurgerMenu = () => {
    return (
    <div className="MainBurgerMenu">
   
<nav role="navigation">
  <div id="menuToggle">
   
    <input type="checkbox" />
    
   
    <span></span>
    <span></span>
    <span></span>

    <ul id="menu">
      <ul className='CatBurger'>
      <li><Link to='/'>Home</Link></li>
     <li><Link to='/curtains'>curtains</Link></li>
     <li><Link to='/fabricit'>Fabric it</Link></li>  
     <li><Link to='/furniture'>furniture</Link></li>
      
      </ul>
      <div className='btn-Burger'>
            <button className='btnBurger'><Link to='/login'> <UilUserPlus size="30"   className='iconn2'/></Link> </button>
            <button className='btnBurger'><Link to='/cart'> <UilShoppingBag size="30" className='iconn2'/><Badge pill bg="primary" style={{width:'3em',height:'2em',fontSize:'3em'}}>0</Badge></Link></button>
            <button className='btnBurger'><Link to='favitem'> <UilHeartAlt size="30  "className='iconn2'/><Badge pill bg="danger"  style={{width:'3em',height:'2em',fontSize:'3em'}}>0</Badge></Link></button>

      </div>
     

      
    </ul>
    
  
    
  </div>
 
</nav>
    </div>
    );
}
 
export default BurgerMenu;