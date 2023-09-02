import { Route, Routes } from 'react-router-dom'
import './App.css'
import Logo from './component/Logo'
import Users from './component/Routes/Users'
import UserInfo from './component/Routes/UserInfo'

function App() {

  return (
    <div>
      <div className=' min-h-screen bg-black'>
        <div className='container text-gray-200 py-3'> 
          <Logo/> 
          <Routes>
            <Route path='/' element={<Users/>}> </Route>
            <Route path='/:login' element={<UserInfo/>}> </Route>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
