import React, { useEffect, useState } from "react";
import Image from "next/image";

import Header from "../components/Header";
import Footer from "../components/Footer";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactForm from "../components/ContactForm";

import {
  faLayerGroup,
  faRocket,
  faShoppingCart,
  faProjectDiagram,
  faServer,
  faTools,
  faListCheck,
  faQuoteLeft,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";
import { faLightbulb, faBarChart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function Home() {
  const [activeBGHeader, setActiveBGheader] = useState(false);
  const [sliderBackgroundIndex, setSliderBackgroundIndex] = useState(0);
  const [open, setOpen] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    projectProposal: "",
  });

  const updateValue = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  const checkNotEmpty = (value) => {
    console.log("Checking" + value);
    if (values[value].length <= 0) {
      return false;
    }
    return true;
  };

  const handleFormSubmit = () => {
    console.log("Form Submitted");
    setFormSubmitted(true);
  };

  const changeBackground = () => {
    console.log(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  const [openFaqs, setOpenFaqs] = useState(1);
  const handleOpenFaqs = (value) => {
    setOpenFaqs(openFaqs === value ? 0 : value);
  };

  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${
          id === open ? "rotate-90" : ""
        } h-5 w-5 transition-transform`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
      </svg>
    );
  }

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} z-10 custom-arrow next-arrow`}
        style={{ ...style, display: "block", right: "10px" }}
        onClick={onClick}
      >
        &#9654; {/* Right arrow symbol */}
      </div>
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} z-10 custom-arrow prev-arrow`}
        style={{ ...style, display: "block", left: "10px" }}
        onClick={onClick}
      >
        &#9664; {/* Left arrow symbol */}
      </div>
    );
  }

  const settingsSlider = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 10000,
    autoplay: true,
    cssEase: "linear",
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const sliderdata = [
    {
      title: "Small Businesses",
      description:
        "We help small businesses create professional, mobile-responsive websites that enhance online visibility and convert visitors into loyal customers. From local service providers to boutique shops, we design user-friendly sites that showcase your brand, optimize your marketing efforts, and drive more sales.",
      short_description:
        "We help small businesses create professional, mobile-responsive websites that enhance online visibility and convert visitors into loyal customers.",
      path: "/assets/images/homepage/small-business.jpg",
    },
    {
      title: "Charities & Non-Profits",
      description:
        "We craft impactful websites for charities and non-profits, integrating donation systems, event management tools, and compelling storytelling to amplify your mission. Our solutions inspire action, boost engagement, and help you achieve your fundraising goals.",
      short_description:
        "We craft impactful websites for charities and non-profits, integrating donation systems, event management tools, and compelling storytelling to amplify your mission. ",
      path: "/assets/images/homepage/charity.jpg",
    },
    {
      title: "Freelancers and Professionals",
      description:
        "We design tailored websites that position freelancers and professionals as industry leaders. From personalized portfolios to client booking systems, we build platforms that highlight your skills, showcase your work, and make it easy for clients to connect with you.",
      short_description:
        "We design tailored websites that position freelancers and professionals as industry leaders. ",

      path: "/assets/images/homepage/freelancers.jpg",
    },
    {
      title: "E-Commerce Businesses",
      description:
        "We develop dynamic and scalable e-commerce stores that optimize user experience and drive conversions. Our solutions include custom product catalogs, seamless payment integration, and performance optimization to help you grow your online business and maximize profits.",
      short_description:
        "We develop dynamic and scalable e-commerce stores that optimize user experience and drive conversions. ",
      path: "/assets/images/homepage/ecommerce.jpg",
    },
    {
      title: "Bloggers and Content Creators",
      description:
        "We create engaging, SEO-friendly websites for bloggers and content creators to grow their audiences and monetize their passion. Our designs feature intuitive layouts, social media integration, and powerful content management systems that make publishing and sharing effortless.",
      short_description:
        "We create engaging, SEO-friendly websites for bloggers and content creators to grow their audiences and monetize their passion. ",

      path: "/assets/images/homepage/bloggers.jpg",
    },
  ];

  return (
    <div>
      <Header />
      {/* Showcase */}

      <section className="">
        <video
          autoPlay
          loop
          muted
          className="lg:object-right-top absolute h-screen w-screen -z-10 top-0 bg-black"
        >
          <source
            src="/assets/images/cenify-video-background.mp4"
            type="video/mp4"
          />
        </video>
        <div className="flex flex-col lg:w-[50%]  mx-[50px] h-[80vh] lg:h-[100vh] justify-between lg:justify-center lg:mt-[-50px]">
          {/* <h1 className="uppercase text-[30px] text-white">We are Cenify IT</h1> */}
          <p className="hidden text-white text-[35px] lg:text-[50px] lg:inline-block">
            Next-Gen Website & Web Application Development Focused on your
            Success
          </p>
          <p className="text-white text-[35px] lg:hidden w-[80vw] text-right">
            Next-Gen Web Application Development
          </p>
          <div>
            <p className="text-white text-[35px] lg:hidden w-[80vw] text-left">
              For Businesses and Enterprises
            </p>
            <p className="px-[20px] py-[10px] rounded-3xl border-blue-700 border-[2px] w-[50%] text-white text-center mt-5 font-semibold text-[18px] cursor-pointer hover:bg-blue-700 ">
              Book A Call
            </p>
          </div>
        </div>
      </section>

      {/* Transform Your Vision  */}
      <section className="lg:mt-[-70px] mt-[30px]">
        <div className=" bg-white h-full w-[100vw] px-[5%]">
          <div className="text-center my-8 mx-[12.5%]">
            <h1 className="text-[35px] font-bold">
              Transform Your Vision into Reality
            </h1>
            <p className="text-[20px] lg:text-[25px] my-8 lg:mt-4">
              At CenifyIT, we build websites tailored to your needs, helping you
              connect with your customers and achieve your goals effectively.
            </p>
          </div>
          {/* Badges */}
          <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-8 md:gap-6">
            <div className="border-[2px] border-black p-4 flex flex-col items-center text-center h-[400px] hover:bg-black hover:text-white">
              <div className="my-4">
                <FontAwesomeIcon
                  className="text-blue-500"
                  icon={faLayerGroup}
                  size="2x"
                />
              </div>
              {/* Badge Text */}
              <div className="mx-[5%]">
                <div className="h-[50%]">
                  <p className="capitalize text-[30px] font-semibold">
                    Custom Website Development Services
                  </p>
                </div>
                <div className="h-[60%]">
                  <p className="text-[20px] my-4">
                    Your website should stand out—not look like a cookie-cutter
                    template used by thousands. We create fully custom designs
                    tailored to your brand.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex border-[2px] border-black p-4 flex-col items-center text-center h-[400px] hover:bg-black hover:text-white">
              <div className="my-4">
                <FontAwesomeIcon
                  className="text-blue-600"
                  icon={faRocket}
                  size="2x"
                />
              </div>
              {/* Badge Text */}
              <div className="mx-[5%]">
                <div className="h-[50%]">
                  <p className="capitalize text-[30px] font-semibold">
                    Next-Gen Full stack Web Application Development
                  </p>
                </div>
                <p className="text-[20px] my-4">
                  We specialize in developing progressive web applications that
                  combine stunning visuals, effortless navigation, and
                  lightning-fast performance.
                </p>
              </div>
            </div>
            <div className="border-[2px] border-black p-4 flex flex-col items-center text-center h-[400px] hover:bg-black hover:text-white">
              <div className="my-4">
                <FontAwesomeIcon
                  className="text-blue-600"
                  icon={faShoppingCart}
                  size="2x"
                />
              </div>
              {/* Badge Text */}
              <div className="mx-[5%]">
                <div className="h-[50%]">
                  <p className="capitalize text-[30px] font-semibold">
                    E-Commerce Web Development
                  </p>
                </div>
                <p className="text-[20px] my-4">
                  Online shopping continues to grow, and your business needs a
                  robust platform to build awareness and/or sell your products.
                </p>
              </div>
            </div>
            <div className="border-[2px] border-black p-4 flex flex-col items-center text-center h-[400px] hover:bg-black hover:text-white">
              <div className="my-4">
                <FontAwesomeIcon
                  className="text-blue-600"
                  icon={faTools}
                  size="2x"
                />
              </div>
              {/* Badge Text */}
              <div className="mx-[5%]">
                <div className="h-[50%]">
                  <p className="capitalize text-[30px] font-semibold">
                    Maintenance and Support Services
                  </p>
                </div>
                <p className="text-[20px] my-4">
                  Not everyone is well-versed in navigating the technical
                  nuances of the internet and web development. That's where we
                  come in and make your life easier.
                </p>
              </div>
            </div>

            <div className="border-[2px] border-black p-4 flex flex-col items-center text-center h-[400px] hover:bg-black hover:text-white">
              <div className="my-4">
                <FontAwesomeIcon
                  className="text-blue-600"
                  icon={faProjectDiagram}
                  size="2x"
                />
              </div>
              {/* Badge Text */}
              <div className="mx-[5%]">
                <div className="h-[50%]">
                  <p className="capitalize text-[30px] font-semibold">
                    SEO and Performance Optimization
                  </p>
                </div>
                <p className="text-[20px] my-4">
                  Websites that rank higher and load faster attract more traffic
                  and retain users better. We'll analyze your website and
                  improve your SEO and site perfomance.
                </p>
              </div>
            </div>
            <div className="hidden lg:flex border-[2px] border-black p-4 flex-col items-center text-center h-[400px] hover:bg-black hover:text-white">
              <div className="my-4">
                <FontAwesomeIcon
                  className="text-blue-600"
                  icon={faServer}
                  size="2x"
                />
              </div>
              {/* Badge Text */}
              <div className="mx-[5%]">
                <div className="h-[50%]">
                  <p className="capitalize text-[30px] font-semibold">
                    Content Management Systems
                  </p>
                </div>
                <p className="text-[20px] my-4">
                  By Integrating CMS software to your website, we ensure that
                  the content is way easier to manage, which improves the
                  overall functionality of your website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Seek Web Development? */}
      <section className="h-[45vh] bg-gray-200">
        <div className="flex flex-col w-[100%] h-[100%]">
          <div className="flex lg:flex-row lg:justify-between flex-col justify-between my-[10%] lg:my-0 mx-[10%] lg:items-center h-[100%]">
            <div className="lg:w-[40%]">
              <h1 className="text-[30px] font-bold text-center lg:text-left">
                Why Seek CenifyIT for Your Website
              </h1>
            </div>

            <div className="lg:w-[50%]">
              <p className="text-[20px]">
                Our clients have strengthened their digital presence, increased
                profitability, and streamlined their operations by leveraging
                our expertise in creating impactful and efficient solutions.
              </p>
            </div>
          </div>
          {/* Badges */}
          <div className="flex lg:flex-row flex-col"></div>
        </div>
      </section>
      {/* Leverage Our Web Development Strategies */}
      <section>
        <div className="flex flex-col mt-10">
          <div className="flex lg:flex-row flex-col justify-between mx-[10%]">
            <div className="lg:w-[45%] text-center lg:text-left capitalize">
              <p className="text-[25px] leading-[50px]">
                Utilize our established and trusted <br className="lg:hidden" />{" "}
                <span className="font-bold">web</span>{" "}
                <span className="py-2 bg-gradient-to-r from-white to-blue-500 rounded-3xl font-bold pr-4">
                  development methodology and process
                </span>
              </p>
            </div>
            <div className="lg:w-[45%] text-center lg:text-left mt-10 lg:mt-0">
              <p className="text-[20px]">
                Our track record speaks for itself. We've delivered over 3000
                projects, with many happy clients returning to us for their next
                projects. Our process is reliable and refined for efficiency and
                performance.
              </p>
            </div>
          </div>
          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 mx-[10%] mt-10 lg:mt-14 ">
            {/* Consult Your Idea */}
            <div className="bg-gray-300/60 h-[350px] flex flex-col py-[50px] px-[20px] w-[350px] ">
              <p className="text-[45px] font-bold">01</p>
              <p className="py-4 mt-2 text-[17px]">
                <span className="font-bold">Consultation.</span> <br />
                Tell us what you are looking for. We would like to know your
                idea so we know how to best deliver the results.
              </p>
            </div>
            <div className="bg-gray-300/60 h-[350px] flex flex-col py-[50px] px-[20px] w-[350px] mt-6">
              <p className="text-[35px] font-bold">02</p>
              <p className="py-4 mt-2 text-[17px]">
                <span className="font-bold">Technology Stack.</span>
                <br />
                Have a technology choice? If you do, let us know and we will
                work with your choice of technology.
              </p>
            </div>
            <div className="bg-gray-300/60 h-[350px] flex flex-col py-[50px] px-[20px] w-[350px] mt-12">
              <p className="text-[35px] font-bold">03</p>
              <p className="py-4 mt-2 text-[17px]">
                <span className="font-bold">Design.</span>
                <br />
                We'll come up with your web page templates, check to make sure
                you like them, and get your feedback.
              </p>
            </div>
            <div className="bg-gray-300/60 h-[350px] flex flex-col py-[50px] px-[20px] w-[350px] mt-2">
              <p className="text-[35px] font-bold">04</p>
              <p className="py-4 mt-2 text-[17px]">
                <span className="font-bold">Development.</span>
                <br />
                Once the designs are confirmed, we'll start development with our
                team of engineers.
              </p>
            </div>
            <div className="bg-gray-300/60 h-[350px] flex flex-col py-[50px] px-[20px] w-[350px] mt-4">
              <p className="text-[35px] font-bold">05</p>
              <p className="py-4 mt-2 text-[17px]">
                <span className="font-bold">
                  Launch Your Website to the Market.
                </span>
                <br />
                We'll help you launch your product and get you going to reach
                your intended market!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Top Types of Clientel */}
      <section className="h-[100vh] lg:h-[90vh] mt-[100px] mb-10 flex flex-col justify-between">
        <div className="my-auto">
          <h4 className="text-center text-[35px] font-semibold">
            We've helped 1000s including those from these backgrounds
          </h4>
          {/* Slider */}
          <div className="mt-10 h-full lg:h-[100%] mx-auto px-[10%] ml-[10%] md:ml-[15%] lg:ml-0 ">
            <div>
              <Slider {...settingsSlider} className="homepage-custom-slider">
                {sliderdata.map((slidedetails, index) => (
                  <div key={index} className="slide-item -z-10">
                    <div className="flex flex-col-reverse lg:flex-row lg:items-center w-[100%] h-full items-start">
                      <div className="md:h-[400px] md:w-[500px] lg:h-[500px] h-[300px] w-[500px] flex items-center justify-center text-white bg-black lg:w-[50%]">
                        <Image
                          className="w-[100%] h-[100%]"
                          width={2000}
                          height={2000}
                          src={slidedetails.path}
                          alt={slidedetails.description}
                        />
                      </div>
                      <div className="md:h-[300px] md:w-[500px] w-[100%] h-[250px] bg-blue-900 text-white lg:h-[500px] lg:w-[50%] lg:p-10">
                        <div className="lg:mt-[15%] lg:px-[10%] text-center lg:text-left">
                          <h3 className="lg:text-[30px] text-[28px] my-4 font-semibold ">
                            {slidedetails.title}
                          </h3>
                        </div>
                        <div className="">
                          <p className="hidden md:block text-[14px] lg:mt-[10%] lg:text-[18px]">
                            {slidedetails.description}
                          </p>
                          <p className="lg:hidden text-[18px] p-5 text-center lg:text-left">
                            {slidedetails.short_description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
      {/* Faqs */}
      <section className="bg-blue-900 ">
        <div className="flex flex-col lg:flex-row px-[12.5%] bg-mint-tulip-500 py-[50px] lg:py-[100px]">
          <div className="text-[36px] lg:w-[50%] mb-[25px] font-semibold text-white">
            <h1>Frequently</h1>
            <h1>Asked Questions</h1>
          </div>

          {/* FAQs */}
          <div className="lg:w-[50%]">
            <Accordion
              open={openFaqs === 1}
              className="mb-5 rounded-lg  border-blue-gray-100 border-[2px] px-4 text-white"
              icon={<Icon id={1} open={openFaqs} />}
            >
              <AccordionHeader
                onClick={() => handleOpenFaqs(1)}
                className={`text-white py-[25px] border-b-0 transition-colors hover:underline hover:text-white${
                  openFaqs === 1 ? "text-gray-200 hover:underline" : ""
                }`}
              >
                <p className="mx-3 capitalize">
                  What Do We Do as a Web Development Agency?
                </p>
              </AccordionHeader>
              <AccordionBody className="pt-0 text-base font-normal">
                <div className="text-justify text-white">
                  At CenifyIT, we specialize in creating dynamic, user-friendly,
                  and visually stunning websites that help businesses grow
                  online. From custom website design to full-stack web
                  development, we craft digital experiences tailored to your
                  unique needs. Our expertise spans modern technologies,
                  responsive design, e-commerce solutions, and SEO-optimized
                  performance. We don’t just build websites; we deliver powerful
                  platforms that enhance your brand, engage your audience, and
                  drive results.
                  <span className="hidden lg:inline">
                    Our expertise spans modern technologies, responsive design,
                    e-commerce solutions, and SEO-optimized performance. We
                    don’t just build websites; we deliver powerful platforms
                    that enhance your brand, engage your audience, and drive
                    results.
                  </span>
                </div>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={openFaqs === 2}
              className="mb-5 rounded-lg  border-blue-gray-100 border-[2px] px-4 text-white"
              icon={<Icon id={2} open={openFaqs} />}
            >
              <AccordionHeader
                onClick={() => handleOpenFaqs(2)}
                className={`text-white py-[25px] border-b-0 transition-colors hover:underline hover:text-white${
                  openFaqs === 2 ? "text-gray-200 hover:underline" : ""
                }`}
              >
                <p className="mx-3 capitalize">
                  Why Work with a Professional Agency to Build My Website?
                </p>
              </AccordionHeader>
              <AccordionBody className="pt-0 text-base font-normal">
                <div className="text-justify text-white">
                  A professional web development agency brings expertise,
                  creativity, and technical skill to the table, transforming
                  your vision into a high-performing website. Unlike DIY
                  platforms or templates, we build fully customized websites
                  that are tailored to your brand’s identity and business goals.
                  <span className="hidden lg:inline">
                    Our team ensures your website is fast, secure,
                    mobile-friendly, and optimized for search engines. Most
                    importantly, we save you time and stress while providing
                    ongoing support to keep your site up-to-date and competitive
                    in an ever-changing digital world.
                  </span>
                  .
                </div>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={openFaqs === 3}
              className="mb-5 rounded-lg  border-blue-gray-100 border-[2px] px-4 text-white"
              icon={<Icon id={3} open={openFaqs} />}
            >
              <AccordionHeader
                onClick={() => handleOpenFaqs(3)}
                className={`text-white py-[25px] border-b-0 transition-colors hover:underline hover:text-white${
                  openFaqs === 3 ? "text-gray-200 hover:underline" : ""
                }`}
              >
                <p className="mx-3 capitalize">
                  Is It Better to Use a Website Builder or Get a Custom Website
                  for My Business?
                </p>
              </AccordionHeader>
              <AccordionBody className="pt-0 text-base font-normal">
                <div className="text-justify text-white">
                  While website builders like Wix or Squarespace can be quick
                  and cost-effective for basic sites, custom websites provide
                  unparalleled flexibility, scalability, and brand distinction.
                  A custom website is tailored specifically to your business
                  needs, allowing for unique design, advanced functionality, and
                  better SEO optimization.
                  <span className="hidden lg:inline">
                    It grows with your business and creates a professional,
                    memorable online presence that sets you apart from
                    competitors. If long-term growth, performance, and brand
                    integrity matter to your business, investing in a custom
                    website is well worth it.
                  </span>
                </div>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={openFaqs === 4}
              className="mb-5 rounded-lg  border-blue-gray-100 border-[2px] px-4 text-white"
              icon={<Icon id={4} open={openFaqs} />}
            >
              <AccordionHeader
                onClick={() => handleOpenFaqs(4)}
                className={`text-white py-[25px] border-b-0 transition-colors hover:underline hover:text-white${
                  openFaqs === 4 ? "text-gray-200 hover:underline" : ""
                }`}
              >
                <p className="mx-3 capitalize">
                  How Long Will It Take to Get My Website?
                </p>
              </AccordionHeader>
              <AccordionBody className="pt-0 text-base font-normal">
                <div className="text-justify text-white">
                  <span>
                    The timeline for building your website depends on the
                    project’s scope and complexity. A simple website may take
                    4–6 weeks, while more intricate custom solutions can take
                    8–12 weeks or longer. Our process includes detailed
                    discovery, custom design, development, testing, and
                    revisions to ensure the final product exceeds your
                    expectations.
                  </span>
                  <span className="hidden lg:inline">
                    We work closely with you at every step to deliver a website
                    that is both timely and perfectly aligned with your business
                    goals.
                  </span>
                </div>
              </AccordionBody>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Us Today */}
      <section className="lg:h-[100vh]">
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
              formValues={values}
              updateFormValue={updateValue}
              handleSubmit={handleFormSubmit}
              checkNotEmpty={checkNotEmpty}
              formSubmitted={formSubmitted}
            />
          </div>
          {/* Contact Info */}
        </div>
      </section>
      {/* Badges */}
      <Footer />
    </div>
  );
}
