import Image from "next/image";

import Header from "../components/Header";
import Footer from "../components/Footer";

import {} from "@fortawesome/free-solid-svg-icons";
import { faLightbulb, faBarChart } from "@fortawesome/free-regular-svg-icons";

import {
  faMobileScreenButton,
  faPalette,
  faRocket,
  faCubes,
  faChartLine,
  faUserPlus,
  faPlug,
  faSliders,
  faStore,
  faBullseye,
  faCalendarCheck,
  faCreditCard,
  faShieldHalved,
  faWrench,
  faMagnifyingGlassChart,
  faChartPie,
  faTablet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Custom Web Development",
    description:
      "Tailored websites built to fit your business. We design and develop modern, responsive websites that not only look great but work exactly how you need them to—saving time and helping your business grow.",
  },
  {
    id: 2,
    title: "Business Automation Tools",
    description:
      "Streamline your workflow and boost efficiency. From custom dashboards to internal tools, we build solutions that automate repetitive tasks, reduce manual effort, and free up your team to focus on what matters most.",
  },
  {
    id: 3,
    title: "Revenue-Driving Solutions",
    description:
      "Tools that help your business grow. We craft digital experiences and tools that turn users into customers. Whether it’s a lead capture system, an e-commerce upgrade, or a booking platform—our goal is to increase your bottom line.",
  },
  {
    id: 4,
    title: "Ongoing Support & Optimization",
    description:
      "We don’t stop at launch—we stay with you. We provide continuous support, updates, and performance improvements so your site stays fast, secure, and ahead of the competition.",
  },
];

const servicesBulletPoints = [
  {
    id: 1,
    points: [
      {
        icon: faMobileScreenButton,
        text: "Fully responsive and mobile-friendly design",
      },
      {
        icon: faPalette,
        text: "Custom UI/UX design based on your brand",
      },
      {
        icon: faRocket,
        text: "Fast-loading, SEO-optimized front-end development",
      },
      {
        icon: faCubes,
        text: "CMS or headless CMS integration (e.g., WordPress, Strapi)",
      },
    ],
  },
  {
    id: 2,
    points: [
      {
        icon: faChartLine,
        text: "Internal dashboards and reporting systems",
      },
      {
        icon: faUserPlus,
        text: "Automated customer onboarding or intake forms",
      },
      {
        icon: faPlug,
        text: "API integrations to connect your tools (e.g., CRM, invoicing, scheduling)",
      },
      {
        icon: faSliders,
        text: "Admin panels and control systems for easy in-house use",
      },
    ],
  },
  {
    id: 3,
    points: [
      {
        icon: faStore,
        text: "E-commerce store setup and optimization",
      },
      {
        icon: faBullseye,
        text: "Lead generation funnels and landing pages",
      },
      {
        icon: faCalendarCheck,
        text: "Online booking/reservation systems",
      },
      {
        icon: faCreditCard,
        text: "Payment gateway and checkout customization",
      },
    ],
  },
  {
    id: 4,
    points: [
      {
        icon: faShieldHalved,
        text: "Regular performance and security updates",
      },
      {
        icon: faWrench,
        text: "Bug fixes and platform maintenance",
      },
      {
        icon: faMagnifyingGlassChart,
        text: "Ongoing SEO and content optimization",
      },
      {
        icon: faChartPie,
        text: "Analytics setup and user behavior tracking",
      },
    ],
  },
];

const strategicPoints = [
  {
    title: "Discovery & Requirements Gathering",
    text: "We start by learning about your business, your goals, and the core features you need. Whether it's a 5-page website or something more custom, we define the scope clearly upfront to keep things smooth and focused.",
  },
  {
    title: "Custom Design & Wireframing",
    text: "From color palettes to layout flow, we design your site from the ground up — no templates. Our designs are responsive, modern, and tailored to reflect your brand’s voice and identity.",
  },
  {
    title: "Development & CMS Integration",
    text: "We build your site using clean, scalable code — no drag-and-drop limitations. Need a blog, booking system, or form integrations? We implement everything seamlessly and, where needed, connect to a CMS so you can manage content easily.",
  },
  {
    title: "Testing & Optimization",
    text: "Before launch, we rigorously test your site for performance, browser compatibility, responsiveness, and mobile experience. We also optimize for speed and basic SEO so your site is discoverable and polished from day one.",
  },
  {
    title: "Launch & Ongoing Support",
    text: "Once you're happy, we take the site live and handle all the technical stuff — from deployment to DNS and hosting. Ongoing updates, content changes, and basic maintenance are included in your monthly plan. You focus on your business — we handle the tech.",
  },
];

