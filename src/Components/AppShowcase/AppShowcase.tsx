import './AppShowcase.css';

export default function AppShowcase() {
  return (
    <section className="app-showcase" id="app-showcase">
      {/* The horizontal blue strip - Now Full Width */}
      <div className="showcase-strip-banner">
        <div className="container">
          <div className="app-showcase-content">

            {/* Left Column - Text & Buttons */}
            <div className="app-showcase-text">
              <h2>
                Your Ride is just <br />
                One Tap Away
              </h2>
              <p className="app-showcase-desc">
                Download the vDrive app to book rides quickly,track drivers in real time,and enjoy safe and comfortable travel.
              </p>

              {/* App Download Blocks */}
              <div className="app-download-grid">

                {/* For Rider */}
                <div className="download-block-composite">
                  <p className="download-label">For Rider</p>
                  <img src="/images/Gemini_Generated_Image_gddsh8gddsh8gdds-removebg-preview.png" alt="Download for Rider" className="composite-badge-img rider-badge" />
                </div>

                {/* For Driver */}
                <div className="download-block-composite">
                  <p className="download-label">For Driver</p>
                  <img src="/images/Gemini_Generated_Image_gddsh8gddsh8gdds-removebg-preview.png" alt="Download for Driver" className="composite-badge-img driver-badge" />
                </div>

              </div>
            </div>

            {/* Right Column - Popping Images */}
            <div className="app-showcase-mockups">
              <div className="mockup-pop-wrapper">
                <img
                  src="/images/Gemini_Generated_Image_w394utw394utw394-removebg-preview.png"
                  alt="VDrive App"
                  className="showcase-mockup phone-left"
                />
                <img
                  src="/images/Gemini_Generated_Image_y8npv3y8npv3y8np-removebg-preview.png"
                  alt="VDrive Map"
                  className="showcase-mockup phone-right"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
