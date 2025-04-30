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
  form_consent: boolean;
}

const ContactForm = () => {
  const t = useTranslations("ContactPage");

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    country: "",
    phone: "",
    message: "",
    form_consent: false,
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const value =
      e.target.type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

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
              form_consent: formData.form_consent,
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
          form_consent: false,
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
              <label className="relative flex items-start cursor-pointer group">
                <input
                  className="peer sr-only"
                  type="checkbox"
                  name="form_consent"
                  checked={formData.form_consent}
                  onChange={handleChange}
                  required
                />
                <div
                  className="w-[20px] h-[20px] rounded-md border-2 border-purple-500 peer-checked:bg-gradient-to-br from-purple-500 to-pink-500 peer-checked:border-0 grid place-items-center"
                >
                  <svg 
                    className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="ml-3 text-sm font-medium text-gray-100 mt-[1px]">
                  {t("form_consent")}
                </span>
              </label>
            </div>
            <button 
              type="submit" 
              className="button-lg" 
              data-color="purple"
              disabled={!formData.form_consent}
            >
              {t("send")}
            </button>
            {status && <p>{status}</p>}
          </form>
          <Image
            src="/contact.svg"
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
