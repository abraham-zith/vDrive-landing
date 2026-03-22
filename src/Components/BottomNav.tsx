import { useState, useEffect } from 'react';
import './BottomNav.css';
import { Home, Info, Car, IndianRupee, Workflow, ShieldCheck, UserPlus, HelpCircle, Smartphone, MapPin } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home', href: '#home' },
  { icon: Info, label: 'About', href: '#about-us' },
  { icon: Car, label: 'Rides', href: '#ride-type' },
  { icon: Workflow, label: 'Process', href: '#process' },
  { icon: IndianRupee, label: 'Pricing', href: '#pricing' },
  { icon: ShieldCheck, label: 'Safety', href: '#trust-&-safety' },
  { icon: UserPlus, label: 'Driver', href: '#become-driver' },

  { icon: Smartphone, label: 'App', href: '#app-showcase' },
  { icon: HelpCircle, label: 'FAQ', href: '#faq' },
  { icon: MapPin, label: 'Footer', href: '#footer' },
];

export default function BottomNav() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observerOptions = {
      root: null,
      // rootMargin: '-45% 0px -45% 0px', // Narrow slit in the middle
      rootMargin: '-30% 0px -30% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections that correspond to nav items
    navItems.forEach((item) => {
      const sectionId = item.href.replace('#', '');
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Auto-scroll active item into view
  useEffect(() => {
    const activeElement = document.querySelector('.bottom-nav-item.active');
    if (activeElement) {
      activeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [activeSection]);

  return (
    <nav className="bottom-nav">
      <div className="bottom-nav-container">
        {navItems.map((item) => {
          const sectionId = item.href.replace('#', '');
          const isActive = activeSection === sectionId;

          return (
            <a
              key={item.label}
              href={item.href}
              className={`bottom-nav-item ${isActive ? 'active' : ''}`}
            >
              <item.icon size={22} className="bottom-nav-icon" />
              <span className="bottom-nav-label">{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
