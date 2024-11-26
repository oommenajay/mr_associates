import './App.css'
import { FAQ } from './components/FaqComponent/FAQ'
import { FinancePage } from './components/Form/FinancePage'
import { MainFirstContent } from './components/MainFirstContent/MainFirstContent'
import Navbar from './components/navbar/Navbar'
import Services from './components/Services/Services'
import { TeamSection } from './components/TeamSection/TeamSection'

function App() {
  return (
    <>
      <Navbar />
      <MainFirstContent />
      <Services />
      <TeamSection />
      <FAQ />
      <FinancePage />
    </>

  )
}

export default App
