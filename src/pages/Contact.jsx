import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xeoknrpd");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <section className="flex md:flex-row flex-col gap-12 items-center justify-around w-full max-w-[1366px]">
      <div className="text-center flex flex-col space-y-8 w-full md:w-1/2 px-4 md:px-8">
        <div>
          <h1 className="md:text-6xl text-2xl text-[var(--color-text)] font-bold mb-4">
            Contact
          </h1>
          <p className="text-[var(--color-subtext)]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            provident ea maxime blanditiis at illo, nam autem, iste praesentium
            nostrum, doloribus omnis minus quibusdam id quasi voluptate
            repellendus culpa atque?
          </p>
        </div>

        <div>
          <h2 className="text-2xl text-[var(--color-text)] font-semibold">
            Adress
          </h2>
          <p className="text-[var(--color-subtext)]">Algiers - Draria</p>
        </div>

        <div>
          <h2 className="text-2xl text-[var(--color-text)] font-semibold">
            Email
          </h2>
          <a className="text-[var(--color-subtext)]" href="email">
            azzedinebedar@gmail.com
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 px-12 md:px-8">
        <form
          onSubmit={handleSubmit}
          className="bg-[var(--color-bg-seconde)] shadow-lg p-8 rounded-md"
        >
          <h1 className="md:text-6xl text-[var(--color-text)] text-2xl font-bold mb-4 text-center">
            Contact Form
          </h1>

          {/* Form */}
          <div className="lg:px-20 flex flex-col space-y-8 mb-12">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="text-md text-[var(--color-muted)] border-b-2 border-[var(--color-surface)] w-full py-2 outline-0"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="text-md text-[var(--color-muted)] border-b-2 border-[var(--color-surface)] w-full py-2 outline-0"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="text-md text-[var(--color-muted)] border-b-2 border-[var(--color-surface)] w-full py-2 outline-0"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="text-md text-[var(--color-muted)] border-b-2 border-[var(--color-surface)] w-full py-2 outline-0"
            />
          </div>
          <div className="w-full text-center">
            <button
              type="submit"
              disabled={state.submitting}
              className="bg-[var(--color-bg-seconde)] text-[var(--color-strong)] shadow-lg px-6 py-2 text-2xl cursor-pointer transform duration-150 hover:bg-[var(--color-bg-hover)]"
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
