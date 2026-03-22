import { useState } from 'react';
import './BecomeDriver.css';

const steps = [
  {
    id: 1,
    title: 'Register Online',
    description: 'Create your account by entering your basic details and vehicle information.',
  },
  {
    id: 2,
    title: 'Upload Documents',
    description: 'Submit your driving license, vehicle registration, and ID for verification.',
  },
  {
    id: 3,
    title: 'Physical Verification',
    description: 'Get approved, go online, and start accepting ride requests to earn.',
  }
];

export default function BecomeDriver() {
  const [activeStep, setActiveStep] = useState(1);

  const renderContent = () => {
    switch (activeStep) {
      case 1:
        return (
          <div className="dynamic-content fade-in">
            <div className="register-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your full name" />
              </div>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your full name" />
              </div>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your full name" />
              </div>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your full name" />
              </div>
            </div>
            <button className="primary-action-btn">Continue to Drive</button>
          </div>
        );
      case 2:
        return (
          <div className="dynamic-content fade-in">
            <div className="upload-grid">
              <div className="upload-card">
                <svg className="upload-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                </svg>
                <h4>Aadhaar Card</h4>
                <p>Upload your Document</p>
              </div>
              <div className="upload-card">
                <svg className="upload-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                </svg>
                <h4>Driving License</h4>
                <p>Upload your Document</p>
              </div>
              <div className="upload-card">
                <svg className="upload-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                </svg>
                <h4>PAN Card</h4>
                <p>Upload your Document</p>
              </div>
            </div>
            <button className="primary-action-btn">Continue to Drive</button>
          </div>
        );
      case 3:
        return (
          <div className="dynamic-content fade-in">
            <div className="verification-container">
              <p>Visit our Chennai office</p>
              <div className="location-box">
                <div className="location-icon-wrapper">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div className="location-info">
                  <h4>Head Office</h4>
                  <p className="address">Chennai, Tamil Nadu</p>
                  <p className="note">Face-to-face verification required</p>
                </div>
              </div>
            </div>
            <button className="primary-action-btn">Register Now</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="become-driver-section" id="become-driver">
      <div className="become-driver-container">
        <h2 className="become-driver-title">
          3 Steps to Become a Driver<br /> with <span>VDrive</span>
        </h2>

        <div className="become-driver-content">
          <div className="step-navigation">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`step-item ${activeStep === step.id ? 'active' : ''}`}
                onClick={() => setActiveStep(step.id)}
              >
                <div className="step-number">{step.id}</div>
                <div className="step-info">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
            <button className="contact-button">Contact us</button>
          </div>

          <div className="content-panel">
            <div className="panel-header">
              <h2>{steps[activeStep - 1].title}</h2>
            </div>
            {renderContent()}
          </div>
        </div>
      </div>
    </section>
  );
}
