
import './App.css'
import { Developers } from './components/Developers'
import { Goals } from './components/Goals'
import InfiniteScroll from './components/Infinite'
import { LandingPage } from './components/LandingPage'
import { Navbar } from './components/Navbar'
import { ProjectProgresses } from './components/ProjectProgresses'
import { Section01 } from './components/Section01'

function App() {

  return (
    <>
      <Navbar />
      <LandingPage />
      <Section01 />
      <Goals />
      <Developers />
      <InfiniteScroll />
      <ProjectProgresses />
    </>
  )
}

export default App
