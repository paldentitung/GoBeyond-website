import React from "react";
import { useNavigate } from "react-router-dom";
const BookingGuidePage = () => {
  const navigator = useNavigate();
  return (
    <div className="p-10 max-w-5xl mx-auto">
      <button
        onClick={() => navigator(-1)}
        className="mt-6 text-blue-500 underline hover:text-blue-700 mb-4 cursor-pointer"
      >
        ← Back
      </button>
      <h1 className="text-4xl font-bold mb-8 text-center">Booking Guide</h1>

      <ol className="list-decimal list-inside space-y-4 text-lg">
        <li>
          <strong>Choose a Destination:</strong> Browse our Destinations page
          and pick the trip that excites you the most.
        </li>
        <li>
          <strong>Select Dates:</strong> Choose your preferred travel dates and
          the number of travelers.
        </li>
        <li>
          <strong>Review Package:</strong> Check the itinerary, inclusions, and
          pricing carefully.
        </li>
        <li>
          <strong>Make Payment:</strong> Pay securely using your preferred
          payment method.
        </li>
        <li>
          <strong>Confirmation:</strong> Receive a booking confirmation via
          email with all trip details.
        </li>
      </ol>

      <p className="mt-6 text-gray-700">
        Need help? Contact our support team if you have any questions about the
        booking process.
      </p>
    </div>
  );
};

export default BookingGuidePage;
