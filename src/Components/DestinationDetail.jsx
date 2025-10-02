import React, { useState, useEffect } from "react";
import data from "../data/destinations";
import rating40 from "../assets/rating-40.png";
import rating45 from "../assets/rating-45.png";
import rating50 from "../assets/rating-50.png";
import { useNavigate } from "react-router-dom";

const DestinationDetail = ({ id, mode }) => {
  const destination = data.find((item) => item.id === id);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  if (!destination) {
    return (
      <p className="text-center text-red-500 mt-10">Destination not found</p>
    );
  }

  const {
    detailImage,
    name,
    description,
    price,
    rating,
    category,
    detailDesc,
    highlights,
  } = destination;

  const ratingImages = { 40: rating40, 45: rating45, 50: rating50 };

  return (
    <>
      <div className="px-8 py-8 max-w-6xl mx-auto">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="mt-6 text-blue-500 underline hover:text-blue-700 mb-4 cursor-pointer"
        >
          ← Back
        </button>

        {/* Image with overlay */}
        <div className="relative group mb-10">
          <img
            src={detailImage}
            alt={name}
            className="w-full h-[300px] md:h-[600px] object-cover rounded-lg shadow-lg"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-sky-900/50 rounded-lg transition-opacity duration-500 lg:opacity-0 group-hover:opacity-100">
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6 text-center">
              <h1 className="text-4xl font-bold">{name}</h1>
              <p className="mt-2 text-lg">{description}</p>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">{name}</h2>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-xl font-semibold text-green-700">
              {price}
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 font-medium rounded-full">
              {category}
            </span>
            <div className="flex items-center">
              <img
                src={ratingImages[rating]}
                alt={`${rating}%`}
                className="w-24 h-auto"
              />
            </div>
          </div>

          <p className="text-lg">{detailDesc}</p>

          <h3 className="text-2xl font-semibold mt-6">Highlights</h3>
          <ul className="list-disc list-inside space-y-1">
            {highlights.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          {/* Book Now Button */}
          <div>
            <button
              onClick={() => setShowModal(true)}
              className="bg-gradient-to-r from-blue-500 to-sky-500 px-8 py-3 text-white font-semibold rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className={`fixed inset-0 flex justify-center items-center z-50 p-4   ${
            mode ? "bg-black/50" : "bg-gray-500/50"
          }`}
        >
          <div
            className={`rounded-2xl p-4  w-full max-w-[700px]  relative shadow-2xl ${
              mode ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}
          >
            <h2
              className={`text-3xl font-bold mb-6 text-center ${
                mode ? "text-cyan-400" : "text-blue-600"
              }`}
            >
              Book Your Trip
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for your booking!");
                setShowModal(false);
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 "
            >
              {/* Column 1 */}
              <input
                type="text"
                placeholder="Your Name"
                required
                className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 ${
                  mode
                    ? "border-gray-600 focus:ring-cyan-400 bg-gray-700 text-white"
                    : "border-gray-300 focus:ring-blue-400 bg-white text-black"
                }`}
              />

              <input
                type="email"
                placeholder="Email"
                required
                className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 ${
                  mode
                    ? "border-gray-600 focus:ring-cyan-400 bg-gray-700 text-white"
                    : "border-gray-300 focus:ring-blue-400 bg-white text-black"
                }`}
              />

              <input
                type="tel"
                placeholder="Phone Number"
                required
                className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 ${
                  mode
                    ? "border-gray-600 focus:ring-cyan-400 bg-gray-700 text-white"
                    : "border-gray-300 focus:ring-blue-400 bg-white text-black"
                }`}
              />

              <input
                type="number"
                placeholder="Number of Travelers"
                defaultValue={1}
                min={1}
                required
                className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 ${
                  mode
                    ? "border-gray-600 focus:ring-cyan-400 bg-gray-700 text-white"
                    : "border-gray-300 focus:ring-blue-400 bg-white text-black"
                }`}
              />

              <input
                type="date"
                required
                className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 ${
                  mode
                    ? "border-gray-600 focus:ring-cyan-400 bg-gray-700 text-white"
                    : "border-gray-300 focus:ring-blue-400 bg-white text-black"
                }`}
              />

              <input
                type="number"
                placeholder="Duration (days)"
                min={1}
                required
                className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 ${
                  mode
                    ? "border-gray-600 focus:ring-cyan-400 bg-gray-700 text-white"
                    : "border-gray-300 focus:ring-blue-400 bg-white text-black"
                }`}
              />

              <select
                required
                className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 ${
                  mode
                    ? "border-gray-600 focus:ring-cyan-400 bg-gray-700 text-white"
                    : "border-gray-300 focus:ring-blue-400 bg-white text-black"
                }`}
              >
                <option value="">Select Package</option>
                <option value="standard">Standard</option>
                <option value="premium">Premium</option>
                <option value="luxury">Luxury</option>
              </select>

              <select
                required
                className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 ${
                  mode
                    ? "border-gray-600 focus:ring-cyan-400 bg-gray-700 text-white"
                    : "border-gray-300 focus:ring-blue-400 bg-white text-black"
                }`}
              >
                <option value="">Payment Method</option>
                <option value="card">Credit/Debit Card</option>
                <option value="paypal">PayPal</option>
                <option value="cash">Cash on Arrival</option>
              </select>

              {/* Full width row */}
              <textarea
                placeholder="Special Requests"
                rows="3"
                className={`md:col-span-2 w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 ${
                  mode
                    ? "border-gray-600 focus:ring-cyan-400 bg-gray-700 text-white"
                    : "border-gray-300 focus:ring-blue-400 bg-white text-black"
                }`}
              ></textarea>

              <button
                type="submit"
                className="md:col-span-2 w-full bg-gradient-to-r from-blue-500 to-sky-500 px-4 py-3 text-white font-semibold rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                Submit Booking
              </button>
            </form>

            {/* Close button */}
            <div
              onClick={() => setShowModal(false)}
              className={`absolute top-4 right-4 text-2xl w-10 h-10 flex justify-center items-center rounded-full cursor-pointer transition-transform duration-200 hover:scale-110 ${
                mode ? "bg-gray-600 text-white" : "bg-gray-200 text-black"
              }`}
            >
              &times;
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DestinationDetail;
