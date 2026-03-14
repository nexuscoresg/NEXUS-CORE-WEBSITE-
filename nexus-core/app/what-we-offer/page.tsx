import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "IT Services & Solutions in Bangalore",
  description: "Comprehensive IT services in Bangalore: WiFi Site Surveys, IT Smart Hands Support, 24/7 Maintenance, Cloud & Data Center solutions, and IoT integration across APAC.",
  openGraph: {
    title: "Enterprise IT Services & Solutions Bangalore | Nexus Core",
    description: "From Ekahau WiFi surveys to 24/7 smart hands maintenance, we provide end-to-end IT solutions for businesses in Bangalore and across APAC.",
  },
};

export default function WhatWeOffer() {
  return <ServicesClient />;
}
