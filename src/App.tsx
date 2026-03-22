






import Header from './Components/Header';
import Hero from './Components/Hero';
import BottomNav from './Components/BottomNav';
import TrustSafety from './Components/TrustSafety';
import Pricing from './Components/Pricing';
import AppPromotion from './Components/AppPromotion';
import AppShowcase from './Components/AppShowcase/AppShowcase';

import RideType from './Components/RideType';
import About from './Components/About';
import BecomeDriver from './Components/BecomeDriver';
import FAQ from './Components/FAQ';
import Footer from './Components/Footer';


function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <RideType />
        <AppPromotion />


        <Pricing />
        <TrustSafety />
        <BecomeDriver />
        <AppShowcase />

        <FAQ />
        <Footer />
        <BottomNav />
      </main>
    </>
  );
}

export default App;
