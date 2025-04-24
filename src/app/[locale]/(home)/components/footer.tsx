"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <section id="footer" className="footer-background">
      <div className="wrapper flow">
        <div>
          <Image
            src="/company-logo.svg"
            alt=""
            className="logo"
            width={80}
            height={30}
          />
          <p>KAIIZN© 2023-2025. All Rights Reserved.</p>
        </div>
        <div className="footer-content">
          <Link href="/privacy">PRIVACY & Cookies Policy</Link>
          <div className="flex-content_inner">
            <Image src="/telegram.svg" height={20} width={20} alt="" />
            <Link href="https://t.me/solnoman" target="_blank">
              Telegram
            </Link>
          </div>
          <div className="flex-content_inner" data-link="calendly">
            <Image src="/meet.svg" height={20} width={20} alt="" />
            <Link href="https://calendly.com/kaiizn" target="_blank">
              FOUNDER 1-O-1
            </Link>
          </div>
          <Link href="#">Imprint</Link>
          <div className="flex-content_inner">
            <Image src="/linkedin.svg" height={20} width={20} alt="" />
            <Link
              href="https://www.linkedin.com/company/kaiizn/"
              target="_blank"
            >
              Linked-In
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
