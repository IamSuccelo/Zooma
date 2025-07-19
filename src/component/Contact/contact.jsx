import "./contact.scss";



let Contact = ()=> {
    return(
        <div id="Contact">
            <div id="contactCover">
                <h1>Contact us</h1>

                <p className="head">General support</p>
                <p className="mail">lagos@Zooma.eu</p>

                <p className="head">New driver registrations</p>
                <p className="mail">lagos-signup@Zooma.eu</p>

                <p className="head">Bolt Business support</p>
                <p className="mail">nigeria@Zooma-business.com</p>

                <p className="head">Driver training time</p>
                <p className="h2">Mondays to Fridays: 9am to 4pm</p>

                <p className="head">In-Person support address</p>
                <p className="h2">11 Providence Street, Lekki.</p>

                <p className="head">Office hours</p>
                <p className="h2">Mondays to Fridays: 9am to 3pm</p>

                <div id="btn-cover">
                    <button type="button" id="first">Support & FAQ</button>
                    <button type="button" id="second">lagos@Zooma.eu</button>
                </div>

            </div>
        </div>
    )
}

export default Contact;