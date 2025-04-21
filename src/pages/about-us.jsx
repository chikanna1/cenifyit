import Image from "next/image";

import Header from "../components/Header";
import Footer from "../components/Footer";

import {} from "@fortawesome/free-solid-svg-icons";
import { faLightbulb, faBarChart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Link as ScrollLink,
  Element as ScrollElement,
  animateScroll as scroll,
} from "react-scroll";

export default function AboutUs() {
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
                Helping businesses establish their web prescense and reach more
                customers
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
      <section>
        <div className="lg:px-[15%] text-center h-[50vh]">
          <p className="text-[25px] font-bold my-10">
            Transforming Your Business with Innovative Digital Solutions
          </p>
          <p className="text-[25px] mt-6">
            Founded in 2020, Cenify IT is a dynamic software development company
            dedicated to delivering cutting-edge digital solutions. We
            specialize in Web and Mobile Development, Artificial Intelligence,
            Data Science, and Cloud Services, helping businesses evolve and
            thrive in a competitive market. With a team of highly skilled
            professionals, we leverage AI, Machine Learning, and Cloud
            Technologies to create tailored, scalable solutions that enhance
            business performance.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
