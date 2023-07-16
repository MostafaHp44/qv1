import TextTransition, { presets } from 'react-text-transition';
import {React,useEffect,useState} from 'react'
import { UilTruck} from '@iconscout/react-unicons'
import  './BlueLine.css'

const BlueLine = () => {

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
    <div className='MainBlueLine'>
     <TextTransition springConfig={presets.stiff}>{names[Text % names.length]} <UilTruck/> </TextTransition> 
    </div>
    );
}
 
export default BlueLine;