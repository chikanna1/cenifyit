import React from "react";
import PhoneInput from "react-phone-number-input/input";
import "react-phone-number-input/style.css";

export default function ContactForm({
  formValues,
  updateFormValue,
  handleSubmit,
}) {
  return (
    <div className="w-[100%]">
      <form className="mt-6">
        <div className="flex justify-between">
          <div className="mb-2 px-[10px]">
            <label>
              <span className="text-black">
                First Name <span className="text-red-500">*</span>
              </span>
              <input
                type="text"
                name="name"
                className=" w-full block px-16 py-3 mt-2 border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="First Name"
                value={formValues.firstName}
                onChange={(e) => updateFormValue("firstName", e.target.value)}
              />
            </label>
          </div>
          <div className="mb-2 px-[10px]">
            <label>
              <span className="text-black">
                Last Name <span className="text-red-500">*</span>
              </span>
              <input
                type="text"
                name="name"
                className=" w-full block px-16 py-3 mt-2 border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Last Name"
                value={formValues.lastName}
                onChange={(e) => updateFormValue("lastName", e.target.value)}
              />
            </label>
          </div>
        </div>
        <div className="my-3 px-[10px]">
          <label>
            <span className="text-black">
              Email address <span className="text-red-500">*</span>
            </span>
            <input
              name="email"
              type="email"
              className=" w-full block px-16 py-4 mt-2 border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="Your Email Address"
              required
              value={formValues.email}
              onChange={(e) => updateFormValue("email", e.target.value)}
            />
          </label>
        </div>
        <div className="mb-2 px-[10px]">
          <label>
            <span className="text-black">
              Phone Number <span className="text-red-500">*</span>
            </span>
            <PhoneInput
              type="text"
              name="phoneNumber"
              className=" w-full block px-16 py-3 mt-2 border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="Enter Your Phone Number"
              value={formValues.phoneNumber}
              onChange={(value) => updateFormValue("phoneNumber", value)}
              numberInputProps={{
                className:
                  "rounded-md ml-2 py-2 px-10 min-w-[350px] w-[100%] focus:outline-gray-600 focus:bg-white outline outline-2 outline-gray-400", // my Tailwind classes
              }}
            />
          </label>
        </div>

        <div className="mb-2 px-[10px]">
          <label>
            <span className="text-black">
              Company/Institution <span className="text-red-500">*</span>
            </span>
            <input
              type="text"
              name="name"
              className=" w-full block px-16 py-3 mt-2 border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="Enter Your Company/Institution"
              value={formValues.companyName}
              onChange={(e) => updateFormValue("companyName", e.target.value)}
            />
          </label>
        </div>
        <div className="mb-2 px-[10px]">
          <label>
            <span className="text-black">
              Title/Position <span className="text-red-500">*</span>
            </span>
            <input
              type="text"
              name="name"
              className=" w-full block px-16 py-3 mt-2 border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="Enter Your Title/Position"
              value={formValues.titleOrPosition}
              onChange={(e) =>
                updateFormValue("titleOrPosition", e.target.value)
              }
            />
          </label>
        </div>
        <div className="mb-2 px-[10px]">
          <label>
            <span className="text-black">
              Department <span className="text-red-500">*</span>
            </span>
            <input
              type="text"
              name="name"
              className=" w-full block px-16 py-3 mt-2 border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="Enter Your Department"
              value={formValues.department}
              onChange={(e) => updateFormValue("department", e.target.value)}
            />
          </label>
        </div>

        <div className="my-3 px-[10px]">
          <label>
            <span className="text-black">
              Message <span className="text-red-500">*</span>
            </span>
            <textarea
              name="message"
              type="message"
              className=" w-full block px-16 py-4 mt-2 border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              lines={20}
              rows={7}
              required
              value={formValues.message}
              onChange={(e) => updateFormValue("message", e.target.value)}
            />
          </label>
        </div>

        <div className="mt-6 px-[10px]">
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
