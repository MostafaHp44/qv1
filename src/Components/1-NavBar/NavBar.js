import './NavBar.css'
import { UilTruck,UilUserPlus,UilShoppingBag} from '@iconscout/react-unicons'
import TextTransition, { presets } from 'react-text-transition';
import {React,useEffect,useState,useCallback} from 'react'
import logo1 from './1.png'
import Badge from 'react-bootstrap/Badge';

const NavBar = () => {
    const names = [
        'شحن عادي 100 جنيه  | شحن سريع 200 جنيه -  شحن مجاني للطلبات التي تزيد عن 300 جنيه', 
        'Standard Shipping  99.99 EGP | Express Shipping   199.99 EGP - Free Shipping on Orders Over  300 EGP'
    ]
    
    const [Text,setText]=useState(true)

    useEffect(() => {
        const intervalId = setInterval(
          () => setText((index) => index + 1),
          5000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
      }, []);


    return (
    <div className="MainNav">
      

      <div className='TopNav' >
    <span className='Text'>
        <TextTransition springConfig={presets.stiff}>{names[Text % names.length]}</TextTransition><UilTruck/>
         </span>
      </div>

      <div className="DownNav">

        <div className='Left-Nav'>
            <img src={logo1} style={{width:"5em"}}></img>
        </div>
        <div className='Center-Nav'>
            <nav>
                <ul className='Category'>
                    <li className='C1'>curtains</li>
                    <li className='C1'>Fabric it</li>
                    <li className='C1'>furniture</li>

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