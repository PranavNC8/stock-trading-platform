import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="container my-5">
      <div className="row align-items-center">

        {/* LEFT */}
        <div className="col-md-6">
          <h1 className="fw-normal mb-4">
            We pioneered discount broking in India
          </h1>
          <p className="text-muted mb-4">
            Now, we are breaking ground with our technology.
          </p>

          <Link
            to="/about"
            className="btn btn-primary btn-lg"
          >
            Learn more
          </Link>
        </div>

        {/* RIGHT */}
        <div className="col-md-6 text-center">
          <img
            src="https://zerodha.com/static/images/about.png"
            alt="About Zerodha"
            className="img-fluid"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;
