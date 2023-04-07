import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 border text-base-content rounded">
        <div className="grid grid-flow-col gap-4 text-lg">
          <Link to="/" className="link link-hover">
            Home
          </Link>
          <Link to="/books" className="link link-hover">
            Books
          </Link>
          <Link to="/about" className="link link-hover">
            About us
          </Link>
          <Link to="contact" className="link link-hover">
            Contact
          </Link>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <Link>
              <FaTwitter className="fill-current w-8 h-8" />
            </Link>
            <Link>
              <FaYoutube className="fill-current w-8 h-8" />
            </Link>
            <Link>
              <FaFacebook className="fill-current w-8 h-8" />
            </Link>
          </div>
        </div>
        <div>
          <p className="text-lg">
            Copyright © 2023 - All right reserved by BookStore Industries Ltd
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
