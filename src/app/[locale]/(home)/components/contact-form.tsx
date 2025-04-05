"use client";

import { useTranslations } from "next-intl";
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
  const t = useTranslations("ContactPage");

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
        <h1>{t("contact-us")}</h1>
        <div className="contact-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t("name")}</label>
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
              <label htmlFor="email">{t("email")}</label>
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
              <label htmlFor="country">{t("country")}</label>
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
              <label htmlFor="phone">{t("phone-number")}</label>
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
              <label htmlFor="message">{t("tell-us-more")}</label>
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
              {t("send")}
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
          <h2>{t("our-comprehensive-offerings")}</h2>
          <p>{t("our-comprehensive-offerings-desc")}</p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
