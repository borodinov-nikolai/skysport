import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/homePage'
import { Header } from './widgets/header'
import { Footer } from './widgets/footer'



const Router = () => {
  return (
    <BrowserRouter>
          <Header/>
    <Routes>
        <Route path='/' element={<HomePage/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default Router