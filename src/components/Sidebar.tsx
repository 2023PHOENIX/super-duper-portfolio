import Image from "next/image";
import profilePicture from "/public/pexels-anjana-c-674010.jpg";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FiDownload } from "react-icons/fi";
function Sidebar() {
  return (
    <div>
      <Image
        src={profilePicture}
        alt="my picture"
        className="w-32 h-32 m-2 mx-auto rounded-full"
      />

      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span>Abhishek Shrivastava</span>
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">
        Software Developer
      </p>
      <a
        className="flex justify-center gap-5 px-2 py-1 my-3 bg-gray-200 rounded-full align-center"
        href="#"
      >
        Download <FiDownload className="w-6 h-6" />
      </a>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-10 text-gray-500 align-center">
        <a href="">
          <AiFillGithub className="w-8 h-8" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8" />
        </a>
      </div>
      {/* address */}
      <div>
        <div className="flex justify-center gap-10 px-2 py-1 my-4 bg-gray-200 rounded-full align-center">
          <div>
            <GoLocation />
          </div>
          <span>Dhaulpur, India</span>
        </div>
        <div className="flex flex-col align-center">
          <p className="text-xs italic md:text-sm">
            abhishekshrivastav1920@gmail.com
          </p>
          <p>9602491323</p>
        </div>
      </div>
      {/* buttons  */}
      <div className="flex flex-col justify-center text-white">
        <div>
          <button
            className="px-1 py-1 my-1 bg-blue-700 border-2 border-solid rounded-lg w-25 border-black-500"
            onClick={() =>
              window.open("mailto:abhishekshrivastav1920@gmail.com0")
            }
          >
            Email Me
          </button>
        </div>
        <div>
          <button className="w-20 px-1 py-1 my-1 bg-blue-700 border-2 border-solid rounded-lg border-black-500">
            UI
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
