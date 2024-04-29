import Image from "next/image";

import Header from "../components/Header";
import Footer from "../components/Footer";

import showcaseImage from "../assets/Opworx.2.png";

import {} from "@fortawesome/free-solid-svg-icons";
import { faLightbulb, faBarChart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import opworxTeamPicture from "../../public/assets/images/our-team.jpg";

export default function AboutUs() {
  return (
    <div>
      <Header />
      <div className="w-[100vw] h-[40vh] bg-[url('/assets/images/servicesShowcase.jpg')] bg-[position:50%_40%] bg-no-repeat">
        <div className="w-full h-full backdrop-brightness-[40%]">
          <h1 className="text-center text-white brightness-75 text-[85px] md:text-[100px] lg:text-[125px]">
            About Us
          </h1>
        </div>
      </div>

      <div className="flex flex-col px-[10%] items-center lg:mx-[12.5%]">
        <p className="text-[35px] text-center my-5 underline">Our Team</p>

        <Image
          alt="Opworx"
          className=" w-[90%] h-[100%] lg:w-[600px] lg:h-[500px]"
          width={600}
          height={500}
          src={opworxTeamPicture}
        />

        <p className="text-center text-[20px] mt-[50px] my-5">
          Meet our operations and management wizards! We&apos;re the architects
          of seamless efficiency, the maestros of organization. With a sprinkle
          of fun, we turn chaos into symphonies, making work a joyous journey.
        </p>
        <p className="text-center text-[20px] my-5">
          Passionate about technology, innovation, and efficiency, we thrive on
          solving your managerial and operational challenges. Let us be your
          problem-solving companions, turning hurdles into opportunities with a
          smile.
        </p>
      </div>
      <Footer />
    </div>
  );
}
