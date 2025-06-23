import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">About Us</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>
              <a href="#" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
          <div className="flex flex-col space-x-4 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition">
              Facebook
            </a>
            <a href="#" className="hover:text-white transition">
              Twitter
            </a>
            <a href="#" className="hover:text-white transition">
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
          <p className="text-gray-400 text-sm">
            New Delhi, India
            <br />
            Delhi 10001
            <br />
            Email:{" "}
            <a
              href="mailto:info@musicschool.com"
              className="hover:text-white transition"
            >
              info@musicschool.com
            </a>
            <br />
            Phone: (123) 456-7890
          </p>
        </div>
      </div>
      <p className="text-gray-400 text-center text-xs pt-8">© {new Date().getFullYear()} Music School. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
