import Hero from './components/Hero'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import SmartInbox from './components/SmartInbox'
import WhyItWorks from './components/WhyItWorks'
import WhoItsFor from './components/WhoItsFor'
import Story from './components/Story'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Hero />
      <Problem />
      <HowItWorks />
      <SmartInbox />
      <WhyItWorks />
      <WhoItsFor />
      <Story />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default App
