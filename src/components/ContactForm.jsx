import { useState } from "react";
import axios from "axios";
import { CgSpinnerAlt } from "react-icons/cg";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submissionState, setSubmissionState] = useState({
    loading: false,
    success: false,
    error: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionState({
      loading: true,
      success: false,
      error: "",
    });
    try {
      await axios.post(
        "https://mail-server-6sjb.onrender.com/api/mail/portfolio-contact",
        formData
      );
      setSubmissionState({
        loading: false,
        success: true,
        error: "",
      });
      // Optionally clear form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmissionState({
        loading: false,
        success: false,
        error: "Failed to send message. Please try again later.",
      });
    }
  };

  return (
    <div className="flex w-full">
      <div className="flex flex-col px-4 md:px-8">
        <form
          onSubmit={handleSubmit}
          className="text-mainBlack dark:text-mainWhite flex flex-col"
        >
          <div className="flex flex-col md:flex-row md:space-x-3">
            <div className="mb-4 flex flex-col">
              {/* <label htmlFor="name" className="font-panchang">
                Name{" "}
              </label> */}
              <input
                onChange={handleChange}
                value={formData.name}
                placeholder="Your Name"
                type="text"
                id="name"
                name="name"
                required
                className="focus:bg-mainBlack dark:focus:bg-mainWhite focus:text-mainWhite dark:focus:text-mainBlack font-chillax selection:bg-mainBlack selection:text-mainWhite dark:selection:bg-mainWhite dark:selection:text-mainBlack border-r border-b p-1 transition duration-200 focus:outline-none placeholder:text-mainBlack placeholder:dark:text-mainWhite"
              />
            </div>
            <div className="mb-4 flex flex-col">
              {/* <label htmlFor="email" className="font-panchang">
                Email{" "}
              </label> */}
              <input
                onChange={handleChange}
                value={formData.email}
                placeholder="Email Address"
                type="text"
                id="email"
                name="email"
                required
                className="focus:bg-mainBlack dark:focus:bg-mainWhite focus:text-mainWhite dark:focus:text-mainBlack font-chillax dark:selection:bg-mainBlack dark:selection:text-mainWhite selection:bg-mainWhite selection:text-mainBlack border-r border-b p-1 transition duration-200 focus:outline-none placeholder:text-mainBlack placeholder:dark:text-mainWhite"
              />
            </div>
          </div>
          <div className="mb-4 flex flex-col">
            {/* <label htmlFor="message" className="font-panchang">
              Message{" "}
            </label> */}
            <textarea
              onChange={handleChange}
              value={formData.message}
              placeholder="Your Message"
              id="message"
              name="message"
              required
              className="focus:bg-mainBlack dark:focus:bg-mainWhite focus:text-mainWhite dark:focus:text-mainBlack font-chillax selection:bg-mainBlack selection:text-mainWhite dark:selection:bg-mainWhite dark:selection:text-mainBlack border-r border-b p-1 transition duration-200 focus:outline-none placeholder:text-mainBlack placeholder:dark:text-mainWhite"
            />
          </div>
          <div className="mb-4 flex flex-col">
            <button
              disabled={submissionState.loading}
              type="submit"
              className="bg-mainBlack dark:bg-mainWhite text-mainWhite dark:text-mainBlack hover:bg-mainWhite dark:hover:bg-mainBlack font-panchang dark:hover:text-mainWhite hover:text-mainBlack border-mainBlack dark:hover:border-mainWhite w-fit border px-2 py-1 font-semibold tracking-tight transition duration-200 hover:cursor-pointer text-sm"
            >
              {submissionState.loading ? (
                <div className="flex flex-row space-x-1">
                  <span>Sending...</span>
                  <CgSpinnerAlt className="my-auto animate-spin" />
                </div>
              ) : (
                "Send Message"
              )}
            </button>
            {submissionState.success && (
              <span className="text-mainBlack dark:text-mainWhite font-chillax mt-2">
                Message sent successfully!
              </span>
            )}
            {submissionState.error && (
              <span className="text-mainBlack dark:text-mainWhite font-chillax mt-2">
                {submissionState.error}
              </span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
