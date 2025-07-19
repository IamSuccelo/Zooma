import "./smallnavigation.scss";
import menuu from "../../assets/icons.png";
import Smalldrop from "../Smalldropdown/smalldropdown";
import { useContext } from "react";
import { dropContext } from "../../context/menuContext";

let Smallnav = ()=>{

        let {drop, setDrop} = useContext(dropContext);
    
        let classes = ["nonee", "par", "unpar"];
    
        let dropHandler = () => {
            setDrop(1)
        }


    return(
        <div id="small-nav">
            <div id="fix">
                <h1><span>Zooma</span></h1>

                <div id="small-menu">
                    <h1 className="en">🌍 EN</h1>

                    <img src={menuu} alt="drop" onClick={dropHandler}/>
                </div>
            </div>

            <Smalldrop className={classes[drop]}/>
        </div>
    )
}

export default Smallnav;