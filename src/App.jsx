import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Router from './Router'

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className='BodyContainer'>
          <Router />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
