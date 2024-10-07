
import Curriculum from '../Components/Curriculum';
import About from '../Components/About';
import HeroSection from '../Components/HeroSection';
import OurMissionSection from '../Components/OurMissionSection';
import DropShipping from '../Components/DropShipping';
import CounterUpSection from '../Components/CounterUpSection';
import PricingSection from '../Components/PricingSection';
import PracticeCounter from '../Components/PracticeCounter';

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Curriculum />
      <OurMissionSection />
      <DropShipping />
      {/* <CounterUpSection /> */}
      <PracticeCounter />
      <PricingSection />
    </>
  )
}

export default Home;