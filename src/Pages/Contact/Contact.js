import React from "react";
import { toast } from "react-hot-toast";
import {
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlinePhone,
} from "react-icons/hi2";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = e.target;
    const name = data.name.value;
    const email = data.email.value;
    const phone = data.phone.value;
    const message = data.message.value;
    const companyName = data.company.value;
    const contactData = {
      name,
      email,
      phone,
      message,
      companyName,
    };
    console.log(contactData);
    toast.success("Successfully sent your message");
  };
  return (
    <div className="py-10 bg-gray-100 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Contact us
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">
            Lorem Ipsum ulai non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
          <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
            <div
              data-aos="flip-left"
              data-aos-easing="ease-in-out"
              className="overflow-hidden bg-white rounded-xl"
            >
              <div className="p-6">
                <HiOutlinePhone className="flex-shrink-0 w-10 h-10 mx-auto text-blue-500" />
                <p className="mt-6 text-lg font-medium text-gray-900">
                  +880 17385921
                </p>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  +880 13037283
                </p>
              </div>
            </div>

            <div
              data-aos="flip-left"
              data-aos-easing="ease-in-out"
              className="overflow-hidden bg-white rounded-xl"
            >
              <div className="p-6">
                <HiOutlineEnvelope className="flex-shrink-0 w-10 h-10 mx-auto text-blue-500" />
                <p className="mt-6 text-lg font-medium text-gray-900">
                  contact@gmail.com
                </p>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  hr@yahoo.com
                </p>
              </div>
            </div>

            <div
              data-aos="flip-left"
              data-aos-easing="ease-in-out"
              className="overflow-hidden bg-white rounded-xl"
            >
              <div className="p-6">
                <HiOutlineMapPin className="flex-shrink-0 w-10 h-10 mx-auto text-blue-500" />
                <p className="mt-6 text-lg font-medium leading-relaxed text-gray-900">
                  245/4 Haji Rd. Dhaka 1206, Bangladesh
                </p>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            className="mt-6 overflow-hidden bg-white rounded-xl"
          >
            <div className="px-6 py-12 sm:p-12">
              <h3 className="text-3xl font-semibold text-center text-gray-900">
                Send us a message
              </h3>

              <form
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                onSubmit={handleSubmit}
                className="mt-14"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      {" "}
                      Your name{" "}
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        required
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-base font-medium text-gray-900">
                      {" "}
                      Email address{" "}
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="Enter your full name"
                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-base font-medium text-gray-900">
                      {" "}
                      Phone number{" "}
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        required
                        type="tel"
                        name="phone"
                        placeholder="Enter your full name"
                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-base font-medium text-gray-900">
                      {" "}
                      Company name{" "}
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        type="text"
                        name="company"
                        placeholder="Enter your full name"
                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-base font-medium text-gray-900">
                      {" "}
                      Message{" "}
                    </label>
                    <div className="mt-2.5 relative">
                      <textarea
                        required
                        name="message"
                        placeholder=""
                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
