import './App.css'
import Column from './components/Column'

function App() {
  return (
    <>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className='App' >
        <Column state="PLANNED" />
        <Column state="ONGOING" />
        <Column state="DONE" />
      </div>
    </>
  )
}

export default App
