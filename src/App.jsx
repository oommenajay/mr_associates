import './App.css'
import { FAQ } from './components/FaqComponent/FAQ'
import { FinancePage } from './components/Form/FinancePage'
import LocationsSection from './components/locations/LocationsSection'
import { MainFirstContent } from './components/MainFirstContent/MainFirstContent'
import Navbar from './components/navbar/Navbar'
import Services from './components/Services/Services'
import StatsSection from './components/stats/StatsSection'
import { TeamSection } from './components/TeamSection/TeamSection'
import { TeamSection2 } from './components/TeamSection/TeamSection2'

function App() {
  return (
    <>
      <Navbar />
      <MainFirstContent />
      <StatsSection />
      <Services />
      {/* <TeamSection /> */}
      <TeamSection2 />
      <LocationsSection />
      <FAQ />
      <FinancePage />
    </>

  )
}

export default App
