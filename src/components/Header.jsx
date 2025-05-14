import Link from "next/link";

import Hamburger from "hamburger-react";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useContext } from "react";
import ContactForm from "./ContactForm";
import Modal from "./Modal";
import Image from "next/image";

import logo from "../../public/assets/images/CenifyITLogo.png";
import ReactLoading from "react-loading";

const DockComponent = dynamic(() =>
  import("react-dock").then((mod) => mod.Dock)
);

function Header({ alwaysScrolled = false }) {
  const [isOpen, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    reCaptcha: false,
  });

  const [validFormValues, setValidFormValues] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phoneNumber: false,
    message: false,
    reCaptcha: false,
  });

  const validateEmailSyntax = () => {
    if (formValues.email.length <= 0) {
      return false;
    }

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(formValues.email)) {
      return false;
    }
    return true;
  };

  const validateNotEmptyValue = (value) => {
    if (value.length <= 0) {
      return false;
    }
    return true;
  };

  const validForm = () => {
    console.log("Validating Form");
    const validFirstName = validateNotEmptyValue(formValues.firstName);
    const validEmail = validateEmailSyntax(formValues.email);

    const validPhoneNumber = validateNotEmptyValue(formValues.phoneNumber);
    const validMessage = validateNotEmptyValue(formValues.message);
    if (
      !validFirstName ||
      !validEmail ||
      !validPhoneNumber ||
      !validMessage ||
      !formValues.reCaptcha
    ) {
      return false;
    } else {
      return true;
    }
  };

  const [sendingForm, setSendingForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleScroll = () => {
    // Change the value based on the scroll position
    setIsScrolled(window.scrollY > 50);
  };

  const updateFormValue = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
    console.log("Form Values:", formValues);
  };

  const handleFormSubmit = async () => {
    setSendingForm(true);
    setFormSubmitted(true);
    if (!validForm()) {
      setTimeout(() => {
        setSendingForm(false);
      }, 2000);
      return;
    }
    const response = await fetch("/api/contact/send-email-to-admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });

    console.log("Response:", response);
    console.log("Response Status:", response.status);

    if (response.ok) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setSendingForm(false);
      }, 2000);
    } else {
      setSendingForm(false);
      console.error("Error sending form data:", response.statusText);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sticky top-0 z-50">
      <div
        className={
          `flex py-1 items-center justify-between px-10` +
          (isScrolled || alwaysScrolled
            ? " bg-white"
            : " bg-black text-white") +
          (showModal ? " hidden" : "")
        }
      >
        <Link href="/">
          <div className="">
            <Image
              className={`w-[200px] h-[100px]`}
              src={logo}
              alt="Badge"
              width={150}
              height={150}
            />
          </div>
        </Link>

        <div className="hidden md:flex space-x-5">
          <Link
            className="text-[18px] text-slate-600 py-2 hover:text-slate-400 transition duration-500 rounded-md text-center"
            href="/about-us"
          >
            About Us
          </Link>
          <Link
            className="text-[18px] text-slate-600 py-2 hover:text-slate-400 transition duration-500 rounded-md text-center"
            href="/our-services"
          >
            Services
          </Link>

          <div
            className="text-[18px] text-black  hover:text-slate-400 transition duration-500 rounded-2xl text-center bg-white px-4 py-2 hover:cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            Let's Connect
          </div>
        </div>
        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} color="white" />
          <div className="mixed-chart">
            {typeof window !== "undefined" && (
              <DockComponent position="top" isVisible={isOpen} size={0.75}>
                <div onClick={() => setOpen(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 mx-auto mb-10 cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>

                <div className="flex flex-col h-[100%] justify-around py-[20%] mt-[-10%] uppercase">
                  <Link
                    className="text-md text-slate-600 py-2 hover:text-slate-400 transition duration-500 rounded-md text-center"
                    href="/aboutus"
                  >
                    About Us
                  </Link>
                  <Link
                    className="text-md text-slate-600 py-2 hover:text-slate-400 transition duration-500 rounded-md text-center"
                    href="/ourservices"
                  >
                    Our Services
                  </Link>

                  <div
                    className="text-md text-slate-600 bg-white py-2 hover:text-slate-400 transition duration-500 text-center px-4 rounded-lg"
                    href="/contactus"
                  >
                    Let's Connect
                  </div>
                </div>
              </DockComponent>
            )}
          </div>
        </div>
      </div>

      <Modal
        isVisible={showModal}
        onClose={() => {
          setShowModal(false);
          setFormSubmitted(false);
          setSendingForm(false);
          setFormValues({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            message: "",
            reCaptcha: false,
          });
        }}
      >
        <div className="h-[96vh] w-[100vw] bg-black">
          {sendingForm ? (
            <div className="h-[100%] flex flex-col items-center justify-center">
              <ReactLoading
                className="mx-auto"
                type="spin"
                color="#ffffff"
                height={500}
                width={500}
              />
            </div>
          ) : (
            <div className="h-[100%] pt-[1%] pb-[10%] flex lg:flex-row lg:justify-around flex-col">
              <div className="flex flex-col w-[40%]">
                <div className="">
                  <Image
                    className={`w-[300px] h-[175px]]`}
                    src={logo}
                    alt="Badge"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="text-white  mt-10 lg:mt-0">
                  <p className="text-[40px]">
                    Your journey to <br /> innovation starts here
                  </p>
                  <p cl assName="my-8 text-[20px]">
                    Let’s bring your vision to life with our expertise in AI and
                    custom development. Reach out to us to discuss your project
                    today!
                  </p>
                </div>
              </div>
              {/* Form */}
              <div className="w-[40%]">
                <ContactForm
                  formValues={formValues}
                  updateFormValue={updateFormValue}
                  handleSubmit={handleFormSubmit}
                  checkNotEmpty={validateNotEmptyValue}
                  formSubmitted={formSubmitted}
                  theme="dark"
                />
              </div>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default Header;
