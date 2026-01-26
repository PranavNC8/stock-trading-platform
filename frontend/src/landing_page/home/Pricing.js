function Pricing() {
    return (
        <div className="container mb-5" >
            <div className="row align-items-center">

                {/* LEFT CONTENT */}
                <div className="col-4">
                    <h1 className="mb-3">Unbeatable pricing</h1>
                    <p>
                        We pioneered the concept of discount broking and price transparency in India.
                        Flat fees and no hidden charges.
                    </p>

                    <a href="#" className="text-decoration-none">
                        Explore our products <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>

                <div className="col-2"></div>

                {/* RIGHT BOXES */}
                <div className="col-6 text-center mb-5">
                    <div className="row">

                        <div className="col-6 p-2">
                            <div className="border d-flex flex-column justify-content-center align-items-center" style={{ height: "180px" }}>
                                <h1 className="mb-3">₹0</h1>
                                <p className="mb-0">Free equity delivery and <br/> direct mutual fund</p>
                            </div>
                        </div>

                        <div className="col-6 p-2">
                            <div className="border d-flex flex-column justify-content-center align-items-center" style={{ height: "180px" }}>
                                <h1 className="mb-3">₹20</h1>
                                <p className="mb-0">Free equity delivery and <br/> direct mutual fund</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Pricing;
