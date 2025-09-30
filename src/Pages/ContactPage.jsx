import React from "react";
import Contact from "../Components/Contact";
import { Footer } from "../Components/Footer";
const ContactPage = () => {
  return (
    <>
      <div className="min-h-screen px-6 md:px-[10%] py-10 flex flex-col gap-32">
        {/* ===== Contact Info ===== */}
        <section className="text-center flex flex-col items-center gap-6">
          <h1 className="text-3xl md:text-4xl font-bold">Contact Us</h1>
          <p className=" max-w-2xl">
            Have questions, suggestions, or want to plan your next adventure
            with us? Reach out and we'll get back to you as soon as possible!
          </p>

          <div className="flex flex-col md:flex-row gap-12 mt-8 justify-center items-center">
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl">📍</span>
              <p className="font-semibold mt-2">Pokhara, Nepal</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <span className="text-3xl">📧</span>
              <p className="font-semibold mt-2">info@gobeyond.com</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <span className="text-3xl">📞</span>
              <p className="font-semibold mt-2">+977 9878181818</p>
            </div>
          </div>
        </section>

        <Contact />

        {/* ===== Optional Map / CTA ===== */}
        <section className="text-center flex flex-col items-center gap-4">
          <h2 className="text-2xl md:text-3xl font-bold">Visit Us</h2>
          <p className="text-gray-600 max-w-2xl">
            We’d love to welcome you to our office or help you plan your
            adventure.
          </p>
          <div className="mt-4 w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
            {/* You can embed Google Maps here */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.123456789!2d83.9867!3d28.2090!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995945e0f5e7c11%3A0x123456789abcdef!2sPokhara%2C%20Nepal!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
