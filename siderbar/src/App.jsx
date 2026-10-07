import SiderbarTabs from './SiderbarTabs'
import Dashboard from './Dashboard'
import './App.css'

function App() {

  return (
    <div className='d-flex'>
      <SiderbarTabs> </SiderbarTabs>
      <Dashboard></Dashboard>
    </div>
  )
}

export default App
