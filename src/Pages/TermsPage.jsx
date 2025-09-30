import React from "react";
import { useNavigate } from "react-router-dom";
const TermsPage = () => {
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
        Terms & Conditions
      </h1>

      <p
        className="mb-6 
      "
      >
        Welcome to GoBeyond! By using our services, you agree to the following
        terms and conditions. Please read them carefully.
      </p>

      <ul className="list-disc list-inside space-y-3">
        <li>
          You must provide accurate personal and payment information for
          bookings.
        </li>
        <li>All bookings are subject to availability and confirmation.</li>
        <li>
          Cancellations and refunds follow the policies listed on each package.
        </li>
        <li>
          GoBeyond reserves the right to modify prices and packages at any time.
        </li>
        <li>
          Travelers are responsible for their own travel insurance and
          documents.
        </li>
      </ul>

      <p
        className="mt-6 
      "
      >
        By using our website and services, you acknowledge that you have read
        and agree to these terms.
      </p>
    </div>
  );
};

export default TermsPage;
