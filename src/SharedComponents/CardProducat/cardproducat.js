import './cardproducat.css'
import   c1 from  './c1.jpg'
import { UilHeartAlt,UilShoppingBag} from '@iconscout/react-unicons'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import pic1 from './red.jpg'
import pic2 from './white.jpg'
import pic3 from './yellow.jpg'


const CardProducat = () => {

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

    const [activeImage, setActiveImage] = useState()
    const [color,setcolor]=useState('')
    const [isfill,setisfill]=useState(false)
    const [isadd,setisadd]=useState(false)


    const HandelImgProducat=(event)=>{
        console.dir(event.target) // you should better inspect your HTML element
        const src = event.target.src;
        const Knowcolor= event.target.alt
        setActiveImage(src);
        setcolor(Knowcolor)

    }
    const handelfavit=()=>{

        setisfill(curr=>!curr)
    }
    const handelisadd=()=>{
        setisadd(curr=>!curr)
    }

    return (
    <>
       <div className='CardProducat' data-aos="fade-up">

        <div className='PicOfProducat'>
            <img src={activeImage||c1} alt='' className='pic-p'></img>
        </div>

        <div className='InfOfProducat'>
            <div className='Title-P'>
                <div className='title-AR'><span>قماش قطيفه</span></div>
                <div className='title-EN'><span>Cloth plush</span></div>

            </div>
            <div className='Price-P'>
            <span>200</span><span className='Curruncy'>.EGP</span>
            </div>
            <div className='SmallImgs'>
                       <img src={pic1} className='collectionimg-card' alt='red'    onClick={HandelImgProducat}></img>
                       <img src={pic2} className='collectionimg-card' alt='white'    onClick={HandelImgProducat}></img>
                       <img src={pic3} className='collectionimg-card' alt='yellow'    onClick={HandelImgProducat}></img>
           </div>
            <div className='Meter-P'>
               <div className='Meter-AR'><span>1متر</span></div> 
               <div className='Meter-EN'><span>1 Meter</span></div> 

            </div>
            <div className='Add-P'>
                <button className='b1' > <Link to='/pro'>More Info</Link></button>
                <button className='b2' onClick={handelfavit}>{isfill? <UilHeartAlt fill="red"/> :<UilHeartAlt/>}</button>
                <button className='b3' onClick={handelisadd}>{isadd ?<UilShoppingBag color="royalblue"/>:<UilShoppingBag/>}</button>

            </div>


        </div>

      </div>
    </>
    );
}

export default CardProducat;