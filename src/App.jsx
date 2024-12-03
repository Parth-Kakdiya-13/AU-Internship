import './App.css'
import InfiniteScroll from './components/Infinite'
import Main from './components/Main'

import { ProjectProgresses } from './components/ProjectProgresses'

function App() {

  return (
    <div className='m-5'>
      {/* <Main /> */}
      <ProjectProgresses></ProjectProgresses>
      <InfiniteScroll />
    </div>
  )
}

export default App
