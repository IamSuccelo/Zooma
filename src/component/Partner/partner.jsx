import "./partner.scss";
import face from "../../assets/facebook-icon.png";
import twitter from "../../assets/twitter-icon.png";
import insta from "../../assets/insta-icon.png";
import linkedin from "../../assets/linkedin-icon.png";
import tiktok from "../../assets/tiktok-icon.png";


let Partner = ()=>{
    return(
        <div id="Partner-cover">
            <div id="Partner-container">

                <div id="quadra-container">
                    <div className="quadra">
                        <h1>Zooma</h1>

                        <select id="select">
                            <option value="Eng" id="eng">Eng</option>
                        </select>
                    </div>
                    <div className="quadra">
                        <h3>Zooma</h3>
                        
                        <p>Rides</p>
                        <p>Food Delivery</p>
                        <p>Grocery Delivery</p>
                        <p>Scooters</p>
                        <p>Car-sharing</p>
                        <p>Business</p>
                        <p>Airports</p>
                        <p>Cities</p>
                    </div>

                    <div className="quadra">
                        <h3>Partner with Zooma</h3>

                        <p>Register as a driver</p>
                        <p>Register as a courier</p>
                        <p>Register as a merchant</p>
                        <p>Fleet</p>
                        <p>Franchise</p>
                    </div>

                    <div className="quadra">
                        <h3>Company</h3>

                        <p>About</p>
                        <p>Career</p>
                        <p>Sustainability at Zooma</p>
                        <p>Press</p>
                        <p>Blog</p>
                        <p>Brand guidelines</p>
                    </div>

                </div>

                <div id="icon-container">
                    <div className="icons">
                        <div id="div" className="round">
                        <img src={face} className="Facebook" alt="icon" />
                        </div>

                        <div id="div" className="round">
                        <img src={twitter} className="Twitter" alt="icon" />
                        </div>

                        <div id="div" className="round">
                        <img src={insta} className="Insta" alt="icon" />
                        </div>

                        <div id="div" className="round">
                        <img src={linkedin} className="Linked" alt="icon" />
                        </div>

                        <div id="div" className="round">
                        <img src={tiktok} className="Tiktok" alt="icon" />
                        </div>

                    </div>
                    <div className="icons">
                        <div className="get">Get the Bolt app</div>
                        <div className="get">Get the Bolt Food app</div>
                    </div>
                </div>

                <div id="new">
                        <div id="copy">&copy; {new Date().getFullYear()}  Zooma Technology OÜ</div>
                        <div id="Supply">
                                <div className="text">Suppliers</div>
                                <div className="text">Terms & Conditions</div>
                                <div className="text">Privacy</div>
                                <div className="text">Cookies</div>
                                <div className="text">Security</div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Partner;