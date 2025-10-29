// app/components/CoreWebServices.tsx
"use client";

import {  Layers, Code2, Database, Settings, MonitorSmartphone } from "lucide-react";

const services = [
  {
    icon: <ShoppingBagIcon />,
    title: "Ecommerce Website Development",
    description:
      "Shopify and WooCommerce Website Development that drives sales and seamless shopping experience for clients.",
  },
  {
    icon: <Code2 />,
    title: "Full Stack Web Development",
    description:
      "Our team delivers fast, scalable full-stack solutions combining front-end and back-end frameworks for performance.",
  },
  {
    icon: <MonitorSmartphone />,
    title: "Web Portal Development Service",
    description:
      "We build secure, user-friendly web portals focused on customer interaction, data access, and business process automation.",
  },
  {
    icon: <Layers />,
    title: "CMS Development",
    description:
      "We create flexible content management systems that make website updates easy, efficient, and fully tailored to your needs.",
  },
  {
    icon: <Database />,
    title: "API Development and Integration",
    description:
      "We design and integrate powerful APIs that seamlessly connect your platforms and enhance data flow across systems.",
  },
  {
    icon: <Settings />,
    title: "Custom Web Application Development",
    description:
      "Tailored Web Application services that perfectly align with your business processes and growth objectives.",
  },
];

export default function CoreWebServices() {
  return (
    <section className= "py-16 bg-white">
      <div className="container  sm:text-center">
        <h2 className="heading font-bold color">
          Core Web Development Services
        </h2>
        <p className="mt-3 para text-gray-600 max-w-3xl mx-auto">
          As a leading website development company, we deliver end-to-end web
          solutions designed to boost performance, usability, and business growth.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-between h-full rounded-2xl border border-gray-200 bg-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all p-6 text-left"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-50 color border">
                  {service.icon}
                </div>
                <h3 className="subheading font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="para text-gray-800 leading-relaxed">
                  {service.description}
                </p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Optional custom icon for ecommerce */
function ShoppingBagIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 2l1.5 2h9L18 2M4 6h16l-1 14H5L4 6z"
      />
    </svg>
  );
}
