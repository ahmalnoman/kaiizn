"use client";

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="wrapper flow">
        <h2>OUR SERVICES</h2>
        <div className="orange-border-bottom" data-width="small"></div>
        <div className="services-grid">
          <div className="service-card">
            <h3 className="service-card__title">Tech Innovators</h3>
            <p className="service-card__text">
              We build cutting-edge Web3, AI, and cloud-based solutions that
              drive scalable and high-performance digital transformation 🚀
            </p>
          </div>
          <div className="service-card">
            <h3 className="service-card__title">
              Full-Stack Development & DevOps
            </h3>
            <p className="service-card__text">
              Expert frontend, backend, and DevOps automation solutions to
              build, deploy, and maintain secure and scalable web applications
              🔐
            </p>
          </div>
          <div className="service-card">
            <h3 className="service-card__title">
              Cloud Migration & Optimization
            </h3>
            <p className="service-card__text">
              Effortless Azure, AWS, and GCP migration with cost-efficient cloud
              strategies to enhance performance, security, and scalability ☁️
            </p>
          </div>
          <div className="service-card">
            <h3 className="service-card__title">Security & Compliance</h3>
            <p className="service-card__text">
              Advanced penetration testing and compliance frameworks (PCI, ISO
              27001) to protect critical data and ensure full regulatory
              compliance 🛡️
            </p>
          </div>
          <div className="service-card">
            <h3 className="service-card__title">
              Business Analysis & Project Management
            </h3>
            <p className="service-card__text">
              Dedicated Business Analysts and Project Managers to streamline
              workflows, refine requirements, and ensure seamless project
              execution 📊
            </p>
          </div>
          <div className="service-card">
            <h3 className="service-card__title">
              24/7 Operational Support & Monitoring
            </h3>
            <p className="service-card__text">
              Our expert DevOps team provides real-time monitoring, rapid
              incident resolution, and performance optimization—24/7 ⚡
            </p>
          </div>
        </div>
        <div className="orange-border-bottom" data-width="xlarge"></div>
      </div>
    </section>
  );
};

export default Services;
