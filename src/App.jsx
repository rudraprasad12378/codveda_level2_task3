function App() {
  return (
    <>
      {/* Navbar */}
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
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
      <section className="py-5 text-center bg-primary text-white">
  <div className="container">

    <h1 className="display-3 fw-bold">
      Build Modern Websites
    </h1>

    <p className="lead mt-3">
      We create responsive, modern and scalable web applications.
    </p>

    <button className="btn btn-light btn-lg mt-3">
      Get Started
    </button>

  </div>
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
{/* Pricing Section */}
<section id="pricing" className="py-5 bg-light">
  <div className="container">

    <h2 className="text-center fw-bold mb-5">
      Pricing Plans
    </h2>

    <div className="row g-4">

      <div className="col-md-4">
        <div className="card text-center shadow h-100">
          <div className="card-body">
            <h3>Basic</h3>
            <h1 className="text-primary">$19</h1>
            <p>✔ Responsive Website</p>
            <p>✔ Email Support</p>
            <button className="btn btn-outline-primary">
              Choose Plan
            </button>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card text-center shadow border-primary h-100">
          <div className="card-body">
            <h3>Pro</h3>
            <h1 className="text-success">$49</h1>
            <p>✔ Everything in Basic</p>
            <p>✔ Database Integration</p>
            <p>✔ Priority Support</p>
            <button className="btn btn-success">
              Most Popular
            </button>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card text-center shadow h-100">
          <div className="card-body">
            <h3>Enterprise</h3>
            <h1 className="text-danger">$99</h1>
            <p>✔ Custom Development</p>
            <p>✔ Cloud Hosting</p>
            <p>✔ 24/7 Support</p>
            <button className="btn btn-outline-danger">
              Contact Us
            </button>
          </div>
        </div>
      </div>

    </div>

  </div>
</section>
{/* Contact */}
<section id="contact" className="container py-5">

  <h2 className="text-center fw-bold mb-5">
    Contact Us
  </h2>

  <div className="row justify-content-center">

    <div className="col-md-6">

      <form>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Your Name"
        />

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email Address"
        />

        <textarea
          className="form-control mb-3"
          rows="5"
          placeholder="Your Message"
        ></textarea>

        <button className="btn btn-primary w-100">
          Send Message
        </button>

      </form>

    </div>

  </div>

</section>
{/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <h5>TechNova</h5>

        <p>Building Modern Digital Experiences</p>

        <div className="mb-3">
          <i className="bi bi-facebook fs-3 me-3"></i>

          <i className="bi bi-instagram fs-3 me-3"></i>

          <i className="bi bi-linkedin fs-3 me-3"></i>

          <i className="bi bi-github fs-3"></i>
        </div>

        <p className="mb-0">
          © 2026 TechNova. All Rights Reserved.
        </p>
      </footer>
    </>
  );
 
}

export default App;
