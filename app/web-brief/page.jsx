"use client";
import React, { useState } from "react";
import "./style.css";
import Footer from "../_components/Footer";

const Page = () => {
  const initialFormState = {
    fullName: "",
    company: "",
    role: "",
    email: "",
    phone: "",
    businessName: "",
    purpose: "",
    navigation: "",
    websiteFeeling: "",
    competitors: "",
    admire: "",
    businessDescription: "",
    targetAudience: "",
    additionalComments: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/brief/web", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setResponseMessage("Form submitted successfully!");
        setFormData(initialFormState);
      } else {
        setResponseMessage(result.message || "Failed to send. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div className="body TreeBg formBrief" id="section7">
        <p className="mb-12 text-center">
          This Website brief serves as a foundation for planning and executing the initial mockup of your website. It&apos;s essential to ensure all stakeholders have a clear understanding of the project&apos;s objectives and strategies.
        </p>

        <form onSubmit={handleSubmit} className="webFormBrief">
          <h2 className="briefHead">Website Brief Form</h2>

          <div className="form-group">
            <h2>General Information</h2>
            {["fullName", "company", "role", "email", "phone"].map((field, index) => (
              <input
                key={index}
                type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                name={field}
                required
                placeholder={field.split(/(?=[A-Z])/).join(" ").replace(/^\w/, (c) => c.toUpperCase())}
                value={formData[field]}
                onChange={handleChange}
              />
            ))}
          </div>

          {[
            { name: "businessName", label: "Business Name" },
            { name: "purpose", label: "Purpose of The Website" },
            { name: "navigation", label: "Web Page Titles (Navigation)" },
            { name: "websiteFeeling", label: "Overall Feel of the Website" },
            { name: "competitors", label: "Main Competitors (List 3)" },
            { name: "admire", label: "What Do You Admire About Their Website?" },
            { name: "businessDescription", label: "Business Description" },
            { name: "targetAudience", label: "Target Audience" },
            { name: "additionalComments", label: "Additional Comments" },
          ].map(({ name, label }) => (
            <div className="form-group" key={name}>
              <label htmlFor={name}>{label}:</label>
              <textarea
                name={name}
                required={name !== "additionalComments"}
                placeholder={label}
                value={formData[name]}
                onChange={handleChange}
              />
            </div>
          ))}

          <div className="form-group submit">
            <input type="submit" value="Submit" />
          </div>

          {responseMessage && (
            <p className="response-message">{responseMessage}</p>
          )}
        </form>
      </div>

      <div className="bg-[#0A0A0A] w-[100vw] mt-12">
        <Footer />
      </div>
    </>
  );
};

export default Page;
