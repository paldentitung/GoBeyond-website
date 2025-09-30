import React from "react";
import { useNavigate } from "react-router-dom";
const FAQsPage = () => {
  const navigator = useNavigate();
  return (
    <div className="p-10 max-w-5xl mx-auto min-h-screen">
      <button
        onClick={() => navigator(-1)}
        className="mt-6 text-blue-500 underline hover:text-blue-700 mb-4 cursor-pointer"
      >
        ← Back
      </button>
      <h1 className="text-4xl font-bold mb-8 text-center">
        Frequently Asked Questions
      </h1>

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            1. How do I book a trip?
          </h2>
          <p>
            You can book a trip by visiting our Destinations page, selecting
            your preferred package, and following the booking instructions.
            Payments are secure and instant.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            2. Can I cancel or reschedule?
          </h2>
          <p>
            Yes, you can cancel or reschedule your booking depending on the
            package’s terms. Some trips may have specific refund policies.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            3. Do you provide travel insurance?
          </h2>
          <p>
            We offer optional travel insurance for most packages. You can choose
            this option during booking for extra safety and peace of mind.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            4. How do I contact support?
          </h2>
          <p>
            Our support team is available via the Contact page, email, or
            WhatsApp. We aim to respond within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQsPage;
