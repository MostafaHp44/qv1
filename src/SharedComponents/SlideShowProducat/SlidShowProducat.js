import "./style.css";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const SlideShowProducat=()=>{
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <>
      <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>
      <ul ref={ref} className="SlideProducat">
        <li className="S1">mo</li>
        <li className="S1">no</li>
        <li className="S1">ko</li>
        <li className="S1">yo</li>

        
      </ul>
    </>
  );
}
export default SlideShowProducat