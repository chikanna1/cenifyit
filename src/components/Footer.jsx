import Link from "next/link";
import {
  faFacebookSquare,
  faInstagramSquare,
  faPinterest,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/router";

import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../public/assets/images/CenifyITLogo.png";
import Image from "next/image";

function Footer() {
  const router = useRouter();

  const cenifyitPhoneNumber = "6179420739";

  const handlePhoneClick = () => {
    router.push({
      pathname: `tel:${cenifyitPhoneNumber}`,
    });
  };

  return (
    <div className=" px-[7%] py-[75px]">
      {/* Column 1 */}
      <div className="flex flex-col items-center py-10 text-center items-center">
        {/* Social Media Icons */}
        <div className="flex flex-row ">
          <Link
            className="text-md text-slate-600 p-2 hover:text-slate-400 transition duration-500 rounded-md text-center"
            href="https://www.linkedin.com/posts/opworx_is-your-research-institution-seeking-enhanced-activity-7157993306612764672-4wCc/"
          >
            <FontAwesomeIcon className="" icon={faLinkedin} size="4x" />
            <p className="font-semibold">Vist Us on Linkedin</p>
          </Link>
        </div>
        {/* <h1 className="text-xl uppercase font-bold my-7">Opworx</h1> */}
        <div className="my-[35px]">
          <Image
            className={`w-[140px] h-[70px]`}
            src={logo}
            alt="Badge"
            width={100}
            height={50}
          />
        </div>
        <div className="flex cursor-pointer" onClick={handlePhoneClick}>
          <FontAwesomeIcon className="mx-4" icon={faPhoneSquare} size="2x" />
          <p className="text-lg  font-bold">650 - 450 - 8315</p>
        </div>
      </div>
      <div>Powered by Cenify IT </div>
    </div>
  );
}

export default Footer;
