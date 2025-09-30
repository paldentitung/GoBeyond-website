import React from "react";
import { useNavigate } from "react-router-dom";
const PrivacyPage = () => {
  const navigator = useNavigate();
  return (
    <div className="p-10 max-w-5xl mx-auto min-h-screen">
      <button
        onClick={() => navigator(-1)}
        className="mt-6 text-blue-500 underline hover:text-blue-700 mb-4 cursor-pointer"
      >
        ← Back
      </button>
      <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>

      <p className="mb-6 ">
        At GoBeyond, your privacy is important to us. This policy explains how
        we collect, use, and protect your personal information.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
      <ul
        className="list-disc list-inside space-y-2 mb-6 
      "
      >
        <li>Personal details (name, email, phone number)</li>
        <li>Booking information and preferences</li>
        <li>Payment and billing details</li>
        <li>Website usage and analytics data</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">How We Use Your Data</h2>
      <ul
        className="list-disc list-inside space-y-2 mb-6 
      "
      >
        <li>To confirm bookings and provide customer support</li>
        <li>To improve our services and website experience</li>
        <li>To send promotional offers (with your consent)</li>
        <li>To comply with legal requirements</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Security</h2>
      <p
        className="
      "
      >
        We implement appropriate measures to protect your personal data from
        unauthorized access or disclosure.
      </p>

      <p
        className="mt-6 
      "
      >
        By using GoBeyond services, you agree to this privacy policy and how we
        handle your information.
      </p>
    </div>
  );
};

export default PrivacyPage;
