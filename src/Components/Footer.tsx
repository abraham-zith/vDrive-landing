import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      {/* Top Skyline Decoration */}
      <div className="footer-skyline-wrapper" >
        <img src="/images/footer.png" alt="City Skyline" className="footer-skyline-img" />

      </div>
      <div className="footer-divider-tops"></div>
      <div className='footers'>

        <div className="footer-main">
          {/* Column 1: Brand & Contact */}
          <div className="footer-column">
            <div className="footer-logo-container">
              <img src="/images/Logo.svg" alt="VDrive Logo" className="footer-logo-img" />
            </div>
            <p className="footer-description">
              Transform operational complexity into organized workflows, measurable outcomes, and scalable success.
            </p>
            <div className="footer-contact-item">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              hello@vdrive.com
            </div>
            <div className="footer-contact-item">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              96872 00000
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-column">
            <h4>Quick Link</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About us</a></li>
              <li><a href="#ride-type">Ride type</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#trust-&-safety">Trust & Safety</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          {/* Column 3: Join Us */}
          <div className="footer-column">
            <h4>Join Us</h4>
            <div className="footer-links social-links-stack">
              <a href="https://www.linkedin.com/company/zithtech/" className="footer-social-link linkedin" target="_blank" rel="noopener noreferrer">
                <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.23 24 24 23.227 24 22.271V1.729C24 .774 23.23 0 22.225 0z" />
                </svg>
                LinkedIn
              </a>
              <a href="https://instagram.com" className="footer-social-link instagram" target="_blank" rel="noopener noreferrer">
                <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.148.259-2.911.556-.789.306-1.459.717-2.126 1.384-.667.667-1.078 1.337-1.384 2.126-.297.763-.499 1.634-.556 2.911-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.057 1.277.259 2.148.556 2.911.306.789.717 1.459 1.384 2.126.667.667 1.337 1.078 2.126 1.384.763.297 1.634.499 2.911.556 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.057 2.148-.259 2.911-.556.789-.306 1.459-.717 2.126-1.384.667-.667 1.078-1.337 1.384-2.126.297-.763.499-1.634.556-2.911.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.057-1.277-.259-2.148-.556-2.911-.306-.789-.717-1.459-1.384-2.126-.667-.667-1.337-1.078-2.126-1.384-.763-.297-1.634-.499-2.911-.556-1.28-.058-1.688-.072-4.947-.072zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Instagram
              </a>
            </div>
          </div>

          {/* Column 4: Location */}
          <div className="footer-column">
            <h4>Company Location</h4>
            <div className="location-wrapper">
              <img src="/images/Gemini_Generated_Image_x9m40ex9m40ex9m4-removebg-preview.png" alt="India Flag" className="india-flag" />
              <p className="footer-address">
                No 121, Rose Gardens, Ramakrishna Puram, Sulur, Chennai, Tamil Nadu - 641402
              </p>
            </div>
          </div>
        </div>

        <div className="footer-dashed-line"></div>

        <div className="footer-bottom-wrapper">
          <div className="footer-bottom-pattern"></div>
          <p className="footer-copyright">
            Copyright © 2026 VDrive | All Rights Reserved
          </p>
        </div>

        {/* Floating Taxi Car */}
        <div className="footer-car-container">
          <img src="/images/Gemini_Generated_Image_a4o9a8a4o9a8a4o9-removebg-preview.png" alt="Taxi Illustration" className="footer-car-img" />
        </div>

      </div>
    </footer>
  );
}
