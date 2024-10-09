import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5 bg-white shadow-md">
      <div className="relative h-10 w-40">
        <Image src="/06.png" alt="Logo" layout="fill" objectFit="contain" />
      </div>
      <ul className="hidden md:flex space-x-6">
        <li>
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/services"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="md:hidden">
        <button className="text-gray-600 hover:text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
