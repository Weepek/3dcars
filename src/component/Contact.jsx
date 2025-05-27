import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white font-Montserrat flex flex-col">
      {/* Inline Styles */}
      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes slide-in {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes pulse {
            0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(167, 139, 250, 0.7); }
            70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(167, 139, 250, 0); }
            100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(167, 139, 250, 0); }
          }
          .animate-gradient { 
            animation: gradient 8s ease infinite; 
          }
          .animate-slide-in { 
            animation: slide-in 0.5s ease-out forwards; 
          }
          .pulse-button { 
            animation: pulse 2s infinite; 
          }
          .text-metallicgold { 
            color: #ffffff; 
          }
          .custom-gradient {
            background: linear-gradient(90deg, #1a1a2e, #16213e, #0f3460);
            background-size: 200% 100%;
          }
          .dot-pattern {
            background-image: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
            background-size: 20px 20px;
          }
        `}
      </style>

 

      {/* Main Contact Section */}
      <div className="flex-1 w-full custom-gradient dot-pattern animate-gradient">
        <div className="max-w-7xl mx-auto py-16 px-8">
          <h1 className="text-5xl font-Audiowide text-center text-metallicgold mb-4">Contact Us</h1>
          <p className="text-center text-gray-300 mb-12 font-Nunito animate-slide-in">
            Reach out to us for inquiries, bookings, or any assistance you need.
          </p>

          <div className="flex flex-col md:flex-row gap-12">
            {/* Get In Touch Section */}
            <div className="flex-1">
              <h2 className="text-3xl font-Melodrama text-metallicgold mb-6 animate-slide-in">Get In Touch</h2>
              <p className="text-gray-300 mb-8 font-Nunito animate-slide-in">
                We're here to help you find your dream car. Contact us at any of our locations.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4 animate-slide-in">
                  <div className="bg-[#a78bfa]/20 p-3 rounded-full">
                    <svg className="w-6 h-6 text-[#a78bfa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h-2m-6 0H9m-2 0h2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-Melodrama text-metallicgold">Los Angeles, CA</h3>
                    <p className="text-gray-300 font-Nunito">1234 Auto Lane, Los Angeles, CA 90001</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 animate-slide-in">
                  <div className="bg-[#a78bfa]/20 p-3 rounded-full">
                    <svg className="w-6 h-6 text-[#a78bfa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h-2m-6 0H9m-2 0h2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-Melodrama text-metallicgold">Miami, FL</h3>
                    <p className="text-gray-300 font-Nunito">5678 Drive Ave, Miami, FL 33101</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="flex-1 bg-[#1a1a2e] p-8 rounded-2xl shadow-lg animate-slide-in">
              <h2 className="text-2xl font-Melodrama text-metallicgold mb-6">Your Details</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-300 font-Nunito mb-2" htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 bg-transparent border-b border-gray-500 focus:border-[#a78bfa] outline-none text-white font-Nunito"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-Nunito mb-2" htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 bg-transparent border-b border-gray-500 focus:border-[#a78bfa] outline-none text-white font-Nunito"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-Nunito mb-2" htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full p-3 bg-transparent border-b border-gray-500 focus:border-[#a78bfa] outline-none text-white font-Nunito"
                    placeholder="Message Subject"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-Nunito mb-2" htmlFor="message">Comments / Questions *</label>
                  <textarea
                    id="message"
                    className="w-full p-3 bg-transparent border-b border-gray-500 focus:border-[#a78bfa] outline-none text-white font-Nunito"
                    placeholder="Your Message"
                    rows="4"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#a78bfa] text-white font-Nunito px-6 py-3 rounded-full hover:bg-[#8b5cf6] pulse-button"
                >
                  View More
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-96 bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423284.0441278535!2d-118.74138132180026!3d34.020479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1697041234567!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Newsletter Section */}
      <div className="bg-[#a78bfa] py-8 px-8 text-center">
        <h2 className="text-3xl font-Melodrama text-white mb-4 animate-slide-in">Keep Updated About Our Cars</h2>
        <div className="flex justify-center items-center gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full p-3 rounded-full bg-white/20 text-white placeholder-gray-300 border-none focus:outline-none font-Nunito"
          />
          <button className="bg-white text-[#a78bfa] font-Nunito px-6 py-3 rounded-full hover:bg-gray-100 pulse-button">
            Submit
          </button>
        </div>
      </div>

  
      
    </div>
  );
};

export default Contact;