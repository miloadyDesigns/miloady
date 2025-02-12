"use client";
import React, { useState } from "react";
import "./style.css";
import Footer from "../_components/Footer";

const Page = () => {
  const [formData, setFormData] = useState({
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
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
        setResponseMessage(result.message);
        setFormData({
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
        });
      } else {
        setResponseMessage("Failed to send. Please try again.");
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
          This Website brief serves as a foundation for planning and executing
          the initial mockup of your website. It's essential to ensure all
          stakeholders have a clear understanding of the project's objectives
          and strategies.
        </p>
        <form onSubmit={handleSubmit} className="webFormBrief">
          <h2 className="briefHead">Website Brief Form</h2>

          <div className="form-group">
            <h2>General Information</h2>
            <input
              type="text"
              name="fullName"
              required
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="company"
              required
              placeholder="Company/Organization Name"
              value={formData.company}
              onChange={handleChange}
            />
            <input
              type="text"
              name="role"
              required
              placeholder="Position/Role"
              value={formData.role}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Contact Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              required
              placeholder="Contact Phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="businessName">Business Name:</label>
            <input
              type="text"
              name="businessName"
              required
              placeholder="Exact Name of Your Business/Organization"
              value={formData.businessName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="purpose">Purpose of The Website:</label>
            <textarea
              name="purpose"
              required
              placeholder="Describe the purpose of the website"
              value={formData.purpose}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="navigation">
              As per the navigation of your website, State the title of your Web
              Pages (Navigation):
            </label>
            <textarea
              name="navigation"
              required
              placeholder="List web page titles (Navigation)"
              value={formData.navigation}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="websiteFeeling">
              What type of overall feeling would you like to project with your
              new Website:
            </label>
            <textarea
              name="websiteFeeling"
              required
              placeholder="Describe the overall feel of the website"
              value={formData.websiteFeeling}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="competitors">
              Who are your main competitors in the industry? (List Any 3):
            </label>
            <textarea
              name="competitors"
              required
              placeholder="List 3 main competitors"
              value={formData.competitors}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="admire">
              What do you admire about their website?
            </label>
            <textarea
              name="admire"
              required
              placeholder="What do you admire about their website?"
              value={formData.admire}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="businessDescription">
              Please give a brief description of your business:{" "}
            </label>
            <textarea
              name="businessDescription"
              required
              placeholder="Provide a brief description of your business"
              value={formData.businessDescription}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="targetAudience">Target Audience:</label>
            <textarea
              name="targetAudience"
              required
              placeholder="Who is your target audience?"
              value={formData.targetAudience}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="additionalComments">Additional Comments:</label>
            <textarea
              name="additionalComments"
              placeholder="Any additional comments?"
              value={formData.additionalComments}
              onChange={handleChange}
            />
          </div>

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
