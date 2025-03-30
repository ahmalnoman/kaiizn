"use client";

import Image from "next/image";

import { useState, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  country: string;
  phone: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    country: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: "service_2di3e69",
            template_id: "template_b9s4bdl",
            user_id: "Xud232kO9EwyDqPf5",
            template_params: {
              from_name: formData.name,
              from_email: formData.email,
              from_country: formData.country,
              from_phone: formData.phone,
              message: formData.message,
            },
          }),
        },
      );

      if (response.ok) {
        setStatus("Email sent successfully!");
        setFormData({
          name: "",
          email: "",
          country: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus("Failed to send email. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section about-background"
    >
      <div className="wrapper flow">
        <h1>Contact Us</h1>
        <div className="contact-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                className="form-input"
                type="text"
                id="name"
                value={formData.name}
                name="name"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className="form-input"
                type="email"
                id="email"
                value={formData.email}
                name="email"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country,City</label>
              <input
                className="form-input"
                type="text"
                id="country"
                value={formData.country}
                name="country"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                className="form-input"
                type="text"
                id="phone"
                value={formData.phone}
                name="phone"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Tell us more</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                rows={4}
                required
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="button-lg" data-color="purple">
              Send
            </button>
            {status && <p>{status}</p>}
          </form>
          <Image
            src="./contact.svg"
            alt=""
            height={750}
            width={750}
            // className="floating-image"
          />
        </div>
        <div className="orange-border-bottom" data-width="xlarge"></div>
        <div className="about-contact">
          <h2>Our Comprehensive Offerings</h2>
          <p>
            Kaiizn is committed to delivering innovative and high-quality
            software solutions tailored to modern technological demands. Our
            services are designed to adapt to your business needs, ensuring you
            stay ahead in a constantly evolving digital landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
