import "./zoomabusiness.scss";
import glass from "../../assets/Zoom.webp";


let Business = ()=> {
    return(
        <div id="biz-cover">

            <div id="bizContain">
                <div className="biz">
                    
                    <img src={glass} alt="" />

                </div>

                <div className="biz">
                        <h1>Zooma Business</h1>


                        <p id="Firstp">Zooma services on a corporate scale.</p>

                        <p id="Secondp">Bring all the benefits of Zooma to your employees, contractors, and clients with Zooma Business. Control, manage, and pay for company-wide orders from a single dashboard and remove the need for manual expense reports.</p>

                        
                        <button type="button" id="btn">Join Zooma Business</button>

                        </div>

            </div>


        </div>
    )
}

export default Business;