import './App.css';
import Links from './Pages/Routes/routes';
import { useRef } from "react";
import { motion } from "framer-motion";


function App() {
  const ref = useRef(null);
  return (
    <div className="App">
        <motion.div
      ref={ref}
      className="box"
      transition={{
        type: "spring",
        damping: 330,
        stiffness: 5000,
        restDelta: 0.001
      }}
    />
     <Links/>
    </div>
  );
}

export default App;
