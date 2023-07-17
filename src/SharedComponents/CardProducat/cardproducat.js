import './cardproducat.css'
import   c1 from  './c1.jpg'
import { UilHeartAlt,UilShoppingBag} from '@iconscout/react-unicons'
import {useState} from 'react'
import { Link } from 'react-router-dom'

const CardProducat = () => {
    const[isfill,setisfill]=useState(false)
    const[isadd,setisadd]=useState(false)

     const handelfavit=()=>{

        setisfill(curr=>!curr)
     }

     const handelisadd=()=>{
        setisadd(curr=>!curr)
     }
    return (
    <>
       <div className='CardProducat'>
        <div className='PicOfProducat'><img src={c1} alt='' className='pic-p'></img></div>

        <div className='InfOfProducat'>
            <div className='Title-P'>
                <div className='title-AR'><span>قماش قطيفه</span></div>
                <div className='title-EN'><span>Cloth plush</span></div>

            </div>
            <div className='Price-P'>
            <span>200</span><span className='Curruncy'>.EGP</span></div>
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
