import Image from "next/image";

import Header from "../components/Header";
import Footer from "../components/Footer";

import showcaseImage from "../assets/Opworx.2.png";

import {} from "@fortawesome/free-solid-svg-icons";
import { faLightbulb, faBarChart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import iconbadge from "../../public/assets/images/icon-image.jpeg";
import minoritybadge from "../../public/assets/images/minorityownedbusiness.png";
import laboratorybadge from "../../public/assets/images/laboratory-org.png";
import { useState } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ContactForm from "../components/ContactForm";

export default function ContactUs() {
  const serviceId = "service_rybt4lj";
  const templateId = "template_1w1lkn9";
  const pubKey = "xDAr0292t5aO-aL89";

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    companyName: "",
    titleOrPosition: "",
    department: "",
    email: "",
    message: "",
  });

  const updateFormValue = (key, value) => {
    console.log(key);
    console.log(value);
    setFormValues({
      ...formValues,
      [key]: value,
    });
  };

  const validateEmail = () => {
    const emailRegex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;
    if (!emailRegex.test(formValues.email)) {
      console.log("Email not Valid");
      toast.error("Please enter a valid email address");
      return false;
    }
    return true;
  };

  const validateFormFields = () => {
    console.log(formValues);
    const hasEmptyFields = Object.values(formValues).some(
      (element) => element === ""
    );

    if (hasEmptyFields) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formValues);

    const validForm = validateFormFields();

    if (validForm) {
      const validEmail = validateEmail();
      if (!validEmail) {
        alert("Please Enter a Valid Email Address");
        return;
      }
    } else {
      alert("Please fill in all fields");
      return;
    }

    // Send Email

    const templateParams = {
      from_firstName: formValues.firstName,
      from_lastName: formValues.lastName,
      from_emailAddress: formValues.email,
      from_phoneNumber: formValues.phoneNumber,
      from_companyName: formValues.companyName,
      from_titleOrPosition: formValues.titleOrPosition,
      from_department: formValues.department,
      message: formValues.message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, {
        publicKey: pubKey,
      });
      console.log("SUCCESS!");
      alert("Your Message Was Successfully Sent");
    } catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        console.log("EMAILJS FAILED...", err);
        return;
      }

      console.log("ERROR", err);
      alert("Error - We are Working on this issue");
    }
  };

  return (
    <div>
      <Header />

      <div className="flex flex-col items-center pt-[2.5%] pb-[5%] lg:px-[12.5%] bg-gray-100">
        <h1 className="text-[35px]">Contact Us</h1>

        <p className="text-[25px] my-5 w-[70%] text-center">
          Have any questions or something to tell us? Please contact us and we
          will get back to you as soon as possible!
        </p>

        <hr className="my-5" />
        <div className="px-[10%] w-[100%] lg:w-[80%]">
          <ContactForm
            formValues={formValues}
            updateFormValue={updateFormValue}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
