import Image from "next/image";
import React, { useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import {
  Link as ScrollLink,
  Element as ScrollElement,
  animateScroll as scroll,
} from "react-scroll";

import ContactForm from "../components/ContactForm";

import {
  faListCheck,
  faQuoteLeft,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";
import { faLightbulb, faBarChart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ourValues = [
  {
    title: "Tailored Efficiency",
    text: "We build custom tools and websites designed specifically for your business needs and workflows. By streamlining your operations, we help you save time and reduce costs—without compromising on quality.",
    image: "/assets/images/about-us/tailored-strategy.jpg",
  },
  {
    title: "Growth-Driven Solutions",
    text: "Everything we create is built with your business growth in mind. From increasing revenue to attracting more customers, our tools are made to give you an edge in your industry.",
    image: "/assets/images/about-us/tailored-solutions.jpg",
  },
  {
    title: "Partnership Over Projects",
    text: "We see every client relationship as a long-term partnership. That means we're with you beyond the launch—offering support, improvements, and ideas that keep your business moving forward.",
    image: "/assets/images/about-us/partnership.jpg",
  },
  {
    title: "Smart Tech, Simple Experience",
    text: "We see every client relationship as a long-term partnership. That means we're with you beyond the launch—offering support, improvements, and ideas that keep your business moving forward.",
    image: "/assets/images/about-us/smart-tech.jpg",
  },
];

const values = [
  {
    title: "Practical Innovation",
    text: "Every tool and feature we build is designed to bring real-world value to your business.",
  },
  {
    title: "More than 'Deliverables'",
    text: "Everything we build is designed to save time, cut costs, or grow revenue.",
  },
  {
    title: "Client-Centered Thinking",
    text: "We listen, adapt, and build around your unique workflow—because no two businesses are the same.",
  },
  {
    title: "Sustainable Growth",
    text: "We help businesses grow in ways that last. From scalable tech to tools that evolve with you.",
  },
  {
    title: "Simplicity with Power",
    text: "Clean, user-friendly tech that works hard—without being hard to use.",
  },
];

export default function AboutUs() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    projectProposal: "",
  });

  const updateFormValue = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const checkNotEmpty = (value) => {
    console.log("Checking" + value);
    if (values[value].length <= 0) {
      return false;
    }
    return true;
  };
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = () => {
    console.log("Form Submitted");
    setFormSubmitted(true);
  };
  return (
    <div>
      <Header alwaysScrolled={true} />

      {/* Showcase */}
      <section>
        <div className="flex flex-col lg:flex-row lg:h-[75vh]">
          <div className="bg-black text-white lg:w-[47%] flex flex-col justify-center bg-gradient-to-b lg:bg-gradient-to-r from-mint-tulip-500 ">
            <div className="mx-[10%]">
              <p className="text-[35px] font-semibold">About Us</p>
              <p className="mt-8 text-[20px]">
                Helping businesses save time, increase profits, and expand their
                reach through custom development
              </p>
              <div className="">
                <ScrollLink to="getInTouchSection">
                  <button className="w-[250px] mt-10 text-[20px] bg-blue-800  text-white py-[10px] px-[20px] rounded-2xl font-semibold hover:opacity-90 text-center">
                    Learn More Today
                  </button>
                </ScrollLink>
              </div>
            </div>
          </div>
          <div className="lg:w-[53%] h-[80vh] lg:h-[75vh] bg-[url('/assets/images/about-us/showcase.jpeg')] bg-[position:30%_100%]  bg-no-repeat bg-cover bg-blend-lighten from-white bg-white bg-opacity-10 z-[-10] mt-10 lg:mt-0">
            <p></p>
          </div>
        </div>
      </section>

      {/* About Us Text Secion */}
      <section className="h-[55vh] flex flex-col items-center justify-center">
        <div className="lg:px-[25%] text-center">
          <p className="text-[25px] font-bold mb-10">
            Transforming Your Business with Innovative Digital Solutions
          </p>
          <p className="text-[25px] mt-6 ">
            Founded in 2020, Cenify IT is a dynamic software development company
            dedicated to delivering cutting-edge solutions. We specialize in Web
            and Mobile Development, Artificial Intelligence, and Cloud Services.
            Our goal is to help businesses evolve and thrive in a competitive
            market.
          </p>
        </div>
      </section>
      {/* Values 1 and 2 */}
      <section className="py-[30px] bg-white lg:px-[7%]">
        <div className="flex flex-row justify-between my-20">
          {/* Value Text */}
          <div className="w-[50%]">
            <p className="text-[35px] font-semibold my-4">
              {ourValues[0].title}
            </p>
            <p className="text-[20px]">{ourValues[0].text}</p>
          </div>
          {/* Value Image */}
          <div className="w-[550px] h-[400px]">
            <Image
              src={ourValues[0].image}
              alt="Tailored Efficiency"
              width={1000}
              height={1000}
              className="w-[100%] h-[100%] brightness-[0.6]"
            />
          </div>
        </div>
        <div className="flex flex-row-reverse justify-between my-20">
          {/* Value Text */}
          <div className="w-[50%]">
            <p className="text-[35px] font-semibold my-4">
              {ourValues[1].title}
            </p>
            <p className="text-[20px]">{ourValues[1].text}</p>
          </div>
          {/* Value Image */}
          <div className="w-[550px] h-[400px]">
            <Image
              src={ourValues[1].image}
              alt="Tailored Efficiency"
              width={1000}
              height={1000}
              className="w-[100%] h-[100%]"
            />
          </div>
        </div>
      </section>

      {/* Values Showcase */}
      <section className=" bg-black px-[5%] py-[5%]">
        <div className="flex flex-col">
          <div className="text-center text-white">
            <p className="text-[35px] font-semibold my-4">Values</p>
            <p className="px-[10%] text-[22px] capitalize">
              Our core values guide everything we build—from the way we
              collaborate with clients to the impact our solutions create.
            </p>
          </div>
          {/* Value Cards */}
          <div className="grid grid-cols-5 gap-4 mt-10">
            {values.map((value, index) => (
              <div
                key={index}
                className="w-[250px] h-[275px] bg-white rounded-lg py-4 px-4"
              >
                <p className="text-[22px] font-semibold h-[75px] text-center">
                  {value.title}
                </p>
                <p className="my-4 text-[18px]">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values 3 and 4 */}
      <section className="py-[30px] bg-white lg:px-[7%]">
        <div className="flex flex-row justify-between my-20">
          {/* Value Text */}
          <div className="w-[50%]">
            <p className="text-[35px] font-semibold my-4">
              {ourValues[2].title}
            </p>
            <p className="text-[20px]">{ourValues[2].text}</p>
          </div>
          {/* Value Image */}
          <div className="w-[550px] h-[400px]">
            <Image
              src={ourValues[2].image}
              alt="Tailored Efficiency"
              width={1000}
              height={1000}
              className="w-[100%] h-[100%] brightness-[0.6]"
            />
          </div>
        </div>
        <div className="flex flex-row-reverse justify-between my-20">
          {/* Value Text */}
          <div className="w-[50%]">
            <p className="text-[35px] font-semibold my-4">
              {ourValues[3].title}
            </p>
            <p className="text-[20px]">{ourValues[3].text}</p>
          </div>
          {/* Value Image */}
          <div className="w-[550px] h-[400px]">
            <Image
              src={ourValues[3].image}
              alt="Tailored Efficiency"
              width={1000}
              height={1000}
              className="w-[100%] h-[100%]"
            />
          </div>
        </div>
      </section>

      {/* Contact Us  */}
      <section className="lg:h-[100vh] bg-black text-white">
        <div className="flex flex-col-reverse lg:flex-row px-[50px] pt-[50px]">
          {/* Form */}
          <div className="lg:w-[40%]">
            <div className="hidden lg:block my-4 mx-auto w-[50%]">
              <FontAwesomeIcon
                className="text-blue-800 w-[100%] h-[100%] text-[30px] my-10"
                icon={faListCheck}
                size="4x"
              />
            </div>
            <div>
              <p className="my-4 text-[25px] font-semibold text-center w-[60%] mx-auto italic">
                <span>
                  <FontAwesomeIcon
                    className="mr-3 text-blue-800 text-[30px]"
                    icon={faQuoteLeft}
                    size="2x"
                  />
                </span>
                The best time to start was yesterday. The next best time is
                today.
                <span>
                  <FontAwesomeIcon
                    className="ml-3 text-blue-800 text-[30px]"
                    icon={faQuoteRight}
                    size="2x"
                  />
                </span>
              </p>
            </div>
          </div>
          <div className="lg:w-[60%] px-[5%]">
            <h3 className="text-[30px] font-semibold text-center">
              Request a Project Quote
            </h3>
            <ContactForm
              formValues={formValues}
              updateFormValue={updateFormValue}
              handleSubmit={handleFormSubmit}
              checkNotEmpty={checkNotEmpty}
              formSubmitted={formSubmitted}
            />
          </div>
          {/* Contact Info */}
        </div>
      </section>

      <Footer />
    </div>
  );
}
