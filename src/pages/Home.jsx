// Hooks
import { forwardRef } from "react";

const Home = forwardRef((props, ref) => {
  return (
    <section className="">
      {/* Hero */}
      <div ref={ref} className="flex items-center justify-center h-[80%]">
        <div className="relative ">
          <span className="text1 absolute md:top-[-12px] md:left-24 top-[-12px] left-12 md:text-xl text-md text-gray-400">
            I AM
          </span>
          <h1 className="text2 md:text-[12vw] text-8xl font-bold">BEDAR</h1>
          <span className="text3 absolute md:bottom-[-22px] md:right-8 bottom-[-22px] right-2 md:text-xl text-md text-gray-400">
            FRONTEND, DEVELOPER
          </span>
        </div>
      </div>
    </section>
  );
});

export default Home;
