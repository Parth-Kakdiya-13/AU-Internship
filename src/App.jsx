import './App.css'
import InfiniteScroll from './components/Infinite'
import { ProjectProgresses } from './components/ProjectProgresses'

function App() {

  return (
    <div className='m-5'>
      <ProjectProgresses></ProjectProgresses>
      <InfiniteScroll />
    </div>
  )
}

export default App
