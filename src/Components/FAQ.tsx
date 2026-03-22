import { useState } from 'react';
import './FAQ.css';

const faqItems = [
  {
    question: "How do I book a ride with VDrive?",
    answer: "Booking a ride is simple. Enter your pickup and drop-off location, choose your ride type, and confirm your booking. A nearby driver will be assigned to you instantly."
  },
  {
    question: "How can I become a VDrive driver?",
    answer: "You can register through our 'Become a Driver' section by providing your details and uploading the necessary documents for verification."
  },
  {
    question: "What payment methods are available?",
    answer: "We support various payment methods including credit/debit cards, UPI, and digital wallets for a seamless booking experience."
  },
  {
    question: "Are the drivers verified?",
    answer: "Yes, all our drivers undergo a rigorous background check and document verification process to ensure your safety and reliability."
  },
  {
    question: "Can I schedule a ride in advance?",
    answer: "Absolutely! You can use our 'Schedule' feature to book a ride for a specific time and date that suits your convenience."
  },
  {
    question: "Is my ride safe with VDrive?",
    answer: "Safety is our top priority. We provide real-time tracking, SOS features, and 24/7 support to ensure a secure journey for every passenger."
  },
  {
    question: "What if I lose an item during my ride?",
    answer: "If you leave something behind, you can contact our support team through the app, and we'll help you get in touch with the driver to retrieve it."
  }
];

export default function FAQ() {
  const [expandedIndices, setExpandedIndices] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    if (expandedIndices.includes(index)) {
      setExpandedIndices(expandedIndices.filter(i => i !== index));
    } else {
      setExpandedIndices([...expandedIndices, index]);
    }
  };

  // Split items for Two-Column Layout (first 3 left, rest right)
  const leftColumnItems = faqItems.slice(0, 3);
  const rightColumnItems = faqItems.slice(3);

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">

        {/* Section Header */}
        <div className="faq-header">
          <div className="faq-badge">
            FAQ
          </div>
        </div>

        {/* FAQ Grid */}
        <div className="faq-grid">
          {/* Left Column */}
          <div className="faq-column">
            {leftColumnItems.map((item, idx) => (
              <div 
                key={idx} 
                className={`faq-card ${expandedIndices.includes(idx) ? 'expanded' : ''}`}
                onClick={() => toggleItem(idx)}
              >
                <div className="faq-content">
                  <h3 className="faq-question">{item.question}</h3>
                  {expandedIndices.includes(idx) && (
                    <p className="faq-answer fade-in">
                      {item.answer}
                    </p>
                  )}
                </div>
                <div className="faq-icon-btn">
                  {expandedIndices.includes(idx) ? '−' : '+'}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="faq-column faq-column-right">
            {rightColumnItems.map((item, idx) => {
              const actualIdx = idx + 3;
              return (
                <div 
                  key={actualIdx} 
                  className={`faq-card ${expandedIndices.includes(actualIdx) ? 'expanded' : ''}`}
                  onClick={() => toggleItem(actualIdx)}
                >
                  <div className="faq-content">
                    <h3 className="faq-question">{item.question}</h3>
                    {expandedIndices.includes(actualIdx) && (
                      <p className="faq-answer fade-in">
                        {item.answer}
                      </p>
                    )}
                  </div>
                  <div className="faq-icon-btn">
                    {expandedIndices.includes(actualIdx) ? '−' : '+'}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
