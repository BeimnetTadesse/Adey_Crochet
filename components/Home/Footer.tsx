"use client";
import React from "react";
import { FaFacebookF, FaTwitter, FaDribbble, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black  text-white py-12">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and About */}
        <div>
          <h2 className="text-3xl font-bold">Adey&apos;s</h2>
          <p className="mt-4 text-gray-400">
           Our handmade pieces are more than just creations—they are a reflection
            of joy, comfort, and the beauty of handmade traditions.
          </p>

          <div className="flex space-x-4 mt-6">
            <FaFacebookF className="text-xl cursor-pointer hover:text-blue-500" />
            <FaTwitter className="text-xl cursor-pointer hover:text-blue-400" />
            <FaDribbble className="text-xl cursor-pointer hover:text-pink-500" />
            <FaYoutube className="text-xl cursor-pointer hover:text-red-500" />
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-xl font-semibold">Company</h3>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Our Customers</li>
            <li className="hover:text-white cursor-pointer">Portfolio</li>
            <li className="hover:text-white cursor-pointer">Blogs</li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-xl font-semibold">Support</h3>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">
              Legal Information
            </li>
            <li className="hover:text-white cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:text-white cursor-pointer">Report Abuse</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold">Get In Touch</h3>
          <p className="mt-4 text-gray-400">Our Mobile Number</p>
          <p className="text-lg font-semibold">+251 989 972 291</p>
          <p className="mt-4 text-gray-400">Our Address</p>
          <p className="text-lg font-semibold">Addis Ababa, Ethiopia</p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-12 border-t border-gray-700 text-center py-4 text-gray-400">
        <p>Copyright © 2025 Adey&apos;s. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer; // ✅ This is the correct ending, nothing should come after this
