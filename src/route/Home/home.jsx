import "./home.scss";
import over from "../../assets/Dilemmax1.jpg";
import Button from "../../component/Button/button";
import Ride from "../../component/Zoomarides/zoomaride";
import Business from "../../component/Zoomabusiness/zoomabusiness";
import Blue from "../../component/Blue/blue";
import Popular from "../../component/Popular/popular";
import { useContext } from "react";
import { RideBizContext } from "../../context/Ridenbis";
import Airport from "../../component/Airport/airport";
import Contact from "../../component/Contact/contact";
import Company from "../../component/Company/company";
import Partner from "../../component/Partner/partner";

let Home = ()=>{

    let {rider, setRide} = useContext(RideBizContext);

    let rideHandler = ()=>{
        setRide(0);
    }

    let BusinessHandler = ()=>{
        setRide(1);
    }
    

    return(
        <div>

        <div id="play">

            <img src={over} alt="city" />

            <div id="overlay">

                <div id="overtext">
                    <h1>Zooma In Port Harcourt</h1>

                    <p>Wherever you are in Lagos, count on Zooma for rides in minutes! From Murtala Mohammed International Airport Ikeja to the Island, Zooma is a tap of a button away.</p>

                    <button>Get the app</button>
                </div>
                
            </div>


        </div>

        <div id="bolt-container">
                <div id="mid-bolt">
                    <div id="avail">
                        <h1 className="bolt-text">Available services in Port Harcourt</h1>

                        <p className="bolt-paragragh">Find out more about the services we currently offer across the city.</p>
                    </div>

                    <div id="btn-container-cover">

                        <div id="btn-contain">
                        <Button type="button" className="Dark-btn" children="Zooma Rides" onClick={rideHandler}></Button>
                        <Button type="button" className="Light-btn" children="Zooma Food"></Button>
                        <Button type="button" className="Light-btn" children="Zooma Drive"></Button>
                        <Button type="button" className="Darker-btn" children="Zooma Micromobility"></Button>
                        <Button type="button" className="Cool-btn" children="Zooma Business" onClick={BusinessHandler}></Button>
                        </div>


                    </div>
                </div>
        </div>


        {rider===0?<Ride/>:<Business/>}
        


        <Blue/>

        <Popular/>

        <Airport/>

        <Contact/>

        <Company/>

        <Partner/>

        </div>
    )
}

export default Home;