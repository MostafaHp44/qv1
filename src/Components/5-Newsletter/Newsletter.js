import './Newsletter.css'
import { UilEnvelope } from '@iconscout/react-unicons'
import new1 from './newsletter.mp4'
const Newsletter = () => {
    return (

    <div className="MainNewsletter">
        
        <div className='NewsLetterBox'>

        <div className='Box1'>
       <video
    id="my-player"
    src={new1}
    className="video-js-news"
    controls={false}
    muted="muted"
    loop={true}
    autoPlay={true}
    preload="auto"
    data-setup='{}'>
 
</video>
       </div>

        <div className='Box2'>

            <div className='Text-1AR'>اشترك معنا ليصلك كل جديد عن منتجاتنا ومتابعه احدث العروض </div>
            <div className='Text-1EN'>Subscribe with us to receive all new about our products and follow the latest offers</div>
            <input type='text' placeholder='  Subscribe and Enter Your Mail' className='newletter'></input> <button className='Submit'>Submit</button>
       </div>

        </div>
      
    
    </div>
    );
}
 
export default Newsletter;