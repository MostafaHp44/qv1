import SlideShowProducat from '../SharedComponents/SlideShowProducat/SlidShowProducat';
import BurgerMenu from './0-BurgerMenu/BurgerMenu';
import NavBar from './1-NavBar/NavBar';
import WGIF from './2-WGIF/WGIF';
import Middel from './3-Middel/Middel';
import Product from './4-Category/Category';
import Newsletter from './5-Newsletter/Newsletter';
import WhyIbrim from './6-Why/WhyIbrim'
import Footer from './7-Footer/Footer';
const Componentss = () => {
    return (
    <div>
      <BurgerMenu/>
      <NavBar/>
      <WGIF/>
      <Middel/>
      <Product/>
      <Newsletter/>
      <SlideShowProducat/>
      <WhyIbrim/>
      <Footer/>
    </div>);
}
 
export default Componentss;