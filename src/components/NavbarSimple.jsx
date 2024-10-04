import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { BsBorderWidth, BsXLg } from "react-icons/bs";
import sevenwings from "../assets/img-logo/sevenwings.png";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Projects
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Services
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Blogs
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Resume
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center hover:text-blue-500 hover:underline transition-colors"
        >
          Contact
        </a>
      </Typography>
    </ul>
  );
}

export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="w-full mx-auto hover:underline-offset-2">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="flex items-baseline justify-between">
          <img src={sevenwings} alt="Sevenwings" width="110px" />
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="md:p-1 font-medium"
          >
            <a
              href="#"
              className="flex items-center hover:text-blue-900 transition-colors italic animate-pulse text-xs"
            >
              Inspiration
            </a>
          </Typography>
        </div>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <BsXLg className="h-6 w-6" strokeWidth={1} />
          ) : (
            <BsBorderWidth className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
