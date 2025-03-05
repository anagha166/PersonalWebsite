import React from "react";
import ContactForm from "./ContactForm";

const ContactMe = () => {
  return (
    <div className="bg-[#748877] w-[60%] rounded-4xl m-32 px-4 font-mono">
      <div className="flex justify-center items-center min-h-screen p-2">
        <div className="grid gap-20 md:grid-cols-2 max-w-[90vw] w-full px-4">
          <div className=" flex flex-col justify-between gap-8 md:order-1">
            <div className="pt-20 flex flex-col">
              <div className="flex flex-col w-[22vw] gap-4">
                <h2 className="text-4xl text-white">+ contact me</h2>
                <p className="text-white text-xs">
                  I'm always open to new opportunities and collaborations.
                  <p className="pt-4">
                  Whether you have a project in mind, are interested in a
                  commission, or just want to chat, feel free to reach out!
                  </p>
                </p>
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
