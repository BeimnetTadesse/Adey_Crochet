import { FaPaperPlane } from "react-icons/fa";

type Props = {
  id?: string; // Add this line
};

const Contact = ({ id }: Props) => {
  return (
    <section id={id} className="py-16 px-6 md:px-12 lg:px-24 flex justify-center">
      <div className="max-w-3xl w-full text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Get In Touch
        </h2>
        <div className="w-16 h-1 bg-[#A67B5B] mx-auto my-3"></div>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Have any questions or inquiries? Feel free to reach out to us. We&apos;re here to help!
        </p>

        {/* Contact Form */}
        <form className="space-y-5 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border-none bg-gray-100 dark:bg-[#1f1f1f] text-gray-600 dark:text-gray-300 rounded-lg focus:ring-2 focus:ring-[#A67B5B] focus:outline-none [&:focus]:ring-offset-2"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-3 border-none bg-gray-100 dark:bg-[#1f1f1f] text-gray-600 dark:text-gray-300 rounded-lg focus:ring-2 focus:ring-[#A67B5B] focus:outline-none [&:focus]:ring-offset-2"
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border-none bg-gray-100 dark:bg-[#1f1f1f] text-gray-600 dark:text-gray-300 rounded-lg focus:ring-2 focus:ring-[#A67B5B] focus:outline-none [&:focus]:ring-offset-2"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 border-none bg-gray-100 dark:bg-[#1f1f1f] text-gray-600 dark:text-gray-300 rounded-lg focus:ring-2 focus:ring-[#A67B5B] focus:outline-none [&:focus]:ring-offset-2"
          />

          {/* Submit Button */}
          <div className="flex justify-center">
            <button className="px-6 py-3 bg-[#A67B5B] text-white font-semibold rounded-lg flex items-center gap-2 hover:bg-[#6B4226] transition-all duration-300 [&:hover]:scale-105">
              <FaPaperPlane />
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;