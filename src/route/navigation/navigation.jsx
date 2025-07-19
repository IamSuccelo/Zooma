import { Outlet } from "react-router-dom";
import Large from "../../component/Largenavigation/largenavigation";
import Smallnav from "../../component/SmallNavigation/smallnavigation";
import "./navigation.scss";

let Nav = ()=>{
    return(
        <div id="nav">

            <Large/>
            
            <Smallnav/>

           <Outlet/>
        </div>
    )
}

export default Nav;