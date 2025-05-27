import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="bg-[#a78bfa]  py-8 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-Audiowide text-metallicgold mb-4 from-purple-500 to-yellow-50 ">MP Cars</h3>
            <p className="text-gray-300 font-Nunito">The Ultimate Car Buying Experience</p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-[#a78bfa]"><i className="fab fa-apple"></i></a>
              <a href="#" className="text-gray-300 hover:text-[#a78bfa]"><i className="fab fa-google-play"></i></a>
              <a href="#" className="text-gray-300 hover:text-[#a78bfa]"><i className="fab fa-android"></i></a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-Melodrama text-metallicgold mb-4">Other Pages</h3>
            <ul className="space-y-2 text-gray-300 font-Nunito">
              <li><a href="#" className="hover:text-[#a78bfa]">Home</a></li>
              <li><a href="#" className="hover:text-[#a78bfa]">About Us</a></li>
              <li><a href="#" className="hover:text-[#a78bfa]">Services</a></li>
              <li><a href="#" className="hover:text-[#a78bfa]">Project</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-Melodrama text-metallicgold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300 font-Nunito">
              <li><a href="#" className="hover:text-[#a78bfa]">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#a78bfa]">Terms Of Service</a></li>
              <li><a href="#" className="hover:text-[#a78bfa]">Credits</a></li>
              <li><a href="#" className="hover:text-[#a78bfa]">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-Melodrama text-metallicgold mb-4">Social Media</h3>
            <p className="text-gray-300 font-Nunito mb-4">Our Support and Sales team is available 24/7 to answer your queries</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-[#a78bfa]"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-300 hover:text-[#a78bfa]"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-300 hover:text-[#a78bfa]"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="text-gray-300 hover:text-[#a78bfa]"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer