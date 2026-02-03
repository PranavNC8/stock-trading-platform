function Team() {
  return (
    <section className="container my-5">
      <h2 className="text-center fw-normal mb-5">
        People
      </h2>

      <div className="row justify-content-center">

        {/* TEAM MEMBER */}
        <div className="col-md-4 text-center">
          <img
            src="https://zerodha.com/static/images/about/nithin-kamath.jpg"
            alt="Nithin Kamath"
            className="rounded-circle mb-3"
            width="160"
            height="160"
          />
          <h5 className="fw-normal mb-1">Nithin Kamath</h5>
          <p className="text-muted mb-2">Founder & CEO</p>

          <div className="d-flex justify-content-center gap-3">
            <a
              href="https://zerodha.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-primary"
            >
              Homepage
            </a>

            <a
              href="https://twitter.com/Nithin0dha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-primary"
            >
              Twitter
            </a>

            <a
              href="https://tradingqna.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-primary"
            >
              TradingQnA
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Team;
