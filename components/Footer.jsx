// components/Footer.jsx
"use client"; // Mark this component as a Client Component

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="py-8 xl:py-12 bg-transparent">
      {" "}
      {/* Transparent background */}
      <div className="container mx-auto flex flex-col items-center">
        {/* Copyright with Logo */}
        <p className="mt-4 text-center text-white flex items-center justify-center">
          <Link href="/">
            <h1 className="text-xl font-semibold mr-2">
              {" "}
              {/* Adjusted to match the copyright text size */}© 2024 M
              <span className="text-accent">. </span>
              All Rights Reserved.
            </h1>
          </Link>
          <span className="text-xl"></span> {/* Matching text size */}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
