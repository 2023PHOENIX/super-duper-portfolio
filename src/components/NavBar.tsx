import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";

const NavItem: React.FunctionComponent<{
  activeItem: string;
  setItem: Function;
  name: string;
  route: string;
}> = ({ activeItem, name, route, setItem }) => {
  return activeItem !== name ? (
    <div>
      <Link href={route}></Link>
      <a>
        <span
          onClick={() => {
            setItem(name);
          }}
          class="hover:text-black"
        >
          {name}
        </span>
      </a>
    </div>
  ) : null;
};

function NavBar() {
  const [activeItem, setActiveItem] = useState<string>("resume");

  const { pathname } = useRouter();
  useEffect(() => {
    if (pathname === "/") setActiveItem("About");
    if (pathname === "/projects") setActiveItem("Projects");
    if (pathname === "/resume") setActiveItem("Resume");
  }, []);
  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold text-blue-500 border-b-2 border-blue-400 md:text-2xl">
        {activeItem}
      </span>
      <div className="flex space-x-3 text-lg text-gray-500">
        <NavItem
          activeItem={activeItem}
          setItem={setActiveItem}
          name="About"
          route="/"
        />
        <NavItem
          activeItem={activeItem}
          setItem={setActiveItem}
          name="Projects"
          route="/projects"
        />
        <NavItem
          activeItem={activeItem}
          setItem={setActiveItem}
          name="Resume"
          route="/resume"
        />
      </div>
    </div>
  );
}

export default NavBar;
