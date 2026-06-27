import { useState, useCallback } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import AppRoutes from './routes/AppRoutes'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ScrollProgress from './components/Shared/ScrollProgress'
import BackToTop from './components/Shared/BackToTop'
import SplashScreen, { shouldShow } from './components/Shared/SplashScreen'

function App() {
  const [splashDone, setSplashDone] = useState(!shouldShow())
  const handleSplashComplete = useCallback(() => setSplashDone(true), [])

  return (
    <ThemeProvider>
      {/* Splash screen — shown once per session */}
      {!splashDone && (
        <SplashScreen onComplete={handleSplashComplete} />
      )}

      {/* Main app — rendered behind splash so it's ready when splash exits */}
      <BrowserRouter>
        <ScrollProgress />
        <Navbar />
        <main className="page-wrapper" style={{ visibility: splashDone ? 'visible' : 'hidden' }}>
          <AppRoutes />
        </main>
        <Footer />
        <BackToTop />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
