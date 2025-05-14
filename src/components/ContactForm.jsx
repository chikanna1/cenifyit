import React from "react";
import PhoneInput from "react-phone-number-input/input";
import "react-phone-number-input/style.css";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm({
  formValues,
  updateFormValue,
  handleSubmit,
  checkNotEmpty,
  formSubmitted,
  theme = "light",
}) {
  return (
    <div className="w-[100%] text-gray-200">
      <form className="mt-6">
        <div className="flex justify-between">
          <div className=" px-[10px] lg:w-[50%] w-[100%]">
            <label>
              <span className="">
                First Name <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              name="name"
              className={
                " w-full block px-8 py-3 mt-2  border-[1px] rounded-md shadow-sm " +
                (theme === "dark"
                  ? "focus:outline-none bg-transparent border-x-gray-200"
                  : "focus:outline-none bg-gray-800 border-x-gray-600")
              }
              placeholder="First Name"
              value={formValues.firstName}
              onChange={(e) => updateFormValue("firstName", e.target.value)}
            />
            <label className="block text-red-700 text-sm font-bold my-2">
              {formSubmitted
                ? checkNotEmpty(formValues.firstName) === true
                  ? ""
                  : "Please Enter A Value"
                : ""}
            </label>
          </div>
          <div className="px-[10px] lg:w-[50%] w-[100%]">
            <label>
              <span className="">Last Name</span>
            </label>
            <input
              type="text"
              name="name"
              className={
                " w-full block px-8 py-3 mt-2  border-[1px] rounded-md shadow-sm " +
                (theme === "dark"
                  ? "focus:outline-none bg-transparent border-x-gray-200"
                  : "focus:outline-none bg-gray-800 border-x-gray-600")
              }
              placeholder="Last Name"
              value={formValues.lastName}
              onChange={(e) => updateFormValue("lastName", e.target.value)}
            />
          </div>
        </div>
        <div className="mt-2 px-[10px]">
          <label>
            <span className="">
              Email Address <span className="text-red-500">*</span>
            </span>
          </label>
          <input
            name="email"
            type="email"
            className={
              " w-full block px-8 py-3 mt-2  border-[1px] rounded-md shadow-sm " +
              (theme === "dark"
                ? "focus:outline-none bg-transparent border-x-gray-200"
                : "focus:outline-none bg-gray-800 border-x-gray-600")
            }
            placeholder="Your Email Address"
            required
            value={formValues.email}
            onChange={(e) => updateFormValue("email", e.target.value)}
          />
          <label className="block text-red-700 text-sm font-bold my-2">
            {formSubmitted
              ? checkNotEmpty(formValues.email) === true
                ? ""
                : "Please Enter A Valid Email Address"
              : ""}
          </label>
        </div>
        <div className="my-2 px-[10px]">
          <label>
            <span className="">
              Phone Number <span className="text-red-500">*</span>
            </span>
          </label>
          <PhoneInput
            type="text"
            name="phoneNumber"
            className={
              " w-full block px-8 py-3 mt-2  border-[1px] rounded-md shadow-sm " +
              (theme === "dark"
                ? "focus:outline-none bg-transparent border-x-gray-200"
                : "focus:outline-none bg-gray-800 border-x-gray-600")
            }
            placeholder="Enter Your Phone Number"
            value={formValues.phoneNumber}
            onChange={(value) => updateFormValue("phoneNumber", value)}
            numberInputProps={{
              className:
                "rounded-md ml-2 py-2 px-10 min-w-[350px] w-[100%] focus:outline-gray-600 focus:bg-white outline outline-2 outline-gray-400", // my Tailwind classes
            }}
          />
          <label className="block text-red-700 text-sm font-bold my-2">
            {formSubmitted
              ? checkNotEmpty(formValues.phoneNumber) === true
                ? ""
                : "Please Enter A Valid Phone Number"
              : ""}
          </label>
        </div>
        <div className="my-5 px-[10px]">
          <label>
            <span className="">
              Project Details <span className="text-red-500">*</span>
            </span>
          </label>
          <textarea
            name="message"
            type="message"
            className={
              " w-full block px-8 py-3 mt-2  border-[1px] rounded-md shadow-sm " +
              (theme === "dark"
                ? "focus:outline-none bg-transparent border-x-gray-200"
                : "focus:outline-none bg-gray-800 border-x-gray-600")
            }
            lines={20}
            rows={7}
            required
            value={formValues.message}
            onChange={(e) => updateFormValue("message", e.target.value)}
          />
          <label className="block text-red-700 text-sm font-bold my-2">
            {formSubmitted
              ? checkNotEmpty(formValues.message) === true
                ? ""
                : "Please Enter A Message"
              : ""}
          </label>
        </div>
        {formValues.reCaptcha ? (
          <div className="mt-6 px-[10px] lg:w-[50%] lg:mx-auto">
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full block px-16 py-3 mt-2 border-gray-300 rounded-md shadow-sm focus:outline-none  bg-blue-500 text-white font-semibold"
            >
              Contact Us
            </button>
          </div>
        ) : (
          <div className="my-5 ml-2">
            <ReCAPTCHA
              sitekey="6LeFUTQrAAAAALdnCCX6USnREOviXnZ51wAHJ7nw"
              onChange={() => updateFormValue("reCaptcha", true)}
            />
          </div>
        )}
      </form>
    </div>
  );
}
