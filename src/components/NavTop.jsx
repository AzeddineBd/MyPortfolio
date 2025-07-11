import { forwardRef } from "react";
import Btn from "./Btn";

const NavTop = forwardRef(({ scrollToSection }, ref) => {
  return (
    <nav
      ref={ref}
      className="flex items-center justify-between md:px-8 md:py-2 p-2 bg-[var(--color-bg)]"
    >
      <h2 className="font-bold md:text-6xl text-4xl text-[var(--color-text)]">
        BD
      </h2>
      <ul className="flex space-x-8">
        <li>
          <a
            onClick={() => scrollToSection("projects")}
            className="text-[var(--color-subtext)] font-medium cursor-pointer"
          >
            PROJECTS
          </a>
        </li>
        <li>
          <a
            onClick={() => scrollToSection("contact")}
            className="text-[var(--color-subtext)] font-medium cursor-pointer"
          >
            CONTACT
          </a>
        </li>
        <li>
          <Btn />
        </li>
      </ul>
    </nav>
  );
});

export default NavTop;
