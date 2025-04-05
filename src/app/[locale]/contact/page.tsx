import ContactForm from "../(home)/components/contact-form";
import Footer from "../(home)/components/footer";
import Header from "../(home)/components/header";
import "../(home)/home.css";

export async function generateStaticParams() {
  return [{ locale: "en" }];
}

export default function Contact() {
  return (
    <>
      <Header />
      <ContactForm />
      <Footer />
    </>
  );
}
