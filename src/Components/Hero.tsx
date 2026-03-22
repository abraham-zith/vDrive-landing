import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        {/* Left Content */}
        <div className="hero-content">
          <div className="badge">

            <span>India's #1 Verified Driver Platform</span>
          </div>

          <h1 className="hero-title">
            Book verified drivers <br />
            in <span className="highlight">VDrive,</span>Ride with <br />
            confidence
          </h1>

          <p className="hero-description">
            Professional, background-verified drivers for your personal vehicle. Safe, reliable service across 100+ cities.
          </p>

          <div className="hero-features-image flex" style={{ marginBottom: '2rem' }}>
            <img src="/images/hero_features_raw-removebg-preview.png" alt="24/7 Ride Availability | Transparent Pricing | Verified Drivers" className="img-fluid" style={{ maxWidth: '100%', borderRadius: '0', boxShadow: 'none' }} />
          </div>

          <div className="hero-actions flex gap-4">
            <button className="btn btn-primary hero-btn flex" style={{ alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}>
              Book Ride Now
              <img src="/images/hero_btn_icon_v2.png" alt="Book Icon" style={{ height: '24px', width: 'auto' }} />
            </button>
            <button className="btn btn-outline hero-btn">Create an Account →</button>
          </div>
        </div>


        <div className="hero-visual">
          <img
            src="/images/hero_illustration_transparent.png"
            alt="Hero Illustration"
            className="hero-illustration-img"
          />
        </div>
      </div>
    </section>
  );
}
