const ContactForm = () => {
  const sendForm = () => {
    //will handle email sending
  };
  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <form className="w-full max-w-md p-6 rounded-lg">
        <p className="text-white pb-2">Name</p>
        <input
          type="text"
          className="w-full p-3 mb-4 bg-[#1E11E] text-white border border-white rounded-lg focus:outline-none focus:ring-2 hover:bg-[#89ac8e] focus:ring-gray-500"
        />

        <p className="text-white pb-2">Email</p>
        <input
          type="email"
          className="w-full p-3 mb-4 bg-[#1E11E] text-white border border-white rounded-lg focus:outline-none focus:ring-2 hover:bg-[#89ac8e] focus:ring-gray-500"
        />
        <p className="text-white pb-2">Subject</p>
        <input
          type="text"
          className="w-full p-3 mb-4 bg-[#1E11E] text-white border border-white rounded-lg hover:bg-[#89ac8e] focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <p className="text-white pb-2">Message</p>
        <textarea
          rows={5}
          className="w-full p-3 mb-4 bg-[#1E11E] text-white border border-white rounded-lg hover:bg-[#89ac8e] focus:outline-none focus:ring-2 focus:ring-gray-500"
        ></textarea>

        <button className="transform transition-transform hover:translate-y-[5px] shadow-lg ml-8 text-[1vw] border-2 border-amber-50 rounded-full px-8 py-2 text-white mt-2">
          send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
