import './WGIF.css' 
import promo1 from './promo3.mp4'

const WGIF = () => {
    return (
    <div className="MainVideo">
<video
    id="my-player"
    src={promo1}
    className="video-js"
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
 
export default WGIF;