function Support() {
    return (
        <div className="container my-5">

            {/* ================= CREATE TICKET SECTION ================= */}
            <div className="row mb-5">
                <h1 className="fs-2 mb-5">
                    To create a ticket, select a relevant topic
                </h1>

                {/* COLUMN 1 */}
                <div className="col-4 px-4">
                    <h5 className="mb-3">
                        <i className="fa-solid fa-plus me-2"></i>
                        Account Opening
                    </h5>

                    <div className="d-flex flex-column gap-2">
                        <a href="#" className="text-decoration-none">Online Account Opening</a>
                        <a href="#" className="text-decoration-none">Offline Account Opening</a>
                        <a href="#" className="text-decoration-none">Company, Partnership and HUF Account Opening</a>
                        <a href="#" className="text-decoration-none">NRI Account Opening</a>
                        <a href="#" className="text-decoration-none">Charges at Zerodha</a>
                        <a href="#" className="text-decoration-none">Zerodha IDFC FIRST Bank 3-in-1 Account</a>
                        <a href="#" className="text-decoration-none">Getting Started</a>
                    </div>
                </div>

                {/* COLUMN 2 */}
                <div className="col-4 px-4">
                    <h5 className="mb-3">
                        <i className="fa-regular fa-address-card me-2"></i>
                        Your Zerodha Account
                    </h5>

                    <div className="d-flex flex-column gap-2">
                        <a href="#" className="text-decoration-none">Login Credentials</a>
                        <a href="#" className="text-decoration-none">Account Modification and Segment Addition</a>
                        <a href="#" className="text-decoration-none">DP ID and Bank Details</a>
                        <a href="#" className="text-decoration-none">Your Profile</a>
                        <a href="#" className="text-decoration-none">Transfer and Conversion of Shares</a>
                    </div>
                </div>

                {/* COLUMN 3 */}
                <div className="col-4 px-4">
                    <h5 className="mb-3">
                        <i className="fa-regular fa-chart-bar me-2"></i>
                        Trading & Platforms
                    </h5>

                    <div className="d-flex flex-column gap-2">
                        <a href="#" className="text-decoration-none">Margin, Leverage, Product and Order Types</a>
                        <a href="#" className="text-decoration-none">Kite Web and Mobile</a>
                        <a href="#" className="text-decoration-none">Trading FAQs</a>
                        <a href="#" className="text-decoration-none">Corporate Actions</a>
                        <a href="#" className="text-decoration-none">Sensibull</a>
                        <a href="#" className="text-decoration-none">Kite API</a>
                        <a href="#" className="text-decoration-none">Pi and Other Platforms</a>
                        <a href="#" className="text-decoration-none">Stock Reports</a>
                    </div>
                </div>
            </div>

            {/* ================= GETTING STARTED SECTION ================= */}
            <div className="row mb-4">
                <h5 className="text-primary">Getting started</h5>
            </div>

            <div className="row text-muted" style={{ lineHeight: "2" }}>

                {/* FUNDS */}
                <div className="col-4">
                    <h6 className="mb-3">
                        <i className="fa-solid fa-wallet me-2"></i>
                        Funds
                    </h6>

                    <a href="#" className="d-block text-decoration-none">Adding funds</a>
                    <a href="#" className="d-block text-decoration-none">Fund withdrawal</a>
                    <a href="#" className="d-block text-decoration-none">eMandates</a>
                    <a href="#" className="d-block text-decoration-none">Adding bank accounts</a>
                </div>

                {/* CONSOLE */}
                <div className="col-4">
                    <h6 className="mb-3">
                        <i className="fa-solid fa-circle-dot me-2"></i>
                        Console
                    </h6>

                    <a href="#" className="d-block text-decoration-none">Reports</a>
                    <a href="#" className="d-block text-decoration-none">Ledger</a>
                    <a href="#" className="d-block text-decoration-none">Portfolio</a>
                    <a href="#" className="d-block text-decoration-none">60 Day Challenge</a>
                    <a href="#" className="d-block text-decoration-none">IPO</a>
                    <a href="#" className="d-block text-decoration-none">Referral Program</a>
                </div>

                {/* COIN */}
                <div className="col-4">
                    <h6 className="mb-3">
                        <i className="fa-solid fa-coins me-2"></i>
                        Coin
                    </h6>

                    <a href="#" className="d-block text-decoration-none">Understanding mutual funds</a>
                    <a href="#" className="d-block text-decoration-none">About Coin</a>
                    <a href="#" className="d-block text-decoration-none">Buying and selling through Coin</a>
                    <a href="#" className="d-block text-decoration-none">Starting an SIP</a>
                    <a href="#" className="d-block text-decoration-none">Managing your portfolio</a>
                    <a href="#" className="d-block text-decoration-none">Coin app</a>
                    <a href="#" className="d-block text-decoration-none">Moving to Coin</a>
                    <a href="#" className="d-block text-decoration-none">Government securities</a>
                </div>
            </div>
        </div>
    );
}

export default Support;
