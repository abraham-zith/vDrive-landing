import './RideType.css';

const rideOptions = [
  {
    id: 'round-trip',
    title: 'Round Trip',
    image: '/images/Gemini_Generated_Image_84gzcg84gzcg84gz-removebg-preview.png',
    description: 'Perfect for day trips and errands. Pick up and drop back at your location.',
    features: [
      'Same day return',
      'Flexible timing',
      'Best for shopping'
    ]
  },
  {
    id: 'one-way',
    title: 'One Way',
    image: '/images/Gemini_Generated_Image_xe2tkxe2tkxe2tkx-removebg-preview.png',
    description: 'Direct travel from point A to B. Ideal for airport transfers.',
    features: [
      'Direct route',
      'Airport transfers',
      'No return needed'
    ]
  },
  {
    id: 'outstation',
    title: 'Outstation',
    image: '/images/Gemini_Generated_Image_aaas3taaas3taaas-removebg-preview.png',
    description: 'Long distance travel across cities. Experienced highway drivers.',
    features: [
      'Multi-day trips',
      'Highway experts',
      'Luggage space'
    ]
  },
  {
    id: 'scheduled',
    title: 'Scheduled Ride',
    image: '/images/Gemini_Generated_Image_qaxt03qaxt03qaxt-removebg-preview.png',
    description: 'Book in advance for important events. Driver arrives on time.',
    features: [
      'Advance booking',
      'Guaranteed availability',
      'Event-ready'
    ]
  }
];

export default function RideType() {
  return (
    <section className="ride-type" id="ride-type">
      <div className="container">

        {/* Section Header */}
        <div className="ride-type-header flex flex-col items-center flex-center text-center">
          <div className="badge badge-blue">
            Ride Type
          </div>
          <p className="ride-type-subtitle">
            Whether it's a quick errand or a cross-country journey, we've got the perfect ride for you.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="ride-type-grid">
          {rideOptions.map((ride) => (
            <div key={ride.id} className="ride-card">

              {/* Top Image Section - White Background */}
              <div className="ride-card-top">
                <img src={ride.image} alt={ride.title} className="ride-image" />
              </div>

              {/* Bottom Content Section - Light Grey Background */}
              <div className="ride-card-bottom">
                <h3 className="ride-title">{ride.title}</h3>
                <p className="ride-description">{ride.description}</p>

                <ul className="ride-features">
                  {ride.features.map((feature, index) => (
                    <li key={index}><span className="dot-bullet"></span>{feature}</li>
                  ))}
                </ul>

                <button className="btn btn-primary btn-ride">Book Now &rarr;</button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
