import { useContext } from "react";
import "./dropdown.scss";
import { dropContext } from "../../context/menuContext";

let Drop = ({...otherProps})=>{

    let {drop, setDrop}=useContext(dropContext);

    let closeHandler=()=>{
        setDrop(2);
    }





    return(

    <div {...otherProps}>

        <div id="cover">
            <div id="container">
                <div id="header">
                    <div id="left">
                        <h1>Zooma</h1>
                    </div>

                    <div id="right">
                        <select  id="en">
                            <option>🌍EN</option>
                        </select>

                        <h3>Support</h3>

                        <button type="button" id="ty">Register</button>

                        <div id="menu-icon" onClick={closeHandler}>
                            ✖
                        </div>

                    </div>
                </div>

                <div id="main">
                    <div id="nav">
                        <h4 className="nv">Products</h4>
                        <h4 className="nv">Earn with Zooma</h4>
                        <h4 className="nv">Company</h4>
                        <h4 className="nv">Safest</h4>
                        <h4 className="nv">Support</h4>
                        <h4 className="nv">Cities</h4>
                    </div>

                    <div id="main-container">
                        <div id="narrow">
                            <div className="else">
                                <h3>Rides</h3>

                                <p>Rider safety</p>
                                <p>Become a Driver</p>
                            </div>

                            <div className="else">
                                <h3>Trotinete</h3>

                                <p>Scooter safety</p>
                                <p>Report an issue</p>
                                <p>Safety lab</p>
                            </div>

                            <div className="else">
                                <h3>Zooma Market</h3>

                                <p>Become a courier</p>
                                <p>Add a restaurant or store</p>
                            </div>

                            <div className="else">
                                <h3>Zooma Food</h3>

                                <p>Become a courier</p>
                                <p>Add a restaurant or store</p>
                            </div>

                            <div className="else">
                                <h3>Zooma Drive</h3>

                                <p>FAQ</p>
                                <p>Report a vehicle</p>
                            </div>

                        </div>
                        <div id="footer">
                            <div className="else">
                                <h3>Zooma Business</h3>

                                <p>Benefits</p>
                                <p>Work profile</p>
                                <p>Products</p>
                                <p>Zooma Food for Business</p>
                            </div>

                            <div className="else">
                                <h3>E-bikes</h3>

                                <p>Safety lab</p>
                                <p>Report an issue</p>
                                <p>FAQ</p>
                            </div>

                            <div className="else">
                                <h3>Zooma Plus</h3>

                                <p>Benefits</p>
                                <p>How to join</p>
                                <p>FAQ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
       
    )
}

export default Drop;