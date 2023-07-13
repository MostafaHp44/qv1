import './Middel.css'
import { UilUserExclamation,UilTruck,UilPercentage} from '@iconscout/react-unicons'
import React, { useState, useEffect } from "react";


const Middel = () => {
    return (
    <div className="MainMiddel">
        <div className='BigBoxMiddel'>

            <div className='Col-B1'>
                <div className='iconabout'> <UilUserExclamation size="70" className='iconn'/><br/> <span className='HeaderTitle'> About Us</span></div>
                <div className='infotextar'><span>قصر ابريم هي شركه رائده في صناعه الاقشمه واحدث انواع الستائر العصريه وتهدف الي تقديم خامات عاليه الجوده تتناسب مع الباقات السعريه  </span></div>
                <div className='infotexten'><span>Qasr Ibrim is a leading company in the manufacture of fabrics and the latest types of modern curtains. It aims to provide high quality raw materials that are commensurate with the price packages. </span></div>

            </div>

            <div className='Col-B2'>

            <div className='iconabout'> <UilTruck size="70"/><br/> <span className='HeaderTitle'> About delivery</span></div>
            <div className='infotextar'><span>نحاول بذل اقصي جهد لتخفيض تكلفه النقل والشحن والوصول الي  درجه عاليه وسريعه في التوصيل لجميع انحاء المحافظات</span></div>
            <div className='infotexten'><span>We try to make every effort to reduce the cost of transportation and shipping and to reach a high and fast level in delivery to all parts of the governorates</span></div>

            </div>

            <div className='Col-B3'>

            <div className='iconabout'> <UilPercentage size="70"/><br/> <span className='HeaderTitle'> Offer's</span></div>
            <div className='infotextar'><span>ترقبوا دائما عروضنا وكونو في الموعد للحصول علي قسائم شراء تصل الي 1000  جنيه مصري او خصم يصل الي 35%</span></div>
            <div className='infotexten'><span>Always stay tuned for our offers and be on time to get purchase vouchers of up to 1000 Egyptian pounds or a discount of up to 35% </span></div>

            </div>

        </div>
    </div>
    );
}
 
export default Middel;