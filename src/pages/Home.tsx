import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Welcome to FastPort™
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Streamlined WOTC tax credit screening, I-9 compliance, and background checks.
          <br />
          Capture up to <span className="font-bold text-fastport-secondary">$9,600 per hire</span> in federal tax credits.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16">
          <Link
            to="/employer"
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border-2 border-transparent hover:border-fastport-primary"
          >
            <div className="text-4xl mb-4">👔</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Employer Dashboard</h2>
            <p className="text-gray-600">
              Monitor candidate verification status, WOTC eligibility, I-9 completion, and background checks
            </p>
          </Link>

          <Link
            to="/candidate"
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border-2 border-transparent hover:border-fastport-primary"
          >
            <div className="text-4xl mb-4">👤</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Candidate Portal</h2>
            <p className="text-gray-600">
              Complete your onboarding: upload ID, consent to background check, and fill I-9 form
            </p>
          </Link>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-6 text-left">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-2 text-fastport-primary">WOTC Screening</h3>
            <p className="text-sm text-gray-700">All 10 IRS target groups. Mobile-first 2-3 minute flow. Automatic form generation.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-2 text-fastport-secondary">I-9 & E-Verify</h3>
            <p className="text-sm text-gray-700">Section 1 & 2 support. DHS/SSA integration. 7-year audit-ready retention.</p>
          </div>
          <div className="bg-yellow-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-2 text-fastport-accent">Background Checks</h3>
            <p className="text-sm text-gray-700">Criminal history, education, employment verification via First Advantage.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
