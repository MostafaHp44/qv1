import  "./Category.css";
import p1 from './picofproduct/curtains.jpg'
import p2 from './picofproduct/Fabric it.jpg'
import p3 from './picofproduct/Couch corner furniture.jpg'
const Product=()=>{

  return (
    <div className="MainProduct">

        <div className="TitleOfProduct"><span>Our Product's</span></div>

        <div className="BigBox">
            <div className="Col-P1"><span className="cat">Curtains</span></div>
            <div className="Col-P2"><span className="cat">Fabric it</span></div>
            <div className="Col-P3"><span className="cat">Furniture</span></div>
        </div>

    </div>
  );
}
export default Product