"use client";

import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="about-background">
      <div className="wrapper flow">
        <h2>Why Choose KAIIZN ?</h2>
        <div className="orange-border-bottom" data-width="medium"></div>
        <div className="about-flex">
          <div className="about-flex__inner">
            <div className="about-flex-content">
              <h3>Seamless Tech Solutions</h3>
              <p>
                Specialized in Web3 & AI innovations, full-stack Web2
                development, and DevOps solutions. We simplify complexity,
                enhance scalability, and drive measurable success with
                cutting-edge technology.
              </p>
              <p>Web3 & AI-Powered Innovations</p>
              <p>End-to-End Web2 Development & DevOps</p>
            </div>
            <Image
              src="./seamless.svg"
              alt=""
              height={420}
              width={400}
              className="floating-image"
            />
          </div>
          <div className="about-flex__inner special">
            <Image
              src="./intelligent.svg"
              alt=""
              height={420}
              width={400}
              className="floating-image"
            />
            <div className="about-flex-content">
              <h3>Intelligent Resource Optimization</h3>
              <p>
                Empowering businesses with strategic resource management,
                ensuring maximum efficiency, scalability, and sustainable
                growth. Our data-driven approach optimizes investments for
                long-term success.
              </p>
              <p>Performance-Driven Strategic Planning</p>
              <p>Agile Scalability & Adaptive Flexibility</p>
            </div>
          </div>
          <div className="about-flex__inner">
            <div className="about-flex-content">
              <h3>Customized Tech Solutions</h3>
              <p>
                Building sleek, user-centric interfaces, scalable backends, and
                seamless deployments, all powered by expert DevOps. Our
                solutions are engineered for agility, efficiency, and long-term
                success.
              </p>
              <p>Data-Driven Performance Optimization</p>
              <p>Scalable, Future-Proof Architecture</p>
            </div>
            <Image
              src="./customized.svg"
              alt=""
              height={420}
              width={400}
              className="floating-image"
            />
          </div>
        </div>
        <div className="orange-border-bottom" data-width="xlarge"></div>
        <div className="about-contact">
          <h2>Our Comprehensive Offerings</h2>
          <p>
            Kaiizn is committed to delivering innovative and high-quality
            software solutions tailored to modern technological demands. Our
            services are designed to adapt to your business needs, ensuring you
            stay ahead in a constantly evolving digital landscape
          </p>
          <Link href="#contact" className="button-regular" data-padding="small">
            CONTACT US
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
