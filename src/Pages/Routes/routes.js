import { Routes,Route } from "react-router-dom";
import React
 from "react";
import Login from "../Login/Login";
import App from "../../App";
import Componentss from "../../Components/Components";
import Register from "../Register/Register";
const Links = () => {
    return (
    <div>
 <Routes>
        <Route  path="/" element={<Componentss/>}/>
        <Route  path="/login" element={<Login/>}/> 
        <Route path="/register" element={<Register/>}></Route>
 </Routes>
    </div>
    );
}
 
export default Links;