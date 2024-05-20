import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/homePage'
import { Header } from './widgets/header'
import { Footer } from './widgets/footer'
import { Help } from './features/help'



const Router = () => {
  return (
    <BrowserRouter>
          <Header/>
    <Routes>
        <Route path='/' element={<HomePage/>} />
    </Routes>
    <Help/>
    <Footer/>
    </BrowserRouter>
  )
}

export default Router