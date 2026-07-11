function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            TechNova
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#pricing">
                  Pricing
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container text-center py-5">
        <h1 className="display-4 fw-bold">
          Build Modern Websites
        </h1>

        <p className="lead text-muted mt-3">
          Responsive, fast and beautiful web applications using React and Bootstrap.
        </p>

        <button className="btn btn-primary btn-lg mt-3">
          Get Started
        </button>
      </section>
      {/* Services Section */}
<section id="services" className="py-5 bg-light">
  <div className="container">

    <h2 className="text-center fw-bold mb-5">
      Our Services
    </h2>

    <div className="row g-4">

      <div className="col-md-4">
        <div className="card h-100 shadow-sm text-center">
          <div className="card-body">
            <i className="bi bi-code-slash display-3 text-primary"></i>
            <h4 className="mt-3">Web Development</h4>
            <p>
              Build responsive and modern websites using React,
              Bootstrap and the latest web technologies.
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card h-100 shadow-sm text-center">
          <div className="card-body">
            <i className="bi bi-phone display-3 text-success"></i>
            <h4 className="mt-3">Mobile Apps</h4>
            <p>
              Cross-platform mobile applications with clean UI
              and high performance.
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card h-100 shadow-sm text-center">
          <div className="card-body">
            <i className="bi bi-cloud display-3 text-info"></i>
            <h4 className="mt-3">Cloud Solutions</h4>
            <p>
              Secure cloud deployment, hosting, and scalable
              infrastructure solutions.
            </p>
          </div>
        </div>
      </div>

    </div>

  </div>
</section>
{/* Features */}
<section className="container py-5">

  <h2 className="text-center fw-bold mb-5">
    Why Choose Us?
  </h2>

  <div className="row text-center">

    <div className="col-md-4">
      <h3>⚡ Fast</h3>
      <p>Optimized performance for better user experience.</p>
    </div>

    <div className="col-md-4">
      <h3>🔒 Secure</h3>
      <p>Built with security best practices.</p>
    </div>

    <div className="col-md-4">
      <h3>📱 Responsive</h3>
      <p>Looks great on desktops, tablets and phones.</p>
    </div>

  </div>

</section>
    </>
  );
}

export default App;