import Logo from "../assets/logo.webp";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full md:px-12 bg-[#000505] text-white">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center font-bold uppercase"
          >
            MEF Aurangabad
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm ">
            Modern Educational Foundation, we are committed to providing a dynamic and enriching educational experience that fosters academic excellence and practical skill development
            </p>
          
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide ">CONTACTS</p>
          <div className="flex">
            <p className="mr-2 ">Phone :</p>
            <a
              href="tel:850-123-5021"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              9322400390
            </a>
          </div>
          <div className="flex">
            <p className="mr-2">Email :</p>
            <a
              href="mailto:modereducationalf@gmail.com"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              modereducationalf@gmail.com
            </a>
          </div>
          <div className="flex">
            <p className="mr-2 ">Address:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              <p className="text-sm">
                {" "}
                Shop No 5, Near HDFC Bank ATM Alandi Vadgaon Road, Alandi
                Devachi Pune - 412105{" "}
              </p>
            </a>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide ">SOCIALS</span>
          <div className="flex items-center mt-1 space-x-3">
            <FaSquareXTwitter size={30} />
            <AiFillInstagram size={30} />
            <FaWhatsappSquare size={30} />
          </div>
          <p className="text-md my-2"> 
        Connect with us to explore our wide range of programs and take the first step towards a brighter future!
        </p>
        </div>
      
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm ">
          © Copyright 2020 MEG Aurangabad. All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="/"
              className="text-sm transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              F.A.Q
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm  transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Terms &amp; Conditions
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
