import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/global.css'


import Button from './components/button/button'
import Navbar from './components/navbar/navbar'
import {LoadingEye, LoadingMain} from './components/loading/loading'
import Home from './pages/home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)



//hi
function App(){
  return(
    <>
      {/* <Loading/> */}
      <Navbar/>
      <Home/>
    </>
  )
}

function Loading(){
  return(
    <div className="eye">
      <LoadingEye/>
    </div>
  )
}