import React from "react";

const ContactForm = () => {
  return (
    <div className="flex w-full">
      <div className="px-4 md:px-8 flex flex-col">
        <form className="flex flex-col text-mainBlack dark:text-mainWhite">
          <div className="mb-4 flex flex-col">
            <label htmlFor="name" className="font-panchang">
              Name{" "}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="border-b border-r focus:outline-none p-1 focus:bg-mainBlack dark:focus:bg-mainWhite focus:text-mainWhite dark:focus:text-mainBlack transition duration-200"
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label htmlFor="email" className="font-panchang">
              Email{" "}
            </label>
            <input
              type="text"
              id="email"
              name="email"
              required
              className="border-b border-r focus:outline-none p-1 focus:bg-mainBlack dark:focus:bg-mainWhite focus:text-mainWhite dark:focus:text-mainBlack transition duration-200"
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label htmlFor="message" className="font-panchang">
              Message{" "}
            </label>
            <textarea
              type="text"
              id="message"
              name="message"
              required
              className="border-b border-r focus:outline-none p-1 focus:bg-mainBlack dark:focus:bg-mainWhite focus:text-mainWhite dark:focus:text-mainBlack transition duration-200"
            />
          </div>
          <div className="mb-4 flex flex-col">
            <button
              type="submit"
              className="bg-mainBlack dark:bg-mainWhite text-mainWhite dark:text-mainBlack py-1 px-2 w-fit hover:bg-mainWhite dark:hover:bg-mainBlack transition duration-200 font-panchang dark:hover:text-mainWhite hover:text-mainBlack border border-mainBlack dark:hover:border-mainWhite hover:cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
