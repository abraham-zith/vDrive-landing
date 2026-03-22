import './TrustSafety.css';

const safetyCards = [
  {
    id: 'verified',
    title: 'Verified Drivers',
    description: 'Every driver undergoes thorough background verification.',
    image: '/images/trust_verified_drivers.png', // Generated
    hasImage: true
  },
  {
    id: 'documents',
    title: 'Document Checked',
    description: 'Aadhaar and driving license verified for authenticity.',
    image: '/images/trust_document_checked.png', // Generated
    hasImage: true
  },
  {
    id: 'face-to-face',
    title: 'Face-to-Face',
    description: 'Physical verification at our Chennai office.',
    image: '/images/trust_face_to_face.png', // Generated
    hasImage: true
  },
  {
    id: 'secure',
    title: 'Secure Rides',
    description: 'End-to-end encryption and secure payments.',
    image: '/images/trust_secure_rides.png', // Generated
    hasImage: true
  }
];

export default function TrustSafety() {
  return (
    <section className="trust-safety" id="trust-&-safety">
      <div className="container">

        {/* Section Header */}
        <div className="trust-safety-header flex flex-col items-center flex-center text-center">
          <div className="badge badge-blue">
            Trust & Safety
          </div>
          <p className="trust-safety-subtitle">
            Your safety is our top priority. Every <span className="highlight-text">VDrive journey</span> is backed by our verification process.
          </p>
        </div>

        {/* 4 Column Cards Grid */}
        <div className="trust-safety-grid">
          {safetyCards.map((card) => (
            <div key={card.id} className="safety-card">
              <div className="safety-card-image-wrapper">
                {card.hasImage ? (
                  <img src={card.image} alt={card.title} loading="lazy" />
                ) : (
                  <div className="image-placeholder">
                    <span>Image Generating...</span>
                  </div>
                )}
              </div>
              <div className="safety-card-content">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
