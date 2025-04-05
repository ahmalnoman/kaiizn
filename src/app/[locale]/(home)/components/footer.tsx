"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <section id="footer" className="footer-background">
      <div className="wrapper flow">
        <Image
          src="/company-logo.svg"
          alt=""
          className="logo"
          width={80}
          height={30}
        />
        <div className="footer-content">
          <p>KAIIZN© 2023-2025. All Rights Reserved.</p>
          <p>info@kaiizn.com</p>
          <p>career@kaiizn.com</p>
          <Link href="https://calendly.com/kaiizn" target="_blank">
            FOUNDER 1-O-1
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
