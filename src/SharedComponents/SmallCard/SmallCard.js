import './SmallCard.css'
import mainimg from './c1.jpg'
import p1 from './red.jpg'
import p2 from './white.jpg'
import p3 from './yellow.jpg'
import { Link } from "react-router-dom";
import React, { useState } from 'react';





const SmallCard = () => {
    const [activeImage, setActiveImage] = useState()


  const HandelImgProducat=(event)=>{
      console.dir(event.target) // you should better inspect your HTML element
      const src = event.target.src;
      setActiveImage(src);

  }
    return (
    <>
     <div className="SmallCard">
              <div className="MainImg">
              <img src={activeImage||mainimg} className="smallimg" alt=""></img>
              </div>
              <div className="Info-PRO">
            <span className="small-title-ar">قماش قطيفه</span>
            <span className="small-title-en">Cloth plush</span>
            <span className="small-price">200<span className='small-Curruncy'>.EGP</span></span>
             <div className="small-availablecolor">
              <img src={p1} alt="" className="colorsproducat" onClick={HandelImgProducat}></img>
              <img src={p2} alt="" className="colorsproducat" onClick={HandelImgProducat}></img>
              <img src={p3} alt="" className="colorsproducat" onClick={HandelImgProducat}></img>

            </div>
            <button className="small-btnmoreinfo"><Link to='/pro'>More Info</Link></button>
             </div>
           

          </div>
    </>
    );
}
 
export default SmallCard;