function Team() {
    return (
        <div className="container mt-5">
            {/* SECTION TITLE */}
            <div className="row pt-5 mb-4 border-top">
                <h1 className="text-center">People</h1>
            </div>
            {/* CONTENT */}
            <div
                className="row text-muted align-items-center"
                style={{ lineHeight: "1.8", fontSize: "1.1em" }}
            >
                {/* LEFT PROFILE */}
                <div className="col-5 text-center p-5">
                    <img
                        src="media/images/nithinkamath.jpg"
                        alt="Nithin Kamath"
                        style={{ borderRadius: "50%", width: "45%" }}
                        className="mb-4"
                    />
                    <h4 className="mb-1">Nithin Kamath</h4>
                    <h6>Founder & CEO</h6>
                </div>
                {/* RIGHT TEXT */}
                <div className="col-7 p-5">
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the
                        hurdles he faced during his decade-long stint as a trader. Today,
                        Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee
                        (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>Playing basketball is his zen.</p>
                    <p>
                        Connect on{" "}
                        <a href="#" className="text-decoration-none">Homepage</a> /{" "}
                        <a href="#" className="text-decoration-none">TradingQnA</a> /{" "}
                        <a href="#" className="text-decoration-none">Twitter</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Team;