export default function Services() {
  const [servicePoints, setServicePoints] = useState(
    servicesBulletPoints[0].points
  );

  const steps = ["01", "02", "03", "04", "05"];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (activeIndex < steps.length - 1) {
      const timeout = setTimeout(() => {
        setActiveIndex((prev) => prev + 1);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [activeIndex]);

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Showcase Section */}
      <section className="lg:h-[70vh]">
        <div className="flex flex-col lg:flex-row lg:justify-between bg-black h-[100%]">
          {/* Showcase Text */}
          <div className="lg:w-[40%] lg:h-[100%] flex flex-col lg:justify-center px-[5%] text-white">
            <div>
              <h1 className="text-[45px] font-bold">Our Services</h1>
              <p className="text-[20px] mt-4">
                We offer a wide range of custom development services tailored to
                your particular needs.
              </p>
            </div>
            <div className="mt-10">
              <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                Get A Quote Today
              </button>
            </div>
          </div>

          {/* Showcase Image with overlay */}
          <div className="relative lg:w-[60%] lg:h-[100%]">
            <Image
              src="/assets/images/services/services.jpg"
              alt="Our Solutions"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
            {/* Overlay from left to right */}
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
          </div>
        </div>
      </section>

      {/* Services we Offer */}
      <section className="p-[5%]">
        {/* Services Text */}
        <div>
          <h1 className="text-[50px] font-bold ">
            Web Development services we offer for myriad a multitude of business
            cases
          </h1>
          <p className="text-[20px] mt-4">
            We utilize the best-in-class development tools to deliver premium
            solutions
          </p>
          {/* Connect with us button */}
          <button className="hover:underline duration-300 ease-in-out mt-10 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition ">
            Connect with us to learn more
          </button>
        </div>
        {/* Services Hover Cards */}
        <div className="lg:flex-row flex flex-col mt-10">
          {/* Hover Cards */}
          <div className="lg:w-[50%] lg:h-[100%] flex flex-col justify-center px-[5%] text-black">
            {services.map((service, index) => (
              <div
                className="my-2"
                key={index}
                onMouseEnter={() =>
                  setServicePoints(servicesBulletPoints[index].points)
                }
              >
                <p className="text-[20px] font-semibold my-2">
                  {service.title}
                </p>
                <p className="text-[18px]">{service.description}</p>
                <hr
                  className={
                    "my-4 w-[100%] h-1 py-[1px] " +
                    (servicePoints == servicesBulletPoints[index].points
                      ? `bg-gradient-radial from-blue-300 to-blue-800`
                      : "bg-gray-300")
                  }
                />
              </div>
            ))}
          </div>
          {/* Changing Cards */}
          <div className="bg-[url('../../public/assets/images/services/services-cards-background.jpg')] bg-no-repeat bg-cover lg:w-[50%] lg:h-[100%]">
            <div className="h-[100%] grid grid-cols-2 gap-4 ml-[10%] my-[5%]">
              {servicePoints.map((servicePoint) => (
                <div className="flex flex-col justify-center items-center p-4 w-[75%] h-[300px] bg-white shadow-lg rounded-lg text-center">
                  <div className="p-[20px] rounded-[50%] bg-black">
                    <FontAwesomeIcon
                      icon={servicePoint.icon}
                      className="text-[40px] w-[50px] h-[50px] text-white"
                    />
                  </div>
                  <div className="mt-4">
                    <p className="text-[18px] font-semibold">
                      {servicePoint.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* A Strategic Approach */}
      <section className="mt-10 px-[5%] ">
        <div className="p-[5%] bg-[url('../../public/assets/images/services/services-strategic-approach-background.jpg')] bg-no-repeat bg-cover h-auto">
          {/* Strategic Approach Points */}
          <div className="flex flex-col w-[100%] bg-white p-[5%] rounded-lg shadow-lg">
            {/* Top Text */}
            <div className="my-10">
              <p className="text-[45px] capitalize font-bold">
                A strategic approach to building{" "}
                <span className="text-blue-500 font-bold">
                  custom websites and tools for{" "}
                </span>
                your business.
              </p>
              <p className="text-[20px]">
                We take a strategic approach to building custom websites and
                tools for your business. Our process is designed to ensure that
                we deliver the best possible results for you, every time.
              </p>
            </div>
            {/* Strategic Points */}
            <div className="flex flex-row">
              {/* Steper */}
              <div className="mt-4">
                <div className="flex flex-col items-center">
                  {steps.map((step, index) => (
                    <React.Fragment key={index}>
                      {/* Step number */}
                      <div
                        className={`text-[30px] font-bold transition-colors duration-500 ${
                          index <= activeIndex
                            ? "text-blue-500"
                            : "text-gray-400"
                        }`}
                      >
                        {step}
                      </div>

                      {/* Vertical line (skip last) */}
                      {index < steps.length - 1 && (
                        <div
                          className={`w-px h-[55px] transition-colors duration-500 ${
                            index < activeIndex ? "bg-blue-500" : "bg-gray-300"
                          }`}
                        />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              {/* Points */}
              <div>
                {strategicPoints.map((point, index) => (
                  <div
                    key={index}
                    className={`flex flex-col ml-4 mb-4 transition-opacity duration-500 ${
                      index <= activeIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <p className="text-[20px] font-semibold">{point.title}</p>
                    <p className="text-[18px]">{point.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
