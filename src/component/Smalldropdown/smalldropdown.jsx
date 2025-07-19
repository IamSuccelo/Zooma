import { useContext } from "react";
import "./smalldropdown.scss";
import { dropContext } from "../../context/menuContext";
import { ProdsProvider, productContext } from "../../context/product";
import { earnContext } from "../../context/earn";
import { compContext } from "../../context/company";
import { safeContext } from "../../context/safety";
import { supportContext } from "../../context/support";
import { otherContext } from "../../context/other";

let Smalldrop = ({...otherProps})=> {


    //OTHER

    let {others, setOther} = useContext(otherContext);

    let otherName = ["noOther", "showOther"];

    let otherHandler = (event)=>{
        if(event.target.children[1].innerText==="↑"){
            setOther(1);
        }
        else{
            setOther(0);
        }
    }

    let othernameHandler = (event) =>{
        if(event.target.nextElementSibling.innerText==="↑"){
            setOther(1);
        }
        else{
            setOther(0);
        }
    }

    let othercloseHandler = (event) =>{
        if(event.target.innerText==="↑"){
            setOther(1);
        }
        else{
            setOther(0);
        }
    }

    //END

    //SUPPORT

    let {supp, setSupp} = useContext(supportContext);

    let suppName = ["nosupp", "showsupp"];

    let suppHandler = (event)=>{
        if(event.target.children[1].innerText==="↑"){
            setSupp(1);
        }
        else{
            setSupp(0);
        }
    }

    let suppnameHandler = (event) =>{
        if(event.target.nextElementSibling.innerText==="↑"){
            setSupp(1);
        }
        else{
            setSupp(0);
        }
    }

    let suppcloseHandler = (event) =>{
        if(event.target.innerText==="↑"){
            setSupp(1);
        }
        else{
            setSupp(0);
        }
    }

    //END

    

    //SAFETY

    let {safe, setSafe} = useContext(safeContext);

    let safeName = ["nosafe", "showsafe"];

    let safeHandler = (event)=>{
        if(event.target.children[1].innerText==="↑"){
            setSafe(1);
        }
        else{
            setSafe(0);
        }
    }

    let safenameHandler = (event)=>{
        if(event.target.nextElementSibling.innerText==="↑"){
            setSafe(1);
        }
        else{
            setSafe(0);
        }

    }

    let safecloseHandler = (event)=>{
        if(event.target.innerText==="↑"){
            setSafe(1);
        }
        else{
            setSafe(0);
        }
    }

    //END


    //COMPANY

    let {comp, setComp} = useContext(compContext);

    let compName = ["nocomp", "showcomp"];

    let compHandler = (event)=>{
        if(event.target.children[1].innerText==="↑"){
            setComp(1);
        }
        else{
            setComp(0);
        }
    }


    let compnameHandler = (event)=>{
        if(event.target.nextElementSibling.innerText==="↑"){
            setComp(1);
        }
        else{
            setComp(0);
        }
    }

    let compcloseHandler = (event)=>{
        if(event.target.innerText==="↑"){
            setComp(1);
        }
        else{
            setComp(0);
        }
    }

    //END POINT


    //EARN JSX

    let {earn, setEarn} = useContext(earnContext);

    //THIS IS THE JSX FOR YOUR EARN

    let earnName= ["noearn", "showearn"];

    let earnHandler = (event)=>{
        if(event.target.children[1].innerText==="↑"){
            setEarn(1);
        }
        else{
            setEarn(0);
        }
    }


    let earnnameHandler = (event) =>{
        if(event.target.nextElementSibling.innerText==="↑"){
            setEarn(1);
        }
        else{
            setEarn(0);
        }
    }

    let earncloseHandler = (event) =>{
        if(event.target.innerText==="↑"){
            setEarn(1);
        }
        else{
            setEarn(0)
        }
    }


    //END POINT




    //PRODUCT JSX

    let {prods, setProd} = useContext(productContext);

    //THIS IS THE JSX FOR YOUR PRODUCT

    let prodNames = ["noprod", "showprod"];

    let prodHandler = (event)=>{
        if(event.target.children[1].innerText==="↑"){
            setProd(1);
        }
        else{
            setProd(0);
        }
    }

    let pronameHandler = (event)=>{
        if(event.target.nextElementSibling.innerText==="↑"){
            setProd(1);
        }
        else{
            setProd(0);
        }
    }

    let procloseHandler = (event)=>{
        if(event.target.innerText==="↑"){
            setProd(1);
        }
        else{
            setProd(0);
        }
    }

    //END POINT;

    
    let {drop, setDrop}=useContext(dropContext);

    let closeHandler=()=>{
        setDrop(2);
    }

    return(
        <div {...otherProps}>

            <div id="main">

            <div id="FatherDiv">
                <div id="Header">
                    <div id="left">
                        <h1>Zooma</h1>
                    </div>

                    <div id="right">
                        <div id="en">
                            🌏 EN
                        </div>

                        <div id="click" onClick={closeHandler}>✖</div>
                    </div>
                    
            </div>

        <div id="content-container">
            <div className="c-c-container">

            <div className="context" >
                <div className="plain" onClick={prodHandler}>
                    <h2 onClick={pronameHandler}>Products</h2>

                    <p onClick={procloseHandler}>{prods===0?"↑":"↓"}</p>
                </div>

                <div className={prodNames[prods]}>
                    <p>Rides</p>
                    <p>Trotinete</p>
                    <p>Zooma Market</p>
                    <p>Zooma Food</p>
                    <p>Zooma Drive</p>
                    <p>Zooma Business</p>
                    <p>E-Bikes</p>
                    <p>Zooma Plus</p>
                </div>
            </div>

            <div className="context">
                <div className="plain" onClick={earnHandler}>
                    <h2 onClick={earnnameHandler}>Earn With Zooma</h2>

                    <p onClick={earncloseHandler}> {earn===0?"↑":"↓"}</p>
                </div>

                <div className={earnName[earn]}>
                    <p>Drivers</p>
                    <p>Couriers</p>
                    <p>Zooma Food Merchants</p>
                    <p>Fleets</p>
                    <p>Franchise</p>
                </div>

            </div>

            <div className="context">
                <div className="plain" onClick={compHandler}>
                    <h2 onClick={compnameHandler}>Company</h2>

                    <p onClick={compcloseHandler}>{comp===0?"↑":"↓"}</p>
                </div>
                
                <div className={compName[comp]}>
                    <p>Careers</p>
                    <p>About Zooma</p>
                    <p>Substainability at Zooma</p>
                    <p>Project Zero</p>
                    <p>Blog</p>
                    <p>Press</p>
                    <p>Brand guidelines</p>
                </div>
            </div>

            <div className="context">
                <div className="plain" onClick={safeHandler}>
                    <h2 onClick={safenameHandler}>Safety</h2>

                    <p onClick={safecloseHandler}>{safe===0?"↑":"↓"}</p>
                </div>
                
                <div className={safeName[safe]}>
                    <p>Rider safety</p>
                    <p>Driver safety</p>
                    <p>Scooter safety</p>
                    <p>Safety tab</p>
                </div>
            </div>

            <div className="context">
                <div className="plain" onClick={suppHandler}>
                    <h2 onClick={suppnameHandler}>Support</h2>

                    <p onClick={suppcloseHandler}>{supp===0?"↑":"↓"}</p>
                </div>
                
                <div className={suppName[supp]}>
                    <p>For riders</p>
                    <p>For drivers</p>
                    <p>For couriers</p>
                    <p>Zooma Food</p>
                    <p>For fleet owners</p>
                    <p>For restaurant</p>
                    <p>Zooma Business</p>
                </div>
            </div>

            <div className="context">
                <div className="plain" onClick={otherHandler}>
                    <h2 onClick={othernameHandler}>Others</h2>
                    
                    <p onClick={othercloseHandler}>{others===0?"↑":"↓"}</p>
                </div>
                
                <div className={otherName[others]}>
                    <p>Suppliers</p>
                    <p>Terms & Conditions</p>
                    <p>Cookies</p>
                    <p>Security</p>
                </div>
            </div>

            <div id="btn-cover">
                <div className="btns">
                    <h4>Get a ride in minutes!</h4>

                    <button type="button" id="first-b">
                        Download Zooma App
                    </button>
                </div>  
                <div className="btns">
                    <h4>Find your favorite food!</h4>

                    <button type="button" id="second-b">
                        Download Zooma Food app
                    </button>
                </div>
            </div>
            

        </div>


            </div>

          </div>

        </div>

        </div>
        
    )
}

export default Smalldrop;
