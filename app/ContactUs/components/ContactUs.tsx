"use client";

import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    interest: "",
    fullName: "",
    email: "",
    mobile: "",
    note: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // Validation
    if (
      !formData.interest ||
      !formData.fullName ||
      !formData.email ||
      !formData.mobile
    ) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in all required fields.",
      });
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      setIsSubmitting(false);
      return;
    }

    const mobileRegex = /^\d{10,}$/;
    if (!mobileRegex.test(formData.mobile.replace(/\s/g, ""))) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a valid mobile number (at least 10 digits).",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", formData);

      setSubmitStatus({
        type: "success",
        message: "Thank you! We will get back to you soon.",
      });

      setFormData({
        interest: "",
        fullName: "",
        email: "",
        mobile: "",
        note: "",
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-[#F5F3EF] py-24 px-6 md:px-16 lg:px-28 font-crimson">
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading - What are you interested in? */}
        <h2 className="text-[28px] text-[#2D2926] mb-12">
          What are you interested in?
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8 text-left">
          {/* Interest Dropdown */}
          <div>
            <label className="block text-[20px] text-[#2D2926] mb-3">
              What are you interested in? <span className="text-red-500">*</span>
            </label>
            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              required
              className="w-full h-[46px] bg-[#E9E7E4] px-4 outline-none appearance-none cursor-pointer text-black"
            >
              <option value="">Select an option</option>
              <option value="collaborate">Collaborate</option>
              <option value="join-event">Join Event</option>
            </select>
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-[20px] text-[#2D2926] mb-3">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full h-[46px] bg-[#E9E7E4] px-4 outline-none text-black"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-[20px] text-[#2D2926] mb-3">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full h-[46px] bg-[#E9E7E4] px-4 outline-none text-black"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-[20px] text-[#2D2926] mb-3">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full h-[46px] bg-[#E9E7E4] px-4 outline-none text-black"
            />
          </div>

          {/* Note */}
          <div>
            <label className="block text-[20px] text-[#2D2926] mb-3">
              Note <span className="italic">(Optional)</span>
            </label>
            <textarea
              name="note"
              value={formData.note}
              onChange={handleChange}
              rows={6}
              className="w-full bg-[#E9E7E4] px-4 py-3 outline-none resize-none text-black"
            />
          </div>

          {/* Status Messages */}
          {submitStatus.message && (
            <div
              className={`p-4 rounded-lg text-center ${
                submitStatus.type === "success"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          {/* Submit */}
          <div className="flex justify-center pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#5A2D1C] text-white px-12 py-3 rounded-full text-[18px] shadow-md hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}