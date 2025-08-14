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
      <div className="px-4 md:px-8 flex flex-col">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col text-mainBlack dark:text-mainWhite"
        >
          <div className="flex flex-col md:flex-row md:space-x-3">
            <div className="mb-4 flex flex-col">
              <label htmlFor="name" className="font-panchang">
                Name{" "}
              </label>
              <input
                onChange={handleChange}
                value={formData.name}
                type="text"
                id="name"
                name="name"
                required
                className="border-b border-r focus:outline-none p-1 focus:bg-mainBlack dark:focus:bg-mainWhite focus:text-mainWhite dark:focus:text-mainBlack transition duration-200 font-chillax selection:bg-mainBlack selection:text-mainWhite dark:selection:bg-mainWhite dark:selection:text-mainBlack"
              />
            </div>
            <div className="mb-4 flex flex-col">
              <label htmlFor="email" className="font-panchang">
                Email{" "}
              </label>
              <input
                onChange={handleChange}
                value={formData.email}
                type="text"
                id="email"
                name="email"
                required
                className="border-b border-r focus:outline-none p-1 focus:bg-mainBlack dark:focus:bg-mainWhite focus:text-mainWhite dark:focus:text-mainBlack transition duration-200 font-chillax dark:selection:bg-mainBlack dark:selection:text-mainWhite selection:bg-mainWhite selection:text-mainBlack"
              />
            </div>
          </div>
          <div className="mb-4 flex flex-col">
            <label htmlFor="message" className="font-panchang">
              Message{" "}
            </label>
            <textarea
              onChange={handleChange}
              value={formData.message}
              id="message"
              name="message"
              required
              className="border-b border-r focus:outline-none p-1 focus:bg-mainBlack dark:focus:bg-mainWhite focus:text-mainWhite dark:focus:text-mainBlack transition duration-200 font-chillax selection:bg-mainBlack selection:text-mainWhite dark:selection:bg-mainWhite dark:selection:text-mainBlack"
            />
          </div>
          <div className="mb-4 flex flex-col">
            <button
              disabled={submissionState.loading}
              type="submit"
              className="bg-mainBlack dark:bg-mainWhite text-mainWhite dark:text-mainBlack py-1 px-2 w-fit hover:bg-mainWhite dark:hover:bg-mainBlack transition duration-200 font-panchang dark:hover:text-mainWhite hover:text-mainBlack border border-mainBlack dark:hover:border-mainWhite hover:cursor-pointer font-semibold tracking-tight"
            >
              {submissionState.loading ? (
                <div className="flex flex-row space-x-1">
                  <span>Sending...</span>
                  <CgSpinnerAlt className="animate-spin my-auto" />
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
