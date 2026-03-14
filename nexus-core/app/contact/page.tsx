import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Nexus Core for reliable IT consulting and support. We are here to help your business grow with expert IT solutions.",
  openGraph: {
    title: "Contact Nexus Core",
    description: "Ready to transform your IT infrastructure? Contact us today for a consultation.",
  },
};

export default function Contact() {
  return <ContactClient />;
}
