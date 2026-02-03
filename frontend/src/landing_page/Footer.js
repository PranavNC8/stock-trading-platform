import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="container-fluid border-top mt-5 pt-5">
      <div className="container">
        <div className="row">

          {/* COLUMN 1 */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-normal mb-3">Company</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/about" className="text-decoration-none text-muted">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/product" className="text-decoration-none text-muted">
                  Products
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/pricing" className="text-decoration-none text-muted">
                  Pricing
                </Link>
              </li>
              <li className="mb-2">
                <button className="btn btn-link p-0 text-muted text-decoration-none">
                  Careers
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 2 */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-normal mb-3">Support</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/support" className="text-decoration-none text-muted">
                  Contact us
                </Link>
              </li>
              <li className="mb-2">
                <button className="btn btn-link p-0 text-muted text-decoration-none">
                  Support portal
                </button>
              </li>
              <li className="mb-2">
                <button className="btn btn-link p-0 text-muted text-decoration-none">
                  Downloads & resources
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-normal mb-3">Account</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/signup" className="text-decoration-none text-muted">
                  Open an account
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/login" className="text-decoration-none text-muted">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4 */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-normal mb-3">More</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="https://zerodha.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-muted"
                >
                  Zerodha.tech
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://twitter.com/zerodhaonline"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-muted"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>

        </div>

        <hr />

        <p className="text-center text-muted small mb-0">
          © 2026 Zerodha Clone. Built for learning purposes.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
