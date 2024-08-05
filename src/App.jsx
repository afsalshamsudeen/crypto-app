import React from 'react'
import './index.css';
import NavBar from './components/NavBar/NavBar';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import Footer from './components/footer/Footer';
import LogInSignUp from './pages/LoginsignUp/LogInSignUp';
const App = () => {
  return (
    <div className='app'>

      <NavBar/>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/coin/:coinId' element= {<Coin/>}/>
        <Route path='/login' element={<LogInSignUp/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App