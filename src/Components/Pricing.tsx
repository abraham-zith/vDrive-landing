import './Pricing.css';

const plans = [
  {
    id: 'elite',
    name: 'Elite Driver',
    description: 'Professional highway experts',
    price: '499',
    features: [
      'Highway driving certified',
      'Long-distance specialists',
      'Night driving trained',
      'First-aid certified'
    ],
    isPopular: false
  },
  {
    id: 'premium',
    name: 'Premium Driver',
    description: 'Luxury experience for VIP rides',
    price: '599',
    features: [
      '5-star rated drivers only',
      'Luxury car experience',
      'Corporate & VIP events',
      'Multi-language support'
    ],
    isPopular: true
  },
  {
    id: 'standard',
    name: 'Standard Driver',
    description: 'Reliable everyday rides',
    price: '299',
    features: [
      'Fully verified drivers',
      'Perfect for daily use',
      'Punctual & professional',
      'Affordable pricing'
    ],
    isPopular: false
  }
];

export default function Pricing() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        
        {/* Section Header */}
        <div className="pricing-header flex flex-col items-center flex-center text-center">
          <div className="badge badge-blue">
            Choose your plan
          </div>
          <p className="pricing-subtitle">
            All drivers are verified and rated. Pick the perfect match for your journey.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-grid">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`pricing-card ${plan.isPopular ? 'popular-card' : ''}`}
            >
              {plan.isPopular && (
                <div className="popular-badge">
                  MOST POPULAR PLAN
                </div>
              )}
              
              <div className="pricing-card-content">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-desc">{plan.description}</p>
                
                <div className="plan-price-wrapper">
                  <span className="currency">₹</span>
                  <span className="plan-price">{plan.price}</span>
                  <span className="per-ride">/ ride</span>
                </div>

                <ul className="plan-features">
                  {plan.features.map((feature, index) => (
                    <li key={index}>
                      <span className="feature-icon">
                        <img src="/images/pricing_tick_icon.png" alt="Tick" style={{ height: '18px', width: 'auto' }} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`btn w-full mt-auto ${plan.isPopular ? 'btn-primary' : 'btn-outline shadow-sm'}`}>
                  Select Plan <span className="btn-arrow">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
