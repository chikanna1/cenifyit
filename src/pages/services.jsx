import Image from "next/image";

import Header from "../components/Header";
import Footer from "../components/Footer";

import {} from "@fortawesome/free-solid-svg-icons";
import { faLightbulb, faBarChart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Services() {
  return (
    <div>
      {/* Header */}
      <div>
        <Header />
      </div>

      {/* Showcase Section */}
      <section className="lg:h-[100vh]">
        <div className="flex flex-col lg:flex-row">
          {/* Showcase Text */}
          <div>
            <div className="flex">
              <div>
                <FontAwesomeIcon icon={faLightbulb} size="2x" />
              </div>
              <p>Creating Innovative Web Solution</p>
            </div>
            <div>
              <h1 className="text-[45px]">Web Development Services</h1>
              <h2 className="text-[25px]">Tight-Nit Agency Costs</h2>
              <h3 className="text-[25px]">
                With Corporation Level Expertise and Services
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
