import Image from "next/image";

import Header from "../components/Header";
import Footer from "../components/Footer";

import showcaseImage from "../assets/Opworx.2.png";

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import iconbadge from "../../public/assets/images/icon-image.jpeg";
import minoritybadge from "../../public/assets/images/minorityownedbusiness.png";
import laboratorybadge from "../../public/assets/images/laboratory-org.png";

import procurement from "../../public/assets/images/procurement.jpg";
import inventoryManagement from "../../public/assets/images/inventory-management.jpg";
import assetManagement from "../../public/assets/images/asset-management.jpg";
import labSupport from "../../public/assets/images/lab-support.jpg";
import projectManagement from "../../public/assets/images/project-management.jpg";
import ehsCompliance from "../../public/assets/images/ehs-compliance.jpg";

export default function OurServices() {
  return (
    <div>
      <Header />
      <div className="w-[100vw] h-[40vh] bg-[url('/assets/images/ourservices.jpg')] bg-[position:50%_60%] bg-no-repeat">
        <div className="w-full h-full backdrop-brightness-[40%]">
          <h1 className="text-center text-white brightness-75 text-[85px] md:text-[100px] lg:text-[125px]">
            Our Services
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 px-[10%] mt-[40px]">
        {/* Service Cards */}

        {/* Procurement */}
        <div className="flex flex-col items-center justify-center">
          <div>
            <p className="capitalize text-[20px] font-bold  my-3">
              Procurement, Purchasing, and Vendor Management
            </p>
          </div>
          <div className="border-[5px] border-black">
            <Image
              src={procurement}
              alt="Procurement"
              className="w-[600px] h-[200px] lg:w-[500px] lg:h-[175px]"
              width={400}
              height={300}
            />
          </div>

          <div className="flex flex-col">
            <div className="flex justify-center items-center mt-3">
              <div>
                <FontAwesomeIcon
                  className={`text-green-500 mx-3`}
                  icon={faCheck}
                  size="2x"
                />
              </div>
              <p className=" w-[80%] text-[14px] text-center">
                <span className="font-semibold">Strategic Sourcing:</span>{" "}
                Assist in decision-making for leasing vs. purchasing and
                selecting new vs. pre-owned items.
              </p>
            </div>
            <div className="flex justify-center items-center mt-3">
              <div>
                <FontAwesomeIcon
                  className={`text-green-500 mx-3`}
                  icon={faCheck}
                  size="2x"
                />
              </div>
              <p className=" w-[80%] text-[14px] text-center">
                <span className="font-semibold">Ordering Systems:</span>
                Implement material request, ordering, and procurement processes.
              </p>
            </div>
            <div className="flex justify-center items-center mt-3">
              <div>
                <FontAwesomeIcon
                  className={`text-green-500 mx-3`}
                  icon={faCheck}
                  size="2x"
                />
              </div>
              <p className=" w-[80%] text-[14px] text-center">
                <span className="font-semibold">Cost Optimization:</span>
                Identify economical material substitutes and assess service
                contract benefits for value.
              </p>
            </div>
            <div className="flex justify-center items-center mt-3">
              <div>
                <FontAwesomeIcon
                  className={`text-green-500 mx-3`}
                  icon={faCheck}
                  size="2x"
                />
              </div>
              <p className=" w-[80%] text-[14px] text-center">
                <span className="font-semibold">Vendor Relations:</span>
                Evaluate vendors, act as an intermediary, and coordinate lab
                moves and relocations.
              </p>
            </div>
          </div>
        </div>
        {/* Inventory Management */}
        <div className="flex flex-col items-center justify-center">
          <div>
            <p className="capitalize text-[20px] font-bold  my-3">
              Space and Inventory Management
            </p>
          </div>
          <div className="border-[5px] border-black">
            <Image
              src={inventoryManagement}
              alt="Procurement"
              className="w-[600px] h-[200px] lg:w-[500px] lg:h-[175px]"
              width={400}
              height={300}
            />
          </div>

          <div className="flex flex-col">
            <div className="flex justify-center items-center mt-3">
              <div>
                <FontAwesomeIcon
                  className={`text-green-500 mx-3`}
                  icon={faCheck}
                  size="2x"
                />
              </div>
              <p className=" w-[80%] text-[14px] text-center">
                Efficient layout planning and cold storage organization.
              </p>
            </div>
            <div className="flex justify-center items-center mt-3">
              <div>
                <FontAwesomeIcon
                  className={`text-green-500 mx-3`}
                  icon={faCheck}
                  size="2x"
                />
              </div>
              <p className=" w-[80%] text-[14px] text-center">
                Inventory control, including tracking system setup, backstock
                management, and point-of-use locations for key materials.
              </p>
            </div>
            <div className="flex justify-center items-center mt-3">
              <div>
                <FontAwesomeIcon
                  className={`text-green-500 mx-3`}
                  icon={faCheck}
                  size="2x"
                />
              </div>
              <p className=" w-[80%] text-[14px] text-center">
                Develop and maintain Bills of Materials (BoMs) for standard
                processes.
              </p>
            </div>
          </div>
        </div>
        {/* Lab Operations and Management */}
        <div className="flex flex-col items-center justify-center">
          <div>
            <p className="capitalize text-[20px] font-bold  my-3">
              Lab Operations and Management
            </p>
          </div>
          <div className="border-[5px] border-black">
            <Image
              src={inventoryManagement}
              alt="Procurement"
              className="w-[600px] h-[200px] lg:w-[500px] lg:h-[175px]"
              width={400}
              height={300}
            />
          </div>

          <div className="flex flex-col">
            <div className="flex justify-center items-center mt-3">
              <div>
                <FontAwesomeIcon
                  className={`text-green-500 mx-3`}
                  icon={faCheck}
                  size="2x"
                />
              </div>
              <p className=" w-[80%] text-[14px] text-center">
                <span className="font-semibold">
                  General Housekeeping & Lab Setup:
                </span>
                Includes routine cleaning, setup, and closure of lab spaces.
              </p>
            </div>
          </div>
        </div>

        {/* Equipment and Safety Management */}
        <div className="flex flex-col items-center justify-center">
          <div>
            <p className="capitalize text-[20px] font-bold  my-3">
              Equipment and Safety Management
            </p>
          </div>
          <div className="border-[5px] border-black">
            <Image
              src={inventoryManagement}
              alt="Procurement"
              className="w-[600px] h-[200px] lg:w-[500px] lg:h-[175px]"
              width={400}
              height={300}
            />
          </div>

          <div className="flex flex-col">
            <div className="flex justify-center items-center mt-3">
              <div>
                <FontAwesomeIcon
                  className={`text-green-500 mx-3`}
                  icon={faCheck}
                  size="2x"
                />
              </div>
              <p className=" w-[80%] text-[14px] text-center">
                <span className="font-semibold">
                  Maintenance and Calibration:
                </span>
                Schedule regular equipment maintenance and calibration with
                reliable vendors to minimize downtime.
              </p>
            </div>
            <div className="flex justify-center items-center mt-3">
              <div>
                <FontAwesomeIcon
                  className={`text-green-500 mx-3`}
                  icon={faCheck}
                  size="2x"
                />
              </div>
              <p className=" w-[80%] text-[14px] text-center">
                <span className="font-semibold">Safety Protocols:</span>
                Conduct safety training, maintain safety infrastructure, and
                perform routine audits
              </p>
            </div>
            <div className="flex justify-center items-center mt-3">
              <div>
                <FontAwesomeIcon
                  className={`text-green-500 mx-3`}
                  icon={faCheck}
                  size="2x"
                />
              </div>
              <p className=" w-[80%] text-[14px] text-center">
                <span className="font-semibold">
                  Environmental Health and Safety (EHS):
                </span>
                Liaise with EHS specialists for tailored client needs.
              </p>
            </div>
          </div>
        </div>
        {/* Compliance and Waste Management */}
        <div className="flex flex-col items-center justify-center">
          <div>
            <p className="capitalize text-[20px] font-bold  my-3">
              Compliance and Waste Management
            </p>
          </div>
          <div className="border-[5px] border-black">
            <Image
              src={inventoryManagement}
              alt="Procurement"
              className="w-[600px] h-[200px] lg:w-[500px] lg:h-[175px]"
              width={400}
              height={300}
            />
          </div>

          <div className="flex flex-col">
            <div className="flex justify-center items-center mt-3">
              <div>
                <FontAwesomeIcon
                  className={`text-green-500 mx-3`}
                  icon={faCheck}
                  size="2x"
                />
              </div>
              <p className=" w-[80%] text-[14px] text-center">
                <span className="font-semibold">
                  Documentation and Compliance:
                </span>
                Manage lab-related documentation, including SOPs, safety audits,
                and packing slips reconciliation.
              </p>
            </div>
            <div className="flex justify-center items-center mt-3">
              <div>
                <FontAwesomeIcon
                  className={`text-green-500 mx-3`}
                  icon={faCheck}
                  size="2x"
                />
              </div>
              <p className=" w-[80%] text-[14px] text-center">
                <span className="font-semibold">Waste Stream Management:</span>
                Develop and oversee client-specific waste disposal processes and
                collaborate with vendors for waste collection.
              </p>
            </div>
          </div>
        </div>

        {/* Administrative and Project Support */}
        <div className="flex flex-col items-center justify-center">
          <div>
            <p className="capitalize text-[20px] font-bold  my-3">
              Administrative and Project Support
            </p>
          </div>
          <div className="border-[5px] border-black">
            <Image
              src={inventoryManagement}
              alt="Procurement"
              className="w-[600px] h-[200px] lg:w-[500px] lg:h-[175px]"
              width={400}
              height={300}
            />
          </div>

          <div className="flex flex-col">
            <div className="flex justify-center items-center mt-3">
              <div>
                <FontAwesomeIcon
                  className={`text-green-500 mx-3`}
                  icon={faCheck}
                  size="2x"
                />
              </div>
              <p className=" w-[80%] text-[14px] text-center">
                <span className="font-semibold">Reporting and Data Entry:</span>
                Generate and maintain reports on purchases, consumption, and
                material information.
              </p>
            </div>
            <div className="flex justify-center items-center mt-3">
              <div>
                <FontAwesomeIcon
                  className={`text-green-500 mx-3`}
                  icon={faCheck}
                  size="2x"
                />
              </div>
              <p className=" w-[80%] text-[14px] text-center">
                <span className="font-semibold">Project Facilitation:</span>
                Support medium to large-scale lab projects, including layout and
                equipment planning.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
