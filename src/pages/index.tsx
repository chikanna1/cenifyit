import React, { useEffect, useState } from "react";
import Image from "next/image";

import Header from "../components/Header";
import Footer from "../components/Footer";

import showcaseImage from "../assets/Opworx.2.png";

import {} from "@fortawesome/free-solid-svg-icons";
import { faLightbulb, faBarChart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  const [activeBGHeader, setActiveBGheader] = useState(false);

  const changeBackground = () => {
    console.log(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <div>
      <Header />
      {/* Showcase */}

      <section className="">
        <video
          autoPlay
          loop
          muted
          className="object-right-top absolute h-screen w-screen -z-10 top-0 bg-black"
        >
          <source
            src="/assets/images/cenify-video-background.mp4"
            type="video/mp4"
          />
        </video>
        <div className="flex flex-col w-[50%]  mx-[50px] h-[100vh] justify-center mt-[-50px]">
          <h1 className="uppercase text-[30px] text-white">We are Cenify IT</h1>
          <p className="text-white text-[50px]">
            Custom Website & Web Application Development Focused on your Success
          </p>
          <p className="px-[20px] py-[10px] rounded-3xl border-blue-700 border-[2px] w-[50%] text-white text-center mt-5 font-semibold text-[18px] cursor-pointer hover:bg-blue-700">
            Book A Call
          </p>
        </div>
      </section>

      {/* Who We are */}
      <section>
        <div className=" bg-white h-[100vh]">
          <div>
            <h1>Who We Are</h1>
          </div>
        </div>
      </section>

      {/* Badges */}
      <Footer />
    </div>
  );
}
