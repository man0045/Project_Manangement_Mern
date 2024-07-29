import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import { Navbar } from './Components/Navbar'
import bestProjects from './Components/BestProjects'
import MyFooter from './Components/MyFooter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div className='flex flex-col min-h-screen'>
        
        <Outlet/>
      </div>
      <MyFooter/>
    </>
  )
}

export default App
