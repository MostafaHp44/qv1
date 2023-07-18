import NavBar from '../../Components/1-NavBar/NavBar';
import './Producat.css'
import {React,useState} from 'react';
import Badge from 'react-bootstrap/Badge';
import { UilHeartAlt,UilShoppingBag} from '@iconscout/react-unicons'
import pic1 from './red.jpg'
import pic2 from './white.jpg'
import pic3 from './yellow.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import BurgerMenu from '../../Components/0-BurgerMenu/BurgerMenu'



const ProductPage = () => {
    
    const [activeImage, setActiveImage] = useState()
    const [color,setcolor]=useState('')


    const HandelImgProducat=(event)=>{
        console.dir(event.target) // you should better inspect your HTML element
        const src = event.target.src;
        const Knowcolor= event.target.alt
        setActiveImage(src);
        setcolor(Knowcolor)

    }

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

                <div className='Box1-MainImg'>
                    <img src={activeImage||pic1} alt='' className='Pic-Producat'></img>
                </div>

              
               
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

                    <div className='TitleColors'>
                        <span>Colors : <span style={{fontWeight:"400", color:`${color}`}}>{color}</span></span>
                    </div>

                    <div className='SmallImgs'>
                       <img src={pic1} className='collectionimg' alt='red'    onClick={HandelImgProducat}></img>
                       <img src={pic2} className='collectionimg' alt='white'    onClick={HandelImgProducat}></img>
                       <img src={pic3} className='collectionimg' alt='yellow'    onClick={HandelImgProducat}></img>
                    </div>

                    </div>
                <div className='Quantity'>

                    <div className='Q-1'>
                       <button className='btn-q'>+</button>
                       <Badge pill bg="primary" style={{fontSize:"20px"}}>0 Meter</Badge>
                       <button className='btn-q'>-</button>
                    </div>

                    <div className='Q-2'>       
                      <button className='b2' onClick={handelfavit}>{isfill? <UilHeartAlt fill="red" className='icon-q'/> :<UilHeartAlt className='icon-q'/>}</button>
                      <button className='b3' onClick={handelisadd}>{isadd ?<UilShoppingBag color="royalblue" className='icon-q' />:<UilShoppingBag className='icon-q'/>}</button>
                    </div>

                </div>
                <div className='SubmitOrder'><button className='btn-submit'>Submit Order</button></div>
               </div>

       

        </div>
        <div className='ThirdPro'>

        <div className='Box2-Pro'>

        <div className='D-EN'>
     <div className='Discription-EN'><span className='T1-EN'>Width :<span className='T2-EN'></span>58/60 inches</span></div>
     <div className='Discription-EN'><span className='T1-EN'>Weight :<span className='T2-EN'></span>195 GSM</span></div>
     <div className='Discription-EN'><span className='T1-EN'>Content :<span className='T2-EN'></span>100% Polyester</span></div>


        </div>

        <div className='D-AR'>
     <div className='Discription-AR'><span className='T1-AR'>الطول:<span className='T2-AR'></span>58/60انش</span></div>
     <div className='Discription-AR'><span className='T1-AR'>العرض:<span className='T2-AR'>195 جرام</span></span></div>
     <div className='Discription-AR'><span className='T1-AR'>الماده الخام:<span className='T2-AR'>100% بوليستر</span></span></div>
        </div>

     


        </div>
        <div className='SubmitOrder'><button className='btn-submit'>Customize IT<Badge pill bg="danger">new</Badge></button></div>

        </div>

    </div>
    );
}
 
export default ProductPage;
