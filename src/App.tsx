import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import EmployerDashboard from './pages/EmployerDashboard'
import CandidatePortal from './pages/CandidatePortal'
import Home from './pages/Home'
import { Footer } from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <nav className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <Link to="/" className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-fastport-primary">FastPort™</span>
              </Link>
              <div className="flex space-x-4">
                <Link
                  to="/employer"
                  className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-fastport-primary transition-colors"
                >
                  Employer Dashboard
                </Link>
                <Link
                  to="/candidate"
                  className="px-4 py-2 rounded-md text-sm font-medium text-white bg-fastport-primary hover:bg-blue-700 transition-colors"
                >
                  Candidate Portal
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employer" element={<EmployerDashboard />} />
            <Route path="/candidate" element={<CandidatePortal />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
