import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contact Page | Optima AI Solutions - Your Partner in Intelligent Innovation 🚀",
  description: "Contact Optima today to learn how we can help you with intelligent innovation and cutting-edge AI solutions for your business.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="Contact Page" />

      <Contact />
    </>
  );
};

export default ContactPage;
