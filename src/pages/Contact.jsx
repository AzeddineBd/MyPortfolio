const Contact = () => {
  return (
    <section className="flex md:flex-row flex-col gap-12 items-center justify-around w-full max-w-[1366px]">
      <div className="text-center flex flex-col space-y-8 w-full md:w-1/2 px-4 md:px-8">
        <div>
          <h1 className="md:text-6xl text-2xl font-bold mb-4">Contact</h1>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            provident ea maxime blanditiis at illo, nam autem, iste praesentium
            nostrum, doloribus omnis minus quibusdam id quasi voluptate
            repellendus culpa atque?
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Adress</h2>
          <p className="text-gray-300">Algiers - Draria</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Email</h2>
          <a className="text-gray-300" href="email">
            azzedinebedar@gmail.com
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 px-12 md:px-8">
        <form action="#" className="bg-[#111] p-8 rounded-md">
          <h1 className="md:text-6xl text-2xl font-bold mb-4 text-center">
            Contact Form
          </h1>

          {/* Form */}
          <div className="lg:px-20 flex flex-col space-y-8 mb-12">
            <input
              type="text"
              placeholder="Full Name"
              className="text-md border-b-2 border-[#444] w-full py-2 outline-0"
            />
            <input
              type="number"
              placeholder="Phone Number"
              className="text-md border-b-2 border-[#444] w-full py-2 outline-0"
            />
            <input
              type="email"
              placeholder="Email"
              className="text-md border-b-2 border-[#444] w-full py-2 outline-0"
            />
            <input
              type="text"
              placeholder="Message"
              className="text-md border-b-2 border-[#444] w-full py-2 outline-0"
            />
          </div>
          <div className="w-full text-center">
            <button className="bg-[#333] px-6 py-2 text-2xl cursor-pointer transform duration-150 hover:bg-[#222]">
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
