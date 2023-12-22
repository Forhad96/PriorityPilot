import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <img
          src="/Black logo - no background.png"
          alt="logo-ct"
          className="w-40"
        />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="div"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              <Link to="/about">About Us</Link>
            </Typography>
          </li>

          <li>
            <Typography
              as="div"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              <Link to="/contact">Contact Us</Link>
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              License
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 Priority-Pilot
      </Typography>
    </footer>
  );
}
