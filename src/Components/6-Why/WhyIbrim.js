import './WhyIbrim.css'
import React from 'react';
import qaser1 from './1038850485_qasr4.jpg'

const WhyIbrim = () => {
    return (
    <div className="MainWhyIbrim">
        <div className='TiltleOfWhyIbrim'>
            <span> Why This Name</span>
        </div>

        <div className='BoxWhyIbrim'>

            <div className='Col-1W'>
                <span className='WhyAR'> 
                خليني اقولك يا امبيسا ان  فيه فعلا قصر في النوبه اسمه قصر ابريم وبالتحديد موجود في النوبة السفلى التي ويقع على بعد 240 كم من أسوان و50 كيلومترا من السودان هو كان قلعه حصينه يحتمي بيها اصحاب البلد  والفكرة جايه في ان القماش يكون واخد الطابع النوبي الجميل  </span>
            <span className='WhyEN'>Let me tell you, Brother, that there really is a palace in Nubia called Qasr Ibrim, and specifically it is located in Lower Nubia, which is located 240 km from Aswan and 50 km from Sudan. It was a fortified castle in which the owners of the country took refuge. We said we give the cloth a value that it takes these colors</span>

            </div>

            <div className='Col-2W'>
                <img src={qaser1} alt='qaseribrim' className='picwhy'></img>
            </div>
        </div>
    </div>
     );
}
 
export default WhyIbrim;