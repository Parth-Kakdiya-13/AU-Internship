import './App.css'
import Goals from './components/Goals'
import InfiniteScroll from './components/Infinite'
import { ProjectProgresses } from './components/ProjectProgresses'

function App() {

  return (
    <div className='m-5'>
      <Goals />
      <ProjectProgresses></ProjectProgresses>
      <InfiniteScroll />
    </div>
  )
}

export default App
