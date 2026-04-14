import ContactForm from "./ContactForm";
import sigma from "../assets/Landing/Signature.png";

const ContactMe = () => {
  return (
    <div className="bg-[#748877]/95 w-full max-w-5xl rounded-4xl mx-auto my-10 md:my-14 lg:my-16 px-4 md:px-10 lg:px-14 font-mono border border-white/10 shadow-2xl">
      <div className="flex justify-center items-center py-10 md:py-14 lg:py-16">
        <div className="grid gap-10 lg:gap-14 grid-cols-1 md:grid-cols-2 w-full">
          <div className="flex flex-col justify-between gap-6 md:gap-8 md:order-1">
            <div className="pt-8 md:pt-4 flex flex-col">
              <div className="flex flex-col w-full gap-6 md:gap-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-white">./contact me</h2>
                <div className="text-white text-sm md:text-base lg:text-lg">
                  <p>I'm always open to new opportunities and collaborations.</p>
                  <p className="pt-4">
                    Whether you have a project in mind, are interested in a
                    commission, or just want to chat, feel free to reach out.
                  </p>
                  <p className="pt-4">I would love to hear from you!</p>
                  <div className="flex justify-center md:justify-start">
                    <img
                      className="pt-8 md:pt-10 w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 object-contain"
                      src={sigma}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:order-3 w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
