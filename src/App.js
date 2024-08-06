import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import { HeaderContainer, ContentContainer, FooterContainer, LayoutContainer } from './styles/Layout.style'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <LayoutContainer>
      <Header />
      <ContentContainer>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </ContentContainer>
      <Footer />
    </LayoutContainer>
  )
}

export default App
