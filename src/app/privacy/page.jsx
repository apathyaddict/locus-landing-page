import React from "react";
import Footer from "../components/Footer";
import MaxWidthWrapper from "../components/MaxWIthWrapper";

const PrivacyPage = () => {
  return (
    <>
      <MaxWidthWrapper>
        <div className="mx-auto max-w-2xl mt-20 text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-700 sm:text-4xl">
            Cancellation Policies
          </p>
        </div>

        {/* Cancellation Policies Section */}
        <div className="mx-auto max-w-3xl my-10 text-left">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">
            1. Moderate Cancellation Policy
          </h2>
          <h3 className="text-xl font-semibold text-slate-700 mb-2">
            For Permanent Physicians:
          </h3>
          <ul className="list-disc pl-5 text-slate-600 text-lg mb-6">
            <li>
              <span className="font-bold">Cancellation Notice:</span> You can
              cancel your locum request up to 14 days before the start of the
              assignment without penalty.
            </li>
            <li>
              <span className="font-bold">Cancellation Within 14 Days:</span> If
              canceled within 14 days, you forfeit your deposit, which will be
              transferred to the locum professional as compensation.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-700 mb-2">
            For Locum Professionals:
          </h3>
          <ul className="list-disc pl-5 text-slate-600 text-lg mb-10">
            <li>
              <span className="font-bold">Cancellation Notice:</span> You can
              cancel your confirmed assignment up to 14 days before the start of
              the assignment without penalty.
            </li>
            <li>
              <span className="font-bold">Cancellation Within 14 Days:</span> If
              canceled within 14 days, your deposit will be transferred to the
              permanent physician.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-slate-800 mb-6">
            2. Strict Cancellation Policy
          </h2>
          <h3 className="text-xl font-semibold text-slate-700 mb-2">
            For Permanent Physicians:
          </h3>
          <ul className="list-disc pl-5 text-slate-600 text-lg mb-6">
            <li>
              <span className="font-bold">Cancellation Notice:</span> You can
              cancel your locum request up to 30 days before the start of the
              assignment without penalty.
            </li>
            <li>
              <span className="font-bold">Cancellation Within 30 Days:</span> If
              canceled within 30 days, you forfeit your deposit, which will be
              transferred to the locum professional as compensation.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-700 mb-2">
            For Locum Professionals:
          </h3>
          <ul className="list-disc pl-5 text-slate-600 text-lg mb-10">
            <li>
              <span className="font-bold">Cancellation Notice:</span> You can
              cancel your confirmed assignment up to 30 days before the start of
              the assignment without penalty.
            </li>
            <li>
              <span className="font-bold">Cancellation Within 30 Days:</span> If
              canceled within 30 days, your deposit will be transferred to the
              permanent physician.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-slate-800 mb-4">
            Special Note:
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            If the booking of the locum is made within the cancellation policy
            period, there is a 24-hour grace period to cancel without penalty.
          </p>

          <h2 className="text-2xl font-semibold text-slate-800 mb-4">
            Profile Impact:
          </h2>
          <p className="text-lg text-slate-600">
            The number of cancellations made within the allowed cancellation
            period will be signaled on your profile. This transparency helps
            both permanent physicians and locum professionals make informed
            decisions when selecting a match.
          </p>
        </div>

        {/* Footer Section */}
        <div className="mt-20">
          <Footer />
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default PrivacyPage;
