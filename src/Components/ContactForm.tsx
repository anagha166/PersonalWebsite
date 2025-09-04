const ContactForm = () => {
  return (
    <div className="flex justify-center items-center px-4">
      <form className="w-full max-w-md px-6 rounded-lg">
        <p className="text-white pb-2 text-sm md:text-base">Name</p>
        <input
          type="text"
          className="w-full p-3 mb-4 bg-[#1E11E] text-white border border-white rounded-lg focus:outline-none focus:ring-2 hover:bg-[#89ac8e] focus:ring-gray-500"
        />

        <p className="text-white pb-2 text-sm md:text-base">Email</p>
        <input
          type="email"
          className="w-full p-3 mb-4 bg-[#1E11E] text-white border border-white rounded-lg focus:outline-none focus:ring-2 hover:bg-[#89ac8e] focus:ring-gray-500"
        />
        <p className="text-white pb-2 text-sm md:text-base">Subject</p>
        <input
          type="text"
          className="w-full p-3 mb-4 bg-[#1E11E] text-white border border-white rounded-lg hover:bg-[#89ac8e] focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <p className="text-white pb-2 text-sm md:text-base">Message</p>
        <textarea
          rows={5}
          className="w-full p-3 mb-4 bg-[#1E11E] text-white border border-white rounded-lg hover:bg-[#89ac8e] focus:outline-none focus:ring-2 focus:ring-gray-500"
        ></textarea>

        <button className="transform transition-transform hover:translate-y-[5px] shadow-lg text-sm md:text-base border-2 border-amber-50 rounded-full px-6 md:px-8 py-2 text-white mt-2">
          send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
