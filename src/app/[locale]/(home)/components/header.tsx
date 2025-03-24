"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <Link href="#home" className="skip-to-main">
        Skip to main content
      </Link>
      <header className="site-header">
        <div className="wrapper">
          <div className="site-header__inner">
            <Link href="/">
              <Image
                src="/company-logo.svg"
                alt=""
                className="logo"
                width={80}
                height={30}
              />
            </Link>
            <button
              aria-controls="primary-nav"
              aria-expanded={isExpanded}
              onClick={toggleMenu}
            >
              <span className="visually-hidden">Menu</span>
              <Image src="/hamburger.svg" alt="" height={40} width={40} />
            </button>
            <nav
              className="primary-navigation"
              aria-label="Main navigation"
              id="primary-nav"
            >
              <ul role="list">
                <li>
                  <Link href="#home">Home</Link>
                </li>
                <li>
                  <Link href="#services">Services</Link>
                </li>
                <li>
                  <Link href="#about">About Us</Link>
                </li>
                <li>
                  <Link href="#contact">Contact Us</Link>
                </li>
                <li>
                  <Link
                    className="button-regular"
                    href="https://calendly.com/kaiizn"
                    target="_blank"
                  >
                    {" "}
                    Book a meeting{" "}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
