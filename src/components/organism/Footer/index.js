import {
  FaFacebook,
  FaInstagram,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
  FaWhatsapp,
} from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
        <div className="p-5 ">
          <ul>
            <p className="text-gray-800 font-bold text-3xl pb-6">
              One<span className="text-blue-600">Kreasi</span>
            </p>

            <div className="flex gap-6 pb-4 text-black flex-col">
              <h2>
                Kami merupakan perusahaan yang bergerak di bidang jasa pembuatan
                website dan program.
              </h2>
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Contact Us</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <FaPhone />
              <h3>(021) 7780 2093</h3>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <FaMailBulk />
              <h3>info@onekreasi.id</h3>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <FaSearchLocation />
              <h3>Perkantoran Tanjung Mas Raya</h3>
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">
              Social Media
            </p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <FaInstagram />
              <h3>@oneKreasi.id</h3>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <FaWhatsapp />
              <h3>+6285179737410</h3>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <FaFacebook />
              <h3>oneKreasi</h3>
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Pembuatan Website
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Pembuatan Program
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Artikel
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Pelatihan Website
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
        <h1 className=" text-gray-800 font-semibold">
          © ©2024. One Kreasi Web Studio. All Rights Reserved.
          <span className="hover:text-blue-600 font-semibold cursor-pointer">
            One Kreasi{" "}
          </span>
        </h1>
      </div>
    </>
  );
}

export default Footer;
