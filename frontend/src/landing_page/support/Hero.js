import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="container-fluid py-5" id="supportHero">

      {/* TOP BAR */}
      <div className="container d-flex justify-content-between align-items-center mb-5">
        <h5 className="mb-0">Support Portal</h5>

        <Link to="/support" className="text-white text-decoration-none">
          Track Tickets
        </Link>
      </div>

      {/* MAIN CONTENT */}
      <div className="container">
        <div className="row gx-5">

          {/* LEFT */}
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
              <Link to="/support" className="text-white text-decoration-none">
                Track account opening
              </Link>
              <Link to="/support" className="text-white text-decoration-none">
                Track segment activation
              </Link>
              <Link to="/support" className="text-white text-decoration-none">
                Intraday margins
              </Link>
              <Link to="/support" className="text-white text-decoration-none">
                Kite user manual
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-5">
            <h5 className="mb-3">Featured</h5>
            <ol className="ps-3">
              <li className="mb-2">
                <Link to="/support" className="text-white text-decoration-none">
                  Current takeovers and delisting – January 2024
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-white text-decoration-none">
                  Latest intraday leverages – MIS & CO
                </Link>
              </li>
            </ol>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
