// Icons
import { forwardRef } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const NavBottom = forwardRef((props, ref) => {
  return (
    <footer
      ref={ref}
      className="flex justify-between items-center md:px-8 md:py-2 p-2 mt-auto"
    >
      {/* Social Media */}
      <div className="text-[var(--color-subtext)] text-2xl flex flex-col space-y-4">
        <FaFacebook className="transition duration-300 hover:scale-110 cursor-pointer" />
        <FaGithub className="transition duration-300 hover:scale-110 cursor-pointer" />
        <FaLinkedin className="transition duration-300 hover:scale-110 cursor-pointer" />
      </div>
      {/* scroll */}
      <div className="flex flex-col items-center gap-6">
        <p className="rotate-90 text-[var(--color-subtext)] font-medium">
          SCROLL
        </p>
        <div className="h-10 w-1 bg-[var(--color-subtext)] rounded-md"></div>
      </div>
    </footer>
  );
});

export default NavBottom;
