import  "./Category.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Product=()=>{

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
  return (
    
    
    <div className="MainProduct" data-aos="fade-up" data-aos-anchor-placement="top-bottom">

        <div className="TitleOfProduct"><span>Our Product's</span></div>

        <div className="BigBox"  >
            <div className="Col-P1"><span className="cat">Curtains</span></div>
            <div className="Col-P2"><span className="cat">Fabric it</span></div>
            <div className="Col-P3"><span className="cat">Furniture</span></div>
        </div>

    </div>
  );
}
export default Product