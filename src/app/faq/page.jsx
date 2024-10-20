import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import Footer from "../components/Footer";
import MaxWidthWrapper from "../components/MaxWIthWrapper";

// General FAQ data
const generalFAQs = [
  {
    question: "What is LOCVM?",
    answer:
      "LOCVM is a platform designed to connect permanent physicians and locum professionals for short-term coverage. It offers flexibility for permanent physicians to take time off while enabling locum professionals to find opportunities.",
  },
  {
    question: "Who can use the platform?",

    answer:
      "The platform is available to:<br/><strong>Locum Professionals:</strong> Licensed physicians  seeking temporary placements.<br/><strong>Permanent Physicians:</strong> Physicians looking for short-term locum professionals to cover their shifts.<br/><strong>Healthcare Professionals:</strong> If you're a healthcare professional in another field, sign up for our mailing list to hear about future opportunities in your area of expertise.",
  },
  {
    question: "How does the platform work?",
    answer:
      "Locum professionals can browse temporary coverage opportunities posted by permanent physicians. Permanent physicians can post their needs for locum coverage and choose a professional based on availability, qualifications, and experience.",
  },
  {
    question: "Is this only for locum work?",
    answer:
      "Yes, the platform focuses on locum opportunities, but it’s also designed for permanent physicians who need to find temporary coverage, giving them the flexibility to take time off.",
  },
  {
    question: "How are payments handled?",
    answer:
      "Payments are securely processed through the platform. Both locum professionals and permanent physicians share a small service fee, which covers platform usage and payment handling. The exact calculation of the fee will be provided at the time of booking.",
  },
  {
    question: "What types of locum opportunities are available?",
    answer:
      "The platform supports a variety of locum placements, from covering a single day to extended coverage for several weeks or months. This allows locum professionals to find work that fits their schedule, while permanent physicians can ensure their practice is covered during their absence.",
  },
  {
    question: "How does the application process work?",
    answer:
      "For Locum Professionals: You can apply for posted opportunities by submitting your availability and any required documentation. The permanent physician will review applications and contact you if selected. For Permanent Physicians: After posting a coverage request, you can review locum candidates, check their availability and credentials, and select the best fit for your needs.",
  },
  {
    question: "Are there any fees for using the platform?",
    answer:
      "Yes, both locum professionals and permanent physicians share a small service fee for each assignment. This includes a payment processing fee to ensure secure transactions. The fee is calculated at the time of booking.",
  },
  {
    question: "How is scheduling managed?",
    answer:
      "Permanent physicians post the specific dates and hours they need coverage, and locum professionals can apply based on their availability. The platform provides tools to manage schedules and communicate directly.",
  },
  {
    question: "How can permanent physicians find locum coverage?",
    answer:
      "If you’re a permanent physician, you can post your coverage needs on the platform, and locum professionals will apply. You can select the right professional to ensure smooth coverage while you're away.",
  },
  {
    question: "How are qualifications verified?",
    answer:
      "All locum professionals must be licensed in Ontario. The platform verifies licenses and may require additional documentation, such as credentials or references, before approval.",
  },
  {
    question: "How does the platform ensure quality candidates?",
    answer:
      "Both permanent physicians and locum professionals can leave feedback and ratings after each assignment. This ensures transparency and builds a community based on trust and quality service.",
  },
  {
    question: "What if I have any issues?",
    answer:
      "Our support team is here to help. Whether you're a locum professional or a permanent physician, you can contact us via email or phone if you have any questions or run into issues.",
  },
];

// Payments & Deposits FAQ data
const paymentsFAQs = [
  {
    question: "How are payments processed?",

    answer:
      "Payments can be handled either through the platform or directly.<br/><ul><li><strong>Through the Platform:</strong> Locum professionals are paid automatically after their assignment if it’s less than a month, or monthly for longer assignments.</li><li><strong>Direct Payment by Physicians:</strong> If the physician chooses to handle payments directly, a flat fee based on the length of the assignment will apply.</li></ul>",
  },
  {
    question: "How much is the service fee?",
    answer:
      "If Payment is Handled Through the Platform: The service fee is based on the length of the assignment. Short assignments have a 1% service fee, while longer assignments have a lower fee. There is also a payment handling fee based on charges from the integrated payment system. If Payment is Handled by the Physician: A flat service fee will be charged based on the length of the assignment, regardless of its duration.",
  },
  {
    question: "When do I get paid?",
    answer:
      "For Assignments Under One Month: Locum professionals are paid after the assignment is completed. For Assignments Over One Month: Payments are made monthly after each completed month of the assignment.",
  },
  {
    question: "Is there a deposit required?",
    answer:
      "Yes, both locum professionals and permanent physicians must pay a deposit to secure the match. The deposit amount is based on the length of the assignment. This deposit ensures commitment and protects both sides from cancellations. Refundable Deposit: The deposit will be reimbursed at the end of the assignment. Cancellation Policy: If a cancellation occurs outside the platform’s cancellation policies, the deposit will be given to the party that did not cancel.",
  },
  {
    question: "Can I see the payment and deposit breakdown before booking?",
    answer:
      "Yes, a detailed breakdown of the total payment, including the service fee, handling fee (if applicable), and deposit requirements, will be provided at the time of booking.",
  },
];

const FAQPage = () => {
  return (
    <>
      <MaxWidthWrapper className="">
        <div className="mx-auto max-w-2xl mt-20 text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-700 sm:text-4xl">
            Frequently Asked Questions
          </p>
        </div>

        {/* General FAQ Section */}
        <div className="my-10 flex flex-col items-center mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-slate-700 sm:text-xl mb-4 bg-gray-100 rounded-lg py-4 px-10">
            FAQ: General
          </h2>
          <div className="w-full sm:w-[70%] lg:w-[70%]">
            <Accordion type="single" collapsible>
              {generalFAQs.map((faq, index) => (
                <AccordionItem value={`general-item-${index}`} key={index}>
                  <AccordionTrigger className="text-slate-700 font-bold text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-8 text-gray-600">
                    <span dangerouslySetInnerHTML={{ __html: faq.answer }} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Payments & Deposits FAQ Section */}
        <div className="my-10 flex flex-col items-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-700 sm:text-xl mb-4 bg-gray-100 rounded-lg py-4 px-10">
            FAQ: Payments & Deposits
          </h2>
          <div className="w-full sm:w-[70%] lg:w-[70%]">
            <Accordion type="single" collapsible>
              {paymentsFAQs.map((faq, index) => (
                <AccordionItem value={`payments-item-${index}`} key={index}>
                  <AccordionTrigger className="text-slate-700 font-bold text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-8 text-gray-600">
                    <span dangerouslySetInnerHTML={{ __html: faq.answer }} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        <div className="mt-20">
          <Footer />
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default FAQPage;
