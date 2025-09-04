import ContactForm from "./ContactForm";
import sigma from "../assets/Landing/Signature.png";

const ContactMe = () => {
  return (
    <div className="bg-[#748877] w-full max-w-4xl rounded-4xl m-4 md:m-8 lg:m-16 px-4 md:px-8 font-mono">
      <div className="flex justify-center items-center min-h-screen px-2">
        <div className="grid gap-8 md:gap-12 lg:gap-20 md:grid-cols-2 max-w-full w-full px-4">
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
                      className="pt-8 md:pt-12 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
                      src={sigma}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:order-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
