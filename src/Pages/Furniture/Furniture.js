import NavBar from '../../Components/1-NavBar/NavBar';
import CardProducat from '../../SharedComponents/CardProducat/cardproducat';
import ShopNow from '../../SharedComponents/ShopNow/ShopNow';
import './Furniture.css'


const Furniture = () => {
    return (
    <div className='MainCurtains'>

       <div className='First'>
        <NavBar/>
        <ShopNow/>

       </div>

       <div className='Sec'>
       <div className='Items'><span>Our Product</span></div>
        <CardProducat/>
       </div>
       
       </div>
    );
}
 
export default Furniture;