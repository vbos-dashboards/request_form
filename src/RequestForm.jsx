import { useState } from 'react';
import './RequestForm.css';

function RequestForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        institution: '',
        address: '',
        phoneNumber: '',
        emailAddress: '',
        informationType: '',
        requestType: '',
        purposeOfRequest: [],
        dateRequested: '',
        dateRequired: '',
        additionalInfo1: '',
        additionalInfo2: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            purposeOfRequest: checked
                ? [...prev.purposeOfRequest, value]
                : prev.purposeOfRequest.filter(item => item !== value)
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Form submitted successfully! Check console for details.');
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                {/* Contact Information Section */}
                <section className="form-section">
                    <h2 className="section-title">CONTACT INFORMATION</h2>

                    <div className="form-group">
                        <label htmlFor="fullName">1. Your full name</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="institution">2. Institution/Company</label>
                        <input
                            type="text"
                            id="institution"
                            name="institution"
                            value={formData.institution}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">3. Address</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phoneNumber">4. Phone number</label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="emailAddress">5. Email address</label>
                        <input
                            type="email"
                            id="emailAddress"
                            name="emailAddress"
                            value={formData.emailAddress}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </section>

                {/* Information Request Section */}
                <section className="form-section">
                    <h2 className="section-title">INFORMATION REQUEST</h2>

                    <div className="form-group">
                        <label>6. Please indicate what sort of information you need?</label>
                        <div className="radio-group">
                            <label className="radio-label">
                                <input
                                    type="radio"
                                    name="informationType"
                                    value="Trade Report"
                                    checked={formData.informationType === 'Trade Report'}
                                    onChange={handleInputChange}
                                />
                                Trade Report
                            </label>
                            <label className="radio-label">
                                <input
                                    type="radio"
                                    name="informationType"
                                    value="Trade related development"
                                    checked={formData.informationType === 'Trade related development'}
                                    onChange={handleInputChange}
                                />
                                Trade related development (local/inter-state/interstate boundaries) (Other: Assistance/Promotion/Goods, etc)
                            </label>
                        </div>
                        <p className="helper-text">
                            *Your information will remain confidential and only for the purposes of processing your request(s) for trade information. Data is privacy protected.
                        </p>
                    </div>
                </section>

                {/* Schedule Request Section */}
                <section className="form-section">
                    <h2 className="section-title">SCHEDULE REQUEST</h2>

                    <div className="form-group">
                        <label>7. What is the type of your Request information from?</label>
                        <div className="radio-group">
                            <label className="radio-label">
                                <input
                                    type="radio"
                                    name="requestType"
                                    value="Online"
                                    checked={formData.requestType === 'Online'}
                                    onChange={handleInputChange}
                                />
                                Online
                            </label>
                            <label className="radio-label">
                                <input
                                    type="radio"
                                    name="requestType"
                                    value="Physical"
                                    checked={formData.requestType === 'Physical'}
                                    onChange={handleInputChange}
                                />
                                Physical
                            </label>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>8. In PURPOSE OF REQUEST (own no less down 500 words and text)</label>
                        <p className="helper-text">
                            By providing us with the purpose of your request, we will be able to be at least one of them that apply based on work purpose and plan accordingly. (do not put additional purposes you other want service for)
                        </p>
                        <div className="checkbox-group">
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    value="Research Report"
                                    checked={formData.purposeOfRequest.includes('Research Report')}
                                    onChange={handleCheckboxChange}
                                />
                                Research Report
                            </label>
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    value="Data Analysis"
                                    checked={formData.purposeOfRequest.includes('Data Analysis')}
                                    onChange={handleCheckboxChange}
                                />
                                Data Analysis
                            </label>
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    value="Higher Proposal"
                                    checked={formData.purposeOfRequest.includes('Higher Proposal')}
                                    onChange={handleCheckboxChange}
                                />
                                Higher Proposal
                            </label>
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    value="Planning Support"
                                    checked={formData.purposeOfRequest.includes('Planning Support')}
                                    onChange={handleCheckboxChange}
                                />
                                Planning Support
                            </label>
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    value="Presentation Support"
                                    checked={formData.purposeOfRequest.includes('Presentation Support')}
                                    onChange={handleCheckboxChange}
                                />
                                Presentation Support
                            </label>
                        </div>
                    </div>
                </section>

                {/* Date Section */}
                <section className="form-section">
                    <h2 className="section-title">DATE REQUESTED</h2>

                    <div className="form-group">
                        <label htmlFor="dateRequested">9. DATE REQUESTED</label>
                        <input
                            type="date"
                            id="dateRequested"
                            name="dateRequested"
                            value={formData.dateRequested}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="dateRequired">10. DATE REQUIRED TO BE AVAILABLE</label>
                        <input
                            type="date"
                            id="dateRequired"
                            name="dateRequired"
                            value={formData.dateRequired}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </section>

                {/* Additional Information Section */}
                <section className="form-section">
                    <div className="form-group">
                        <label htmlFor="additionalInfo1">11. Additional Information (Optional)</label>
                        <textarea
                            id="additionalInfo1"
                            name="additionalInfo1"
                            value={formData.additionalInfo1}
                            onChange={handleInputChange}
                            rows="5"
                            placeholder="Enter any additional information here..."
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="additionalInfo2">12. Comments or Special Requests (Optional)</label>
                        <textarea
                            id="additionalInfo2"
                            name="additionalInfo2"
                            value={formData.additionalInfo2}
                            onChange={handleInputChange}
                            rows="5"
                            placeholder="Enter any comments or special requests here..."
                        />
                    </div>
                </section>

                <div className="form-actions">
                    <button type="submit" className="submit-button">Submit Request</button>
                </div>
            </form>
        </div>
    );
}

export default RequestForm;
