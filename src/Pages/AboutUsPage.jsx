import React from "react";
import aboutus_image from "../assets/aboutus.jpg";
import { Footer } from "../Components/Footer";
const AboutUsPage = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col gap-32 px-6 md:px-[10%] py-10">
        {/* ===== About Us Section ===== */}
        <section className="flex flex-col md:flex-row items-center gap-8">
          {/* Text */}
          <div className="md:w-1/2 flex flex-col justify-center space-y-5">
            <h1 className="text-3xl md:text-4xl font-bold">About Us</h1>
            <p className="text-gray-700">
              At GoBeyond, we believe travel is more than just visiting new
              places — it’s about creating unforgettable memories. That’s why we
              started this site: to help explorers like you unlock hidden gems,
              plan stress-free itineraries, and discover travel beyond the usual
              paths.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2 overflow-hidden rounded-lg">
            <img
              src={aboutus_image}
              alt="About Us"
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </section>

        {/* ===== Our Mission Section ===== */}
        <section className="flex flex-col items-center text-center gap-6">
          <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
          <p className="text-gray-600 max-w-2xl">
            At GoBeyond, our mission is to inspire and empower travelers to
            explore the world in meaningful ways. Travel should connect people,
            cultures, and experiences.
          </p>

          <div className="flex flex-col md:flex-row gap-12 mt-8 justify-center">
            <div className="flex flex-col items-center text-center">
              <span className="text-5xl">✨</span>
              <h3 className="text-xl font-semibold mt-2">Inspire Adventure</h3>
              <p className="text-gray-600 mt-1 max-w-xs">
                Discover unique places around the globe and create unforgettable
                memories.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <span className="text-5xl">🌍</span>
              <h3 className="text-xl font-semibold mt-2">Build Connections</h3>
              <p className="text-gray-600 mt-1 max-w-xs">
                Travel connects people. We foster bonds between travelers and
                local communities.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <span className="text-5xl">🌱</span>
              <h3 className="text-xl font-semibold mt-2">Travel Responsibly</h3>
              <p className="text-gray-600 mt-1 max-w-xs">
                Promote sustainable tourism that respects nature and cultures.
              </p>
            </div>
          </div>
        </section>

        {/* ===== Why Choose Us Section ===== */}
        <section className="flex flex-col items-center text-center gap-6 bg-gray-50 py-10 rounded-lg">
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl">
            At GoBeyond, we combine passion for travel with practical expertise
            to give you unforgettable journeys.
          </p>

          <div className="flex flex-col md:flex-row gap-12 mt-8 justify-center items-center">
            <div className="flex flex-col items-center">
              <span className="text-5xl">🌎</span>
              <h3 className="text-xl font-bold mt-2">50+ Destinations</h3>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-5xl">😊</span>
              <h3 className="text-xl font-bold mt-2">1000+ Happy Travelers</h3>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-5xl">⭐</span>
              <h3 className="text-xl font-bold mt-2">4.9/5 Ratings</h3>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-5xl">✈️</span>
              <h3 className="text-xl font-bold mt-2">24/7 Support</h3>
            </div>
          </div>
        </section>

        {/* ===== Call To Action ===== */}
        <section className="flex flex-col items-center text-center bg-cyan-600 text-white py-16 rounded-lg gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready for Your Next Adventure?
          </h2>
          <p className="max-w-2xl">
            Explore amazing destinations, plan your trip, and create memories
            that last a lifetime.
          </p>
          <button className="mt-4 bg-white text-cyan-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            Explore Destinations
          </button>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutUsPage;
