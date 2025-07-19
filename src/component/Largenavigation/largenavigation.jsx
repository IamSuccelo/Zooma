import "./largenavigation.scss";
import menuu from '../../assets/icons.png';
import Drop from "../Dropdown/dropdown";
import { useContext } from "react";
import { dropContext } from "../../context/menuContext";



let Large = ()=>{

    let {drop, setDrop} = useContext(dropContext);

    let classes = ["nonee", "par", "unpar"];

    let dropHandler = () => {
        setDrop(1)
    }



        
    return(

        <div id="Largenav">

         <div id="fixed">
            <h1>Zooma</h1>

            <div id="menu">
                <select name="en" id="sel">
                    <option value="en">🌍 EN</option>
                </select>

                <h3>Support</h3>
                
                <button type="button" id="btn-id">Register</button>

                <img src={menuu} alt="drop" onClick={dropHandler}/>
            </div>


         </div>

         <Drop className={classes[drop]}/>

    </div>
        
    )
}

export default Large;