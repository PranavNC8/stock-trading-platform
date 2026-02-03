function Hero() {
  return (
    <section className="container-fluid py-5" id="supportHero">
      {/* TOP BAR */}
      <div className="container d-flex justify-content-between align-items-center mb-5">
        <h5 className="mb-0">Support Portal</h5>

        {/* was <a href="#"> */}
        <button
          type="button"
          className="btn btn-link text-white p-0 text-decoration-none"
        >
          Track Tickets
        </button>
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
              {/* ALL were <a href="#"> */}
              <button className="btn btn-link text-white p-0 text-decoration-none">
                Track account opening
              </button>

              <button className="btn btn-link text-white p-0 text-decoration-none">
                Track segment activation
              </button>

              <button className="btn btn-link text-white p-0 text-decoration-none">
                Intraday margins
              </button>

              <button className="btn btn-link text-white p-0 text-decoration-none">
                Kite user manual
              </button>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="col-5">
            <h5 className="mb-3">Featured</h5>
            <ol className="ps-3">
              <li className="mb-2">
                <button className="btn btn-link text-white p-0 text-decoration-none text-start">
                  Current takeovers and delisting – January 2024
                </button>
              </li>
              <li>
                <button className="btn btn-link text-white p-0 text-decoration-none text-start">
                  Latest intraday leverages – MIS & CO
                </button>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
