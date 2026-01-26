function Hero() {
    return (
        <section className="container-fluid py-5" id="supportHero">

            {/* TOP BAR */}
            <div className="container d-flex justify-content-between align-items-center mb-5">
                <h5 className="mb-0">Support Portal</h5>
                <a href="#" className="text-white">
                    Track Tickets
                </a>
            </div>

            {/* MAIN CONTENT */}
            <div className="container">
                <div className="row gx-5">

                    {/* LEFT SECTION */}
                    <div className="col-7">
                        <h3 className="mb-4">
                            Search for an answer or browse help topics
                            <br />
                            to create a ticket
                        </h3>

                        <input
                            type="text"
                            className="form-control mb-4"
                            placeholder="Eg: how do I activate F&O, why is my order getting rejected.."
                            style={{ maxWidth: "450px" }}
                        />

                        <div className="d-flex flex-wrap gap-3">
                            <a href="#" className="text-white">Track account opening</a>
                            <a href="#" className="text-white">Track segment activation</a>
                            <a href="#" className="text-white">Intraday margins</a>
                            <a href="#" className="text-white">Kite user manual</a>
                        </div>
                    </div>

                    {/* RIGHT SECTION */}
                    <div className="col-5">
                        <h5 className="mb-3">Featured</h5>
                        <ol className="ps-3">
                            <li className="mb-2">
                                <a href="#" className="text-white">
                                    Current takeovers and delisting – January 2024
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white">
                                    Latest intraday leverages – MIS & CO
                                </a>
                            </li>
                        </ol>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Hero;
