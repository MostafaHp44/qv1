import './ShopNow.css'
import vid from './ShopNow2.mp4'

const ShopNow = () => {
    return (
    <div className='MainShopNow'>
    <video
    id="my-player"
    src={vid}
    className="ShopNow"
    controls={false}
    muted="muted"
    loop={true}
    autoPlay={true}
    preload="auto"
    data-setup='{}'>
 
</video>
    </div>
    );
}
 
export default ShopNow;