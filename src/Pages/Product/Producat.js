import NavBar from '../../Components/1-NavBar/NavBar';
import './Producat.css'
import {React,useState} from 'react';
import Badge from 'react-bootstrap/Badge';
import { UilHeartAlt,UilShoppingBag} from '@iconscout/react-unicons'
import pic1 from './c1.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import BurgerMenu from '../../Components/0-BurgerMenu/BurgerMenu'




const ProductPage = () => {

    AOS.init({
        disable: false,
        startEvent: 'DOMContentLoaded', 
        initClassName: 'aos-init', 
        animatedClassName: 'aos-animate', 
        useClassNames: false, 
        disableMutationObserver: false, 
        debounceDelay: 50, 
        throttleDelay: 99, 
        offset: 120, 
        delay: 600,
        duration: 400, 
        easing: 'ease', 
        once: false, 
        mirror: false,
        anchorPlacement: 'top-bottom', 
      });

    const[isfill,setisfill]=useState(false)
    const[isadd,setisadd]=useState(false)

     const handelfavit=()=>{

        setisfill(curr=>!curr)
     }

     const handelisadd=()=>{
        setisadd(curr=>!curr)
     }
    return (
    <div className="MainProducat">
        
        <div className='FirtPro'>
            <NavBar/>
            <BurgerMenu/>
        </div>

        <div className='SecPro'>

            <div className='Col-1Pro' data-aos="flip-up">
                <img src={pic1} alt='' className='Pic-Producat'></img>
            </div>

            <div className='Col-2Pro' data-aos="zoom-in-up">

               <div className='Box1-Pro'>
               <div className='TitlePro'>
                    <div className='TitlPro-AR'><span>قماش قطيفه</span></div>
                    <div className='TitlPro-EN'><span>Cloth plush</span></div>
                </div>
                <div className='Price-Pro'>
                    <span className='Price-Number'>200<span className='Curruncy'>.EGP</span></span>
                </div>
                <div className='Available-color'>

                </div>
                <div className='Quantity'>

                    <div className='Q-1'>
                       <button className='btn-q'>+</button>
                       <Badge pill bg="primary">0 Meter</Badge>
                       <button className='btn-q'>-</button>
                    </div>

                    <div className='Q-2'>       
                      <button className='b2' onClick={handelfavit}>{isfill? <UilHeartAlt fill="red"/> :<UilHeartAlt/>}</button>
                      <button className='b3' onClick={handelisadd}>{isadd ?<UilShoppingBag color="royalblue"/>:<UilShoppingBag/>}</button>
                    </div>

                </div>
                <div className='SubmitOrder'><button className='btn-submit'>Submit Order</button></div>
               </div>

               <div className='Box2-Pro'>

               <div className='Description'>
                    <div className='Discription-AR'><span className='T1-AR'>الطول:<span className='T2-AR'></span></span></div>
                    <div className='Discription-AR'><span className='T1-AR'>العرض:<span className='T2-AR'></span></span></div>
                    <div className='Discription-AR'><span className='T1-AR'>الماده الخام:<span className='T2-AR'></span></span></div>


                    <div className='Discription-EN'><span className='T1-EN'>Width:<span className='T2-EN'></span></span></div>
                    <div className='Discription-EN'><span className='T1-EN'>Weight:<span className='T2-EN'></span></span></div>
                    <div className='Discription-EN'><span className='T1-EN'>Content:<span className='T2-EN'></span></span></div>

                </div>
              
               </div>

              

            </div>

        </div>

    </div>
    );
}
 
export default ProductPage;