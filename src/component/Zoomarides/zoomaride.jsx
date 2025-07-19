import "./zoomaride.scss";
import ride from "../../assets/Replace.png";

let Ride = ()=> {
    return(
        <div id="zoom">
            <div id="zoomaride-container">
                <div className="zooma">
                    <img src={ride} alt="img" />
                </div>
                <div className="zooma">
                    <h1>Zooma Rides</h1>

                    <p id="first-paragraph">Request in seconds, ride in minutes.</p>

                    <p id="second-paragraph">Zooma is the safe, reliable ride-hailing service available at the tap of a button. Order a ride and get picked up by a top-rated driver in more than 600 cities worldwide.</p>

                    <p id="third-paragraph">Download the Zooma app for a comfortable ride to your destination.</p>

                    <button type="button" id="get">Get the app</button>
                </div>
            </div>
        </div>
    )
}

export default Ride;