import './About.css';

export default function About() {
  return (
    <section className="about" id="about-us">
      <div className="container">
        <div className="about-container">
          {/* Subtle Grid Background (Left side only) */}
          <div className="about-grid-bg"></div>

          <div className="about-content-grid">
            {/* Left Column Content */}
            <div className="about-text-content">
              <div className="badge badge-blue">
                About us
              </div>

              <h2 className="about-title">
                Driving the Future of Smart and Reliable Travel
              </h2>

              <p className="about-description">
                We are a modern ride-booking platform making city travel simple, safe, and reliable. We connect riders with trusted drivers through a fast and seamless booking experience.
              </p>
            </div>

            {/* Right Column Illustrations */}
            {/* Right Column Illustration */}
            <div className="about-visuals-new">
              <img 
                src="/images/about_composite_transparent.png" 
                alt="VDrive About Us Illustration" 
                className="about-composite-img" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
