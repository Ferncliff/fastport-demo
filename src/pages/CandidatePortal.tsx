import { useState } from 'react'

type Step = 'welcome' | 'id_upload' | 'background_consent' | 'i9_form' | 'complete'

export default function CandidatePortal() {
  const [currentStep, setCurrentStep] = useState<Step>('welcome')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    ssn: '',
    idUploaded: false,
    backgroundConsent: false,
    i9Section1: {
      citizenship: '',
      alienNumber: '',
      address: '',
      city: '',
      state: '',
      zip: ''
    }
  })

  const steps = [
    { id: 'welcome', label: 'Welcome' },
    { id: 'id_upload', label: 'ID Upload' },
    { id: 'background_consent', label: 'Background Check' },
    { id: 'i9_form', label: 'I-9 Form' },
    { id: 'complete', label: 'Complete' }
  ]

  const currentStepIndex = steps.findIndex(s => s.id === currentStep)

  const handleNext = () => {
    const stepOrder: Step[] = ['welcome', 'id_upload', 'background_consent', 'i9_form', 'complete']
    const currentIndex = stepOrder.indexOf(currentStep)
    if (currentIndex < stepOrder.length - 1) {
      setCurrentStep(stepOrder[currentIndex + 1])
    }
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData({ ...formData, idUploaded: true })
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                index <= currentStepIndex
                  ? 'border-fastport-primary bg-fastport-primary text-white'
                  : 'border-gray-300 bg-white text-gray-300'
              }`}>
                {index < currentStepIndex ? '✓' : index + 1}
              </div>
              {index < steps.length - 1 && (
                <div className={`w-full h-1 mx-2 ${
                  index < currentStepIndex ? 'bg-fastport-primary' : 'bg-gray-300'
                }`} style={{ minWidth: '60px' }}></div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-xs text-gray-600">
          {steps.map(step => (
            <div key={step.id} className="w-20 text-center">{step.label}</div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-lg shadow-md p-8">
        {currentStep === 'welcome' && (
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to FastPort™</h1>
            <p className="text-gray-600 mb-6">
              Let's get you onboarded quickly. This process takes about 5-10 minutes and includes:
            </p>
            <div className="space-y-3 text-left max-w-md mx-auto mb-8">
              <div className="flex items-start">
                <span className="text-2xl mr-3">📄</span>
                <div>
                  <div className="font-semibold">Upload ID</div>
                  <div className="text-sm text-gray-600">Driver's license or passport</div>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-3">✅</span>
                <div>
                  <div className="font-semibold">Background Check Consent</div>
                  <div className="text-sm text-gray-600">Required for employment verification</div>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-3">📝</span>
                <div>
                  <div className="font-semibold">I-9 Form</div>
                  <div className="text-sm text-gray-600">Employment eligibility verification</div>
                </div>
              </div>
            </div>
            <button
              onClick={handleNext}
              className="bg-fastport-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started
            </button>
          </div>
        )}

        {currentStep === 'id_upload' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Upload Your ID</h2>
            <p className="text-gray-600 mb-6">
              Please upload a clear photo of your driver's license, passport, or state-issued ID.
            </p>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
                id="id-upload"
              />
              <label htmlFor="id-upload" className="cursor-pointer">
                <div className="text-6xl mb-4">📸</div>
                <div className="text-gray-700 font-semibold mb-2">
                  {formData.idUploaded ? 'ID Uploaded Successfully!' : 'Click to upload or drag and drop'}
                </div>
                <div className="text-sm text-gray-500">PNG, JPG, or PDF (max 10MB)</div>
              </label>
            </div>
            <button
              onClick={handleNext}
              disabled={!formData.idUploaded}
              className={`w-full py-3 rounded-md font-semibold transition-colors ${
                formData.idUploaded
                  ? 'bg-fastport-primary text-white hover:bg-blue-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Continue
            </button>
          </div>
        )}

        {currentStep === 'background_consent' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Background Check Consent</h2>
            <p className="text-gray-600 mb-6">
              As part of the hiring process, we need your consent to conduct a background check.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-6 max-h-64 overflow-y-auto text-sm text-gray-700">
              <h3 className="font-bold mb-2">Authorization for Background Check</h3>
              <p className="mb-4">
                I hereby authorize FastPort™ and its designated agents to conduct a comprehensive review of my background
                as part of the employment screening process. This may include:
              </p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Criminal history records (county, state, and federal)</li>
                <li>Education verification</li>
                <li>Employment verification</li>
                <li>Professional license verification</li>
              </ul>
              <p className="mb-4">
                I understand that this information will be used solely for employment purposes and will be handled
                in accordance with the Fair Credit Reporting Act (FCRA) and applicable state laws.
              </p>
              <p className="text-xs text-gray-600">
                Last updated: March 20, 2026
              </p>
            </div>
            <div className="mb-6">
              <label className="flex items-start cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.backgroundConsent}
                  onChange={(e) => setFormData({ ...formData, backgroundConsent: e.target.checked })}
                  className="mt-1 h-5 w-5 text-fastport-primary"
                />
                <span className="ml-3 text-gray-700">
                  I have read and agree to the background check authorization
                </span>
              </label>
            </div>
            <button
              onClick={handleNext}
              disabled={!formData.backgroundConsent}
              className={`w-full py-3 rounded-md font-semibold transition-colors ${
                formData.backgroundConsent
                  ? 'bg-fastport-primary text-white hover:bg-blue-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Continue
            </button>
          </div>
        )}

        {currentStep === 'i9_form' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">I-9 Form - Section 1</h2>
            <p className="text-gray-600 mb-6">
              Employment Eligibility Verification. All fields are required.
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fastport-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fastport-primary"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fastport-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Citizenship Status</label>
                <select
                  value={formData.i9Section1.citizenship}
                  onChange={(e) => setFormData({ ...formData, i9Section1: { ...formData.i9Section1, citizenship: e.target.value } })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fastport-primary"
                >
                  <option value="">Select...</option>
                  <option value="citizen">U.S. Citizen</option>
                  <option value="national">U.S. National</option>
                  <option value="permanent_resident">Lawful Permanent Resident</option>
                  <option value="authorized">Alien Authorized to Work</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                <input
                  type="text"
                  value={formData.i9Section1.address}
                  onChange={(e) => setFormData({ ...formData, i9Section1: { ...formData.i9Section1, address: e.target.value } })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fastport-primary"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <input
                    type="text"
                    value={formData.i9Section1.city}
                    onChange={(e) => setFormData({ ...formData, i9Section1: { ...formData.i9Section1, city: e.target.value } })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fastport-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                  <input
                    type="text"
                    value={formData.i9Section1.state}
                    onChange={(e) => setFormData({ ...formData, i9Section1: { ...formData.i9Section1, state: e.target.value } })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fastport-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
                  <input
                    type="text"
                    value={formData.i9Section1.zip}
                    onChange={(e) => setFormData({ ...formData, i9Section1: { ...formData.i9Section1, zip: e.target.value } })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fastport-primary"
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={handleNext}
                className="w-full bg-fastport-primary text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
              >
                Submit I-9
              </button>
            </form>
          </div>
        )}

        {currentStep === 'complete' && (
          <div className="text-center">
            <div className="text-6xl mb-4">✅</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Set!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for completing your onboarding. Your information has been submitted successfully.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-green-900 mb-2">What's Next?</h3>
              <ul className="text-sm text-green-800 space-y-1 text-left">
                <li>• Your background check will be processed within 3-5 business days</li>
                <li>• I-9 Section 2 will be completed by your employer on your first day</li>
                <li>• You'll receive WOTC screening results via email if eligible</li>
              </ul>
            </div>
            <p className="text-sm text-gray-500">
              Questions? Contact your HR representative or email support@fastport.com
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
