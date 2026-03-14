import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Nexus Core's mission to provide enterprise-grade IT support, network solutions, and digital transformation services in Singapore & Malaysia.",
  openGraph: {
    title: "About Nexus Core - Enterprise IT Solutions",
    description: "Building the future of enterprise IT with reliable support and innovative solutions.",
  },
};

export default function About() {
  return <AboutClient />;
}
