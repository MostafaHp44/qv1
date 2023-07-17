import { Routes,Route } from "react-router-dom";
import React
 from "react";
import Login from "../Login/Login";
import Componentss from "../../Components/Components";
import Register from "../Register/Register";
import Admin from "../Admin/Admin";
import User from '../User/User'
import ManageUser from "../Admin/ManageUser/MU";
import Curtains from "../Curtains/curtains";
import FabricIt from "../Fabric it/FabricIt";
import Furniture from "../Furniture/Furniture";
import MP from "../Admin/ManageProduct/MP";
import ProductPage from "../Product/Producat";
import ProfileUser from "../User/ProfileUser/ProfileUser";
import AddToCart from "../AddToCart/AddToCart";
import FavProducat from "../FavProducat/FavProducat";
const Links = () => {
    return (
    <div>
 <Routes>
        <Route  path="/" element={<Componentss/>}/>
        <Route  path="/login" element={<Login/>}/> 
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/cart" element={<AddToCart/>}></Route>
        <Route path="/favitem" element={<FavProducat/>}></Route>
        <Route path="/curtains" element={<Curtains/>}></Route>
        <Route path="/fabricit" element={<FabricIt/>}></Route>
        <Route path="/furniture" element={<Furniture/>}></Route>
        <Route path="/pro" element={<ProductPage/>}></Route>
        
        <Route path="/user" element={<User/>}></Route>
        <Route path="/user/userprofile" element={<ProfileUser/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/admin/users" element={<ManageUser/>}></Route>
        <Route path="/admin/producat" element={<MP/>}></Route>


 </Routes>
    </div>
    );
}
 
export default Links;