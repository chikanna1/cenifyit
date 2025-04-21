import React from "react";
import PhoneInput from "react-phone-number-input/input";
import "react-phone-number-input/style.css";

export default function ContactForm({
  formValues,
  updateFormValue,
  handleSubmit,
  checkNotEmpty,
  formSubmitted,
}) {
  return (
    <div className="w-[100%]">
      <form className="mt-6">
        <div className="flex justify-between">
          <div className="mb-2 px-[10px] lg:w-[50%] w-[100%]">
            <label>
              <span className="text-black font-semibold">
                First Name <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              name="name"
              className=" w-full block px-8 py-3 mt-2 border-black border-[2px] rounded-md shadow-sm focus:border-gray-700 focus:ring focus:ring-gray-700 focus:ring-opacity-50"
              placeholder="First Name"
              value={formValues.firstName}
              onChange={(e) => updateFormValue("firstName", e.target.value)}
            />
            <label>
              {formSubmitted
                ? checkNotEmpty("firstName") === true
                  ? ""
                  : "Please Enter A Value"
                : ""}
            </label>
          </div>
          <div className="mb-2 px-[10px] lg:w-[50%] w-[100%]">
            <label>
              <span className="text-black font-semibold">Last Name</span>
            </label>
            <input
              type="text"
              name="name"
              className=" w-full block px-8 py-3 mt-2 border-black border-[2px] rounded-md shadow-sm focus:border-gray-700 focus:ring focus:ring-gray-700 focus:ring-opacity-50"
              placeholder="Last Name"
              value={formValues.firstName}
              onChange={(e) => updateFormValue("lastName", e.target.value)}
            />
          </div>
        </div>
        <div className="my-5 px-[10px]">
          <label>
            <span className="text-black font-semibold">
              Email Address <span className="text-red-500">*</span>
            </span>
          </label>
          <input
            name="email"
            type="email"
            className=" w-full block px-8 py-3 mt-2 border-black border-[2px] rounded-md shadow-sm focus:border-gray-700 focus:ring focus:ring-gray-700 focus:ring-opacity-50"
            placeholder="Your Email Address"
            required
            value={formValues.email}
            onChange={(e) => updateFormValue("email", e.target.value)}
          />
        </div>
        <div className="my-5 px-[10px]">
          <label>
            <span className="text-black font-semibold">
              Phone Number <span className="text-red-500">*</span>
            </span>
          </label>
          <PhoneInput
            type="text"
            name="phoneNumber"
            className=" w-full block px-8 py-3 mt-2 border-black border-[2px] rounded-md shadow-sm focus:border-gray-700 focus:ring focus:ring-gray-700 focus:ring-opacity-50"
            placeholder="Enter Your Phone Number"
            value={formValues.phoneNumber}
            onChange={(value) => updateFormValue("phoneNumber", value)}
            numberInputProps={{
              className:
                "rounded-md ml-2 py-2 px-10 min-w-[350px] w-[100%] focus:outline-gray-600 focus:bg-white outline outline-2 outline-gray-400", // my Tailwind classes
            }}
          />
        </div>
        <div className="my-5 px-[10px]">
          <label>
            <span className="text-black font-semibold">
              Project Details <span className="text-red-500">*</span>
            </span>
          </label>
          <textarea
            name="message"
            type="message"
            className=" w-full block px-8 py-3 mt-2 border-black border-[2px] rounded-md shadow-sm focus:border-gray-700 focus:ring focus:ring-gray-700 focus:ring-opacity-50"
            lines={20}
            rows={7}
            required
            value={formValues.message}
            onChange={(e) => updateFormValue("message", e.target.value)}
          />
        </div>
        <div className="mt-6 px-[10px] lg:w-[50%] lg:mx-auto">
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full block px-16 py-3 mt-2 border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-blue-500 text-white font-semibold"
          >
            Contact Us
          </button>
        </div>
      </form>
    </div>
  );
}
