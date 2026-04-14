import { FormEvent, useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");
    setIsError(false);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/anaghakamath@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            subject,
            message,
            _captcha: "false",
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setStatusMessage("Message sent successfully. Thank you!");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch {
      setIsError(true);
      setStatusMessage(
        "Something went wrong while sending your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center w-full">
      <form className="w-full max-w-xl px-0 md:px-2 rounded-lg" onSubmit={handleSubmit}>
        <p className="text-white pb-2 text-sm md:text-base">Name</p>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          className="w-full p-3 mb-4 bg-white/5 text-white border border-white/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-50/40 hover:bg-white/10 transition-colors"
        />

        <p className="text-white pb-2 text-sm md:text-base">Email</p>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          className="w-full p-3 mb-4 bg-white/5 text-white border border-white/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-50/40 hover:bg-white/10 transition-colors"
        />
        <p className="text-white pb-2 text-sm md:text-base">Subject</p>
        <input
          type="text"
          name="subject"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
          required
          className="w-full p-3 mb-4 bg-white/5 text-white border border-white/40 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-amber-50/40 transition-colors"
        />
        <p className="text-white pb-2 text-sm md:text-base">Message</p>
        <textarea
          rows={5}
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
          className="w-full p-3 mb-4 bg-white/5 text-white border border-white/40 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-amber-50/40 transition-colors"
        ></textarea>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto transform transition-transform hover:translate-y-[3px] shadow-lg text-sm md:text-base border-2 border-amber-50 rounded-full px-6 md:px-8 py-2 text-white mt-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        >
          {isSubmitting ? "sending..." : "send"}
        </button>
        {statusMessage && (
          <p
            className={`mt-4 text-sm ${
              isError ? "text-red-200" : "text-amber-50"
            }`}
          >
            {statusMessage}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
