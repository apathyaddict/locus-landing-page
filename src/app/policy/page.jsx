import React from "react";
import Footer from "../components/Footer";
import MaxWidthWrapper from "../components/MaxWIthWrapper";

const termsData = {
  lastUpdated: "September 28, 2024",
  introduction: `
      This User Agreement & Terms of Service ("Agreement") is a legally binding contract 
      between you ("User," "you," or "your") and LOCVM, Inc. ("we," "our," or "the Platform"). 
      By accessing or using the Platform, you agree to comply with and be bound by the terms 
      and conditions of this Agreement. This Agreement applies to all users, including locum 
      professionals, permanent physicians, and any other users accessing the platform in any capacity. 
      Please read this Agreement carefully. If you do not agree with these terms, you should not use the Platform.
    `,
  sections: [
    {
      title: "1. Definitions",
      content: `
          - Locum Professional: A healthcare professional who provides temporary medical services in place of a permanent physician.
          - Permanent Physician: A healthcare professional who holds a permanent or long-term medical position and seeks temporary coverage for a period of time.
          - Assignment: A temporary period during which a locum professional covers for a permanent physician.
          - Deposit: An amount paid by both the locum professional and the permanent physician to confirm the booking of an assignment.
        `,
    },
    {
      title: "2. Eligibility",
      content: `
          Locum Professionals: To use the platform as a locum professional, you must hold a valid license from a recognized medical authority in your province or territory (e.g., College of Physicians and Surgeons of Ontario). You are responsible for maintaining your licensing and ensuring that all qualifications are current and valid during any assignment.
  
          Permanent Physicians: As a permanent physician, you must also hold a valid license in your province or territory. You are responsible for ensuring that the locum professional you book meets your needs and the legal requirements for the role.
        `,
    },
    {
      title: "3. Platform Services",
      content: `
          The Platform provides a digital marketplace where locum professionals and permanent physicians can connect, book assignments, and manage payment transactions. We act as an intermediary, facilitating these connections and providing relevant support, but we are not a healthcare provider or staffing agency.
  
          The Platform is available for healthcare professionals across Canada, and all transactions are subject to applicable provincial laws and medical licensing regulations.
        `,
    },
    {
      title: "4. User Responsibilities",
      content: `
          - Account Creation: You must provide accurate and complete information when creating an account on the Platform. You are solely responsible for maintaining the confidentiality of your login credentials and for any activity that occurs under your account.
          - Accuracy of Information: You must ensure that all personal and professional information provided (including licensing, credentials, and qualifications) is up to date and accurate at all times.
          - Compliance with Laws: You agree to comply with all applicable Canadian laws, regulations, and medical standards in your province or territory. This includes maintaining up-to-date licensing, practicing within the scope of your credentials, and adhering to the applicable professional codes of conduct.
        `,
    },
    {
      title: "5. Payments and Fees",
      content: `
          - Service Fees: The platform charges a service fee based on the length of the assignment. Short-term assignments (less than one month) incur a 1% fee, while longer assignments are charged a lower percentage based on assignment length. These fees will be calculated and disclosed at the time of booking.
          - Payment Processing Fees: Additional payment handling fees may be applied, depending on charges from our third-party payment provider. These will also be disclosed at the time of booking.
          - Payment Schedule: Locum professionals will be paid after the completion of assignments shorter than one month or monthly for longer assignments. Payments are processed through the Platform's integrated payment system unless otherwise agreed between both parties.
        `,
    },
    {
      title: "6. Deposits",
      content: `
          Both locum professionals and permanent physicians are required to pay a deposit to confirm an assignment. The deposit is based on the length of the assignment and will be reimbursed at the end of the assignment unless a cancellation occurs outside the agreed cancellation policies.
  
          In cases where cancellation policies are violated, the deposit will be transferred to the non-canceling party as compensation. Specific details regarding cancellation policies are outlined in Section 10.
        `,
    },
    {
      title: "7. Cancellations and Refunds",
      content: `
          Cancellation policies vary depending on the booking terms. Permanent physicians and locum professionals may cancel within the guidelines of the chosen cancellation policy (e.g., Moderate – 14 days before the start of the assignment, Strict – 30 days). Cancellations outside these guidelines will result in the forfeiture of the deposit.
  
          For last-minute bookings (within the cancellation period), a 24-hour grace period is available to cancel without penalty.
  
          Refunds for any applicable deposits will be processed within 7 business days.
        `,
    },
    {
      title: "8. Limitations of Liability",
      content: `
          - Medical Services: The Platform is not responsible for any medical services provided by locum professionals during an assignment. Any legal or malpractice issues arising from services provided during an assignment are the responsibility of the healthcare professional involved.
          - Platform Services: The Platform provides a marketplace and is not responsible for the performance or non-performance of either party in relation to an assignment. The Platform's liability is limited to the refund of service fees in cases of error or platform malfunction.
          - Third-Party Services: The Platform uses third-party services for payment processing, and we are not responsible for any issues arising from these services. Disputes related to payment should be addressed directly with the payment provider.
        `,
    },
    {
      title: "9. Dispute Resolution",
      content: `
          If a dispute arises between a locum professional and a permanent physician, the parties should attempt to resolve the issue directly. If a resolution cannot be reached, the Platform offers mediation services to help facilitate an agreement.
  
          If mediation fails, the dispute may be escalated to binding arbitration or, if applicable, resolved through provincial or territorial healthcare or legal authorities.
        `,
    },
    {
      title: "10. Termination and Suspension",
      content: `
          - User Termination: You may terminate your account at any time by contacting the Platform's support team. However, any pending bookings or outstanding payments must be resolved before account termination is processed.
          - Platform Suspension/Termination: The Platform reserves the right to suspend or terminate any account if there is reasonable belief of a breach of this Agreement, fraud, or illegal activity. We may also suspend accounts due to repeated negative reviews or complaints from other users.
        `,
    },
    {
      title: "11. Modifications to the Agreement",
      content: `
          The Platform reserves the right to modify this Agreement at any time. Users will be notified of significant changes via email or through the Platform. Continued use of the Platform after modifications are made constitutes acceptance of the new terms.
        `,
    },
    {
      title: "12. Governing Law",
      content: `
          This Agreement is governed by and construed in accordance with the laws of Canada and the province or territory in which the permanent physician and locum professional operate. Any legal disputes arising from this Agreement will be subject to the jurisdiction of the courts in the relevant province or territory.
        `,
    },
    {
      title: "13. Privacy",
      content: `
          The Platform adheres to Canada's Personal Information Protection and Electronic Documents Act (PIPEDA) and relevant provincial privacy laws (e.g., PHIPA in Ontario). All personal data will be collected, used, and disclosed in accordance with our Privacy Policy.
        `,
    },
    {
      title: "Contact Information",
      content: `
          For questions or concerns about this Agreement, you can reach us at:
        
          Email: support@locvm.ca
          
        `,
    },
  ],
};

const UserAgreementPage = () => {
  return (
    <>
      <MaxWidthWrapper>
        <div className="mx-auto max-w-2xl mt-20 text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-700 sm:text-4xl">
            User Agreement & Terms of Service
          </p>
          <p className="text-lg text-slate-600 mt-2">
            Last Updated: {termsData.lastUpdated}
          </p>
        </div>

        {/* User Agreement Content */}
        <div className="mx-auto max-w-3xl my-10 text-left">
          <p className="text-lg text-slate-600 mb-6">
            {termsData.introduction}
          </p>

          {termsData.sections.map((section, index) => (
            <div key={index} className="mb-10">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                {section.title}
              </h2>
              <p className="text-lg text-slate-600 mb-6">{section.content}</p>
            </div>
          ))}

          <div className="mt-20">
            <Footer />
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

// FIXME:// add emails

export default UserAgreementPage;
