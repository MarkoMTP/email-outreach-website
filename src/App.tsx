import Hero from "./components/Hero";
import Problem from "./components/Problem";
import SmartInbox from "./components/SmartInbox";
import WhyItWorks from "./components/WhyItWorks";
import WhoItsFor from "./components/WhoItsFor";
import Story from "./components/Story";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import MainForm from "./components/MainForm.js";
import "./App.css";
import CompetitiveAdvantage from "./components/CompetitiveAdv.js";
import ThreeComponents from "./components/Threecompontents.js";
import ManualProspectingProblem from "./components/ManualProspectingProblem.js";

function App() {
  return (
    <div className="app">
      <Hero />
      <Problem />
      <ManualProspectingProblem />
      <ThreeComponents />
      <SmartInbox />
      <WhyItWorks />
      <WhoItsFor />
      <Story />
      <Pricing />
      <CompetitiveAdvantage></CompetitiveAdvantage>
      <FAQ />
      <FinalCTA />
      <MainForm />
      <Footer />
    </div>
  );
}

export default App;
