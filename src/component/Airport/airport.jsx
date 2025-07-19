import "./airport.scss";
import Air from "../../assets/Airport.jpg";


let Airport = ()=>{
    return(
        <div id="AirportCover">
            <div id="airportContain">
                <div className="airportClass">
                    <img src={Air} alt="air" />
                </div>
                <div className="airportClass">
                    <h1>Lagos airport</h1>
                    <h3>Wondering how to get from Murtala Muhammed International Airport to the city of Lagos, or how to get from Lagos to the airport?
                    </h3>
                    <h3>Reqsuest a ride to and from Lagos airports at the tap of a button. Or see more airports in Lagos</h3>

                    <div id="bttn">
                        <div className="btn">Get the app</div>
                        <div className="btn">See all airports</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Airport;