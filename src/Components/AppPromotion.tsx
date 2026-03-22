import './AppPromotion.css';

export default function AppPromotion() {
  return (
    <section className="app-promotion" id="process">
      <div className="container">
        <div className="app-promotion-content">

          {/* Left Column - Text & Buttons */}
          <div className="app-promotion-text">
            <h2>
              One App for Riders<br />
              One Opportunity for Drivers
            </h2>
            <p className="app-promotion-desc">
              Download our mobile app to book rides instantly or start earning as a driver. Fast, simple, and designed for a better travel experience.
            </p>

            {/* App Download Blocks */}
            <div className="app-download-grid">


              {/* <div className="download-block-composite">
                <img src="/images/app_download_rider.png" alt="Download for Rider" className="composite-badge-img rider-badge" />
              </div>

             
              <div className="download-block-composite">
                <img src="/images/app_download_driver.png" alt="Download for Driver" className="composite-badge-img driver-badge" />
              </div> */}
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

          {/* Right Column - Illustration */}
          <div className="app-promotion-illustration">
            <img
              src="/images/app_promotion_illustration.png"
              alt="VDrive App Illustration with Taxi, Rider, and Driver"
              className="promo-image"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
