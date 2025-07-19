import "./blue.scss";
import color from "../../assets/color.webp";

let Blue = ()=> {
    return(
        <div id="Earn">
            <div id="earnMid">
                <div className="earnDuo">
                    <img src={color} alt="" />
                </div>
                <div className="earnDuo">
                    <h1>Earn money with Zooma</h1>

                    <p id="blueText1">Join our community of 4.5M+ Zooma partners around the world.
                    </p>

                    <p id="blueText2">Set your own schedule and make money on your terms by driving and delivering.</p>

                    <button type="button" id="btn">Apply to drive </button>
                </div>
            </div>
        </div>
    )
}

export default Blue;