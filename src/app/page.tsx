import Image from "next/image";
import Link from "next/link";
import "./[locale]/(home)/home.css";
import HeroTitle from "./[locale]/(home)/components/hero-title";

export async function generateStaticParams() {
  return [{ locale: "en" }];
}

export default function Home() {
  return (
    <>
      <div className="header-hero-wrapper">
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
              <nav className="primary-navigation" aria-label="Main navigation">
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
                    <Link className="button-regular" href="#contact">
                      {" "}
                      Book a meeting{" "}
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main>
          <section id="home" className="section hero flow">
            <div className="wrapper flow">
              <HeroTitle />
              <div className="orange-border-bottom"></div>
              <div className="flex-wrapper">
                <div className="hero-text flow">
                  <p>YOUR PARTNER IN SOFTWARE, IT, AND TEAM BUILDING.</p>
                  <p>
                    WE DELIVER TOP TALENTS AND INNOVATIVE SOLUTINOS TO OPTIMIZE
                    YOUR BUSINESS AND BRING YOUR VISION TO LIFE
                  </p>
                </div>
                <div className="flex-wrapper">
                  <Link
                    href="#services"
                    className="button-lg"
                    data-color="purple"
                  >
                    SERVICES
                  </Link>

                  <Link href="#contact" className="button-lg">
                    WORK WITH US
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <div className="page-wrapper">
        <section id="services" className="section">
          <div className="wrapper flow">
            <h2>OUR SERVICES</h2>
            <div className="orange-border-bottom" data-width="small"></div>
            <div className="services-grid">
              <div className="service-card">
                <h3 className="service-card__title">Software House</h3>
                <p className="service-card__text">
                  Our Expert Teams Specialize in Backend, Frontend, and DevOps
                  Development, Ensuring Robust and Scalable Solutions. With
                  Dedicated Project Managers, We Guarantee Seamless Execution
                  and The Successful Delivery of Your Projects
                </p>
              </div>
              <div className="service-card">
                <h3 className="service-card__title">
                  DevOps & DevSecOps Solutions
                </h3>
                <p className="service-card__text">
                  Our Consultation Services Cover Business Scaling, Best
                  Practices, Team Building, and Strategic Brainstorming. With
                  High Ethical Standards and Confidentiality, We Guide Your
                  Business Toward Sustainable Success
                </p>
              </div>
              <div className="service-card">
                <h3 className="service-card__title">Cloud Solutions</h3>
                <p className="service-card__text">
                  Infrastructure Automation, CI/CD Pipelines, Cloud Deployment,
                  System Monitoring, Containerization, and Scalability Planning
                  to Ensure Operational Stability, Efficiency, and Seamless
                  Growth
                </p>
              </div>
              <div className="service-card">
                <h3 className="service-card__title">Penetration Testing</h3>
                <p className="service-card__text">
                  Infrastructure Automation, CI/CD Pipelines, Cloud Deployment,
                  System Monitoring, Containerization, and Scalability Planning
                  to Ensure Operational Stability, Efficiency, and Seamless
                  Growth
                </p>
              </div>
              <div className="service-card">
                <h3 className="service-card__title">
                  Implementing PCI Compliance & ISO 27001
                </h3>
                <p className="service-card__text">
                  Developing Robust and Scalable Backend Solutions, API Design,
                  Database Management, Server-Side Logic, and Seamless
                  Integrations Using PHP, Node.js, NE, Go, and Java to Ensure
                  Optimal Performance, Security, and Reliability for Your
                  Applications
                </p>
              </div>
              <div className="service-card">
                <h3 className="service-card__title">
                  24/7 On-Call DevOps Experts
                </h3>
                <p className="service-card__text">
                  Our team of experienced DevOps professionals is available
                  around the clock to resolve any production issues, ensuring
                  your operations run smoothly.
                </p>
              </div>
              <div className="service-card">
                <h3 className="service-card__title">
                  Free Implementation on Azure, AWS, & GCP
                </h3>
                <p className="service-card__text">
                  Get complimentary implementation and testing of our services
                  on the cloud infrastructure of your choice—Azure, AWS, or
                  GCP—at no extra cost.
                </p>
              </div>
              <div className="service-card">
                <h3 className="service-card__title">
                  Production Support On-Call
                </h3>
                <p className="service-card__text">
                  Count on our dedicated team for immediate support to address
                  any production concerns, ensuring continuous uptime and
                  performance.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
