import React, { useState } from "react";

const ClaimProcess = () => {
  const [openAccordion, setOpenAccordion] = useState("");

  const toggleAccordion = (accordionId) => {
    setOpenAccordion((prevAccordion) =>
      prevAccordion === accordionId ? "" : accordionId
    );
  };

  const isAccordionOpen = (accordionId) => {
    return openAccordion === accordionId;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 py-10 px-2">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
          Health Insurance Claim Process
        </h2>
        <div className="mb-8">
          <p className="text-gray-700 mb-2">
            At <span className="font-semibold text-blue-700">Star Health and Allied Insurance</span>, we strive to make the health insurance claim process as smooth and hassle-free as possible. Our dedicated claim settlement team works diligently to ensure that your claims are processed promptly and accurately.
          </p>
          <p className="font-medium mt-4 text-blue-700">Key Steps in the Claim Process:</p>
          <ol className="list-decimal ml-8 text-gray-800 space-y-2 mt-2">
            <li>
              <span className="font-semibold">Notify Us:</span> In the event of hospitalization or planned medical treatment, please notify us as soon as possible or within the stipulated time frame mentioned in your policy. You can contact our 24/7 helpline number for claim assistance.
            </li>
            <li>
              <span className="font-semibold">Complete Claim Form:</span> Fill out the claim form with accurate and complete details. You can obtain the claim form from our website or nearest branch office.
            </li>
            <li>
              <span className="font-semibold">Submit Documents:</span> Attach all necessary documents, including medical reports, bills, prescriptions, and any other required paperwork. Ensure that all documents are duly signed and stamped by the treating medical practitioner.
            </li>
            <li>
              <span className="font-semibold">Claim Evaluation:</span> Once we receive your claim, our team will evaluate the documents and review the claim as per the policy terms and conditions.
            </li>
            <li>
              <span className="font-semibold">Claim Settlement:</span> After successful verification, we will process the claim settlement. If it is a cashless claim, we will directly settle the bills with the network hospital. For reimbursement claims, you will receive the eligible amount after deducting any applicable deductibles or co-payment.
            </li>
            <li>
              <span className="font-semibold">Claim Status:</span> You can track the status of your claim through our Customer Portal or by contacting our helpline number. We aim to keep you informed about the progress of your claim at each stage.
            </li>
          </ol>
        </div>
        <div className="mb-8">
          <p className="font-medium text-blue-700">Additional Features:</p>
          <ul className="list-disc ml-8 text-gray-800 space-y-1 mt-2">
            <li>
              <span className="font-semibold">Cashless Treatment:</span> We offer cashless treatment facilities at our extensive network of over 14,000 hospitals. You can avail of medical services without paying cash upfront, subject to policy terms.
            </li>
            <li>
              <span className="font-semibold">Customer Portal:</span> Our online Customer Portal provides easy access to policy details, claim status, and policy documents. You can also submit and track claims online.
            </li>
            <li>
              <span className="font-semibold">24/7 Helpline:</span> Our helpline is available 24 hours a day, 7 days a week, to assist you with any claim-related queries or emergencies.
            </li>
            <li>
              <span className="font-semibold">Quick Claim Settlement:</span> With our efficient claim settlement process, we aim to settle eligible claims promptly, providing you with timely financial support during medical emergencies.
            </li>
            <li>
              <span className="font-semibold">Experienced Claim Team:</span> Our dedicated claim settlement team is experienced in handling health insurance claims, ensuring that your claims are processed accurately and efficiently.
            </li>
            <li>
              <span className="font-semibold">Multiple Claim Submission Options:</span> You can submit your claim documents through various channels, including our Customer Portal, mobile app, branch office, or via postal mail.
            </li>
          </ul>
        </div>
        <div className="mb-8">
          <p className="text-gray-700">
            We understand that a health-related event can be stressful, and we are committed to providing you with the best support during such times. If you have any questions or need assistance with the claim process, don't hesitate to reach out to our dedicated helpline number for personalized assistance.
          </p>
          <p className="text-gray-700 mt-2">
            Thank you for choosing <span className="font-semibold text-blue-700">Star Health and Allied Insurance</span> as your trusted health insurance provider. We are here to serve you and ensure that you receive the best healthcare and claim support when you need it the most.
          </p>
        </div>

        {/* FAQs */}
        <div className="bg-blue-50 rounded-lg shadow-md my-5">
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4 text-blue-700">
              Frequently Asked Questions
            </h1>
            <div className="space-y-4">
              {/* FAQ 1 */}
              <div>
                <button
                  type="button"
                  className={`flex items-center justify-between w-full p-4 font-medium text-left text-gray-700 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                    isAccordionOpen("accordion-open-body-1") ? "bg-blue-100" : "bg-white"
                  }`}
                  onClick={() => toggleAccordion("accordion-open-body-1")}
                  aria-expanded={isAccordionOpen("accordion-open-body-1")}
                  aria-controls="accordion-open-body-1"
                >
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    What does Health Insurance cover?
                  </span>
                  <svg
                    className={`w-3 h-3 ml-2 transition-transform duration-200 ${
                      isAccordionOpen("accordion-open-body-1") ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
                <div
                  id="accordion-open-body-1"
                  className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                    isAccordionOpen("accordion-open-body-1") ? "max-h-screen" : "max-h-0"
                  }`}
                  aria-labelledby="accordion-open-heading-1"
                >
                  <div className="p-4 bg-blue-50">
                    <p className="text-gray-600">
                      Medical costs incurred as a result of disease/illness/accident are covered by Health Insurance. These medical costs include the cost of hospitalisation, pre and post-hospitalisation, medications, implants, specialist fees and the cost of surgery, etc.
                    </p>
                  </div>
                </div>
              </div>
              {/* FAQ 2 */}
              <div>
                <button
                  type="button"
                  className={`flex items-center justify-between w-full p-4 font-medium text-left text-gray-700 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                    isAccordionOpen("accordion-open-body-2") ? "bg-blue-100" : "bg-white"
                  }`}
                  onClick={() => toggleAccordion("accordion-open-body-2")}
                  aria-expanded={isAccordionOpen("accordion-open-body-2")}
                  aria-controls="accordion-open-body-2"
                >
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    When can we claim Health Insurance?
                  </span>
                  <svg
                    className={`w-3 h-3 ml-2 transition-transform duration-200 ${
                      isAccordionOpen("accordion-open-body-2") ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
                <div
                  id="accordion-open-body-2"
                  className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                    isAccordionOpen("accordion-open-body-2") ? "max-h-screen" : "max-h-0"
                  }`}
                  aria-labelledby="accordion-open-heading-2"
                >
                  <div className="p-4 bg-blue-50">
                    <p className="text-gray-600">
                      In general, you can claim Health Insurance after a period of 30 days from the commencement of the health policy except for the claims that have waiting periods. However, in case of an accident, this initial waiting period is not applicable, and the cover is immediately provided if it is not for a pre-existing condition.
                    </p>
                  </div>
                </div>
              </div>
              {/* FAQ 3 */}
              <div>
                <button
                  type="button"
                  className={`flex items-center justify-between w-full p-4 font-medium text-left text-gray-700 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                    isAccordionOpen("accordion-open-body-3") ? "bg-blue-100" : "bg-white"
                  }`}
                  onClick={() => toggleAccordion("accordion-open-body-3")}
                  aria-expanded={isAccordionOpen("accordion-open-body-3")}
                  aria-controls="accordion-open-body-3"
                >
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    How do I claim the Health Insurance amount?
                  </span>
                  <svg
                    className={`w-3 h-3 ml-2 transition-transform duration-200 ${
                      isAccordionOpen("accordion-open-body-3") ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
                <div
                  id="accordion-open-body-3"
                  className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                    isAccordionOpen("accordion-open-body-3") ? "max-h-screen" : "max-h-0"
                  }`}
                  aria-labelledby="accordion-open-heading-3"
                >
                  <div className="p-4 bg-blue-50">
                    <p className="text-gray-600">
                      You can make your Health Insurance claim in one of two ways: Cashless or Reimbursement Claims. However, the processes for these two kinds of Health Insurance claims vary.
                    </p>
                  </div>
                </div>
              </div>
              {/* FAQ 4 */}
              <div>
                <button
                  type="button"
                  className={`flex items-center justify-between w-full p-4 font-medium text-left text-gray-700 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                    isAccordionOpen("accordion-open-body-4") ? "bg-blue-100" : "bg-white"
                  }`}
                  onClick={() => toggleAccordion("accordion-open-body-4")}
                  aria-expanded={isAccordionOpen("accordion-open-body-4")}
                  aria-controls="accordion-open-body-4"
                >
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Is there a time limit to claim Health Insurance?
                  </span>
                  <svg
                    className={`w-3 h-3 ml-2 transition-transform duration-200 ${
                      isAccordionOpen("accordion-open-body-4") ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
                <div
                  id="accordion-open-body-4"
                  className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                    isAccordionOpen("accordion-open-body-4") ? "max-h-screen" : "max-h-0"
                  }`}
                  aria-labelledby="accordion-open-heading-4"
                >
                  <div className="p-4 bg-blue-50">
                    <p className="text-gray-600">
                      If a policyholder receives an emergency treatment in a network hospital, the insurance company will directly settle the bill to the network hospital. You can claim reimbursement from your insurer if you are getting treated in a non-network hospitals. For reimbursement of claims, the intimation should be given within 24 hours of hospitalisation (in case of emergency hospitalisation). Claim must be filed within 15 days from the date of Discharge from the Hospital. In case of planned hospitalisation, you must notify your insurer at least 2 to 4 days before the scheduled hospitalisation.
                    </p>
                  </div>
                </div>
              </div>
              {/* End FAQ */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimProcess;
