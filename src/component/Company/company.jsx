import "./company.scss";
import compan from "../../assets/company.webp"

let Company = ()=>{
    return(
        <div id="Company-cover">
            <div id="company-container">
                <div className="company">
                    <img src={compan} alt="photo" />
                </div>
                <div className="company">
                    <h1>Company information</h1>
                    <h3>Legal</h3>
                    <p>Terms and conditions</p>
                </div>
            </div>
        </div>
    )
}

export default Company;