import { forwardRef } from "react";

const NavTop = forwardRef((props, ref) => {
  return (
    <nav
      ref={ref}
      className="flex items-center justify-between md:px-8 md:py-2 p-2 bg-black"
    >
      <h2 className="font-bold md:text-6xl text-4xl">BD</h2>
      <ul className="flex space-x-8">
        <li>
          <a href="#" className="text-gray-400 font-medium">
            PROJECTS
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-400 font-medium">
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
});

export default NavTop;
