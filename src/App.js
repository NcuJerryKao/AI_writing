import Header from './Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Posts from './pages/Posts'
import Card from './Card'
function App() {

  return (

    
    <>
      <Header/>
      {/* <Navbar/> */}
      <Posts/>
      <Card/>
      {/* <h1>Home page</h1> */}
    </>
  )
}

export default App
