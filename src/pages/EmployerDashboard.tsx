import { useState } from 'react'

interface Candidate {
  id: string
  name: string
  email: string
  hireDate: string
  wotcStatus: 'pending' | 'qualified' | 'not_qualified' | 'in_progress'
  wotcCredit: number
  i9Completion: number
  backgroundStatus: 'pending' | 'in_progress' | 'clear' | 'review_required'
}

const mockCandidates: Candidate[] = [
  {
    id: '1',
    name: 'Sarah Martinez',
    email: 'sarah.martinez@example.com',
    hireDate: '2026-03-20',
    wotcStatus: 'qualified',
    wotcCredit: 2400,
    i9Completion: 100,
    backgroundStatus: 'clear'
  },
  {
    id: '2',
    name: 'John Smith',
    email: 'john.smith@example.com',
    hireDate: '2026-03-19',
    wotcStatus: 'in_progress',
    wotcCredit: 0,
    i9Completion: 50,
    backgroundStatus: 'in_progress'
  },
  {
    id: '3',
    name: 'Maria Garcia',
    email: 'maria.garcia@example.com',
    hireDate: '2026-03-18',
    wotcStatus: 'qualified',
    wotcCredit: 9000,
    i9Completion: 100,
    backgroundStatus: 'clear'
  },
  {
    id: '4',
    name: 'David Chen',
    email: 'david.chen@example.com',
    hireDate: '2026-03-17',
    wotcStatus: 'pending',
    wotcCredit: 0,
    i9Completion: 0,
    backgroundStatus: 'pending'
  }
]

export default function EmployerDashboard() {
  const [candidates] = useState<Candidate[]>(mockCandidates)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'qualified':
      case 'clear':
        return 'bg-green-100 text-green-800'
      case 'in_progress':
        return 'bg-yellow-100 text-yellow-800'
      case 'pending':
        return 'bg-gray-100 text-gray-800'
      case 'not_qualified':
      case 'review_required':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status: string) => {
    return status.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  }

  const totalWotcCredits = candidates.reduce((sum, c) => sum + c.wotcCredit, 0)
  const averageI9Completion = Math.round(
    candidates.reduce((sum, c) => sum + c.i9Completion, 0) / candidates.length
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Employer Dashboard</h1>
        <p className="text-gray-600">Monitor candidate verification and compliance status</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-sm text-gray-600 mb-1">Total Candidates</div>
          <div className="text-3xl font-bold text-gray-900">{candidates.length}</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-sm text-gray-600 mb-1">WOTC Credits</div>
          <div className="text-3xl font-bold text-fastport-secondary">${totalWotcCredits.toLocaleString()}</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-sm text-gray-600 mb-1">Avg I-9 Complete</div>
          <div className="text-3xl font-bold text-fastport-primary">{averageI9Completion}%</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-sm text-gray-600 mb-1">Cleared Background</div>
          <div className="text-3xl font-bold text-gray-900">
            {candidates.filter(c => c.backgroundStatus === 'clear').length}
          </div>
        </div>
      </div>

      {/* Candidates Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
          <h2 className="text-lg font-semibold text-gray-900">Candidates</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Candidate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Hire Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  WOTC Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Est. Credit
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  I-9 Progress
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Background
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {candidates.map((candidate) => (
                <tr key={candidate.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{candidate.name}</div>
                    <div className="text-sm text-gray-500">{candidate.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {candidate.hireDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(candidate.wotcStatus)}`}>
                      {getStatusText(candidate.wotcStatus)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-fastport-secondary">
                    {candidate.wotcCredit > 0 ? `$${candidate.wotcCredit.toLocaleString()}` : '—'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                        <div
                          className="bg-fastport-primary h-2 rounded-full"
                          style={{ width: `${candidate.i9Completion}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-900">{candidate.i9Completion}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(candidate.backgroundStatus)}`}>
                      {getStatusText(candidate.backgroundStatus)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
