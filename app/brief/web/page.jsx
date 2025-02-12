"use client";
import React, { useState } from "react";
import { FaPencilAlt, FaPhone, FaRegUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdPhoneInTalk } from "react-icons/md";
import LightStars from "@/app/_components/LightStars/Stars";
import "./style.css";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    websitePurpose: "",
    webpageTitles: "",
    websiteFeeling: "",
    businessDescription: "",
    targetAudience: "",
    designPreferences: "",
    additionalComments: "",
    domain: "",
    hosting: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    websitePurpose: "",
    webpageTitles: "",
    websiteFeeling: "",
    businessDescription: "",
    targetAudience: "",
    designPreferences: "",
    additionalComments: "",
    domain: "",
    hosting: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Check all required fields
    for (const [key, value] of Object.entries(formData)) {
      if (key !== "domain" && key !== "hosting" && value.trim() === "") {
        newErrors[key] = `${key} is required`;
      }
    }

    if (formData.domain === "") {
      newErrors.domain = "Please select a domain option";
    }

    if (formData.hosting === "") {
      newErrors.hosting = "Please select a hosting option";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, you can submit the data here
      try {
        const response = await fetch("/api/brief/web", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          console.log(response);
          setFormData({
            name: "",
            email: "",
            phone: "",
            businessName: "",
            websitePurpose: "",
            webpageTitles: "",
            websiteFeeling: "",
            businessDescription: "",
            targetAudience: "",
            designPreferences: "",
            additionalComments: "",
            domain: "",
            hosting: "",
          });
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Form has errors.");
    }
  };

  return (
    <section className="w-screen">
      <LightStars />
      <div className="w-[80%] m-auto relative xs:pt-[30%] xs:pb-[20%] lg:pt-[8%]  lg:pb-[8%]">
        <h1 className="text-white xs:text-[32px] lg:text-[52px] font-bold">
          Get Ready to Revolutionize <br />
          Your Brand Forever
        </h1>
        <p className="text-white xs:text-[18px] xs:mt-4 xs:ml-2 lg:mt-0 lg:ml-0 lg:text-lg">
          Seeking exceptional design and development solutions? With our
          excellently crafted packages, we are here to transform your brand for
          the better.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex xs:flex-col lg:flex-row gap-4 mt-16 justify-center">
            <div className="xs:w-[100%] lg:w-[30%]  xs:mt-4 lg:mt-0">
              <div className="flex ">
                <FaRegUser color="white" size={25} className="absolute " />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-transparent border border-b-2 border-t-0 border-r-0 border-l-0 border-gray-600 w-full text-white focus:outline-none focus:border-white pl-12 pb-4 xs:text-sm lg:text-xl placeholder-gray-300"
                  placeholder="Name"
                />
                <br />
              </div>
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div className="xs:w-[100%] lg:w-[30%]  xs:mt-4 lg:mt-0">
              <div className="flex ">
                <IoIosMail color="white" size={25} className="absolute " />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-transparent border border-b-2 border-t-0 border-r-0 border-l-0 border-gray-600 w-full text-white focus:outline-none focus:border-white pl-12 pb-4 xs:text-sm lg:text-xl placeholder-gray-300"
                  placeholder="Email"
                />
                <br />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="xs:w-[100%] lg:w-[30%]  xs:mt-4  xs:mb-12 lg:mb-0 lg:mt-0 ">
              <div className="flex">
                <MdPhoneInTalk color="white" size={25} className="absolute " />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-transparent border border-b-2 border-t-0 border-r-0 border-l-0 border-gray-600 w-full text-white focus:outline-none focus:border-white pl-12 pb-4 xs:text-sm lg:text-xl placeholder-gray-300"
                  placeholder="Phone"
                />
                <br />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Business and website questions */}
          {[
            {
              label: "Exact name of your business/organization:",
              name: "businessName",
            },
            {
              label:
                "Kindly state the purpose of your website: (Is it a selling/informative website or a personal blog? etc.) ",
              name: "websitePurpose",
            },
            {
              label:
                "As per the navigation of your website, kindly state the title of your WebPages:(E.g.: Company Profile, Contact us etc.) ",
              name: "webpageTitles",
            },
            {
              label:
                "What type of overall feeling would you like to project with your new Website Domain?(Corporate, fun, high-tech, etc...)",
              name: "websiteFeeling",
            },
            {
              label:
                "Please give a brief description of your business:(What type of products or services does your company supply? etc...)",
              name: "businessDescription",
            },
            {
              label: "State the target audience of your website:",
              name: "targetAudience",
            },
            {
              label:
                "Do you have any specific design preferences? (If you have any particular likes or dislikes regarding any competitors website etc.)",
              name: "designPreferences",
            },
            {
              label: "Do you have any additional comments?",
              name: "additionalComments",
            },
          ].map((field, index) => (
            <div
              key={index}
              className="flex xs:flex-col lg:flex-row gap-6 w-[100%] xs:flex-start lg:justify-center items-center h-[200px]"
            >
              <div className="xs:w-[100%] lg:w-[30%] text-xl">
                <h1 className="text-white">{field.label} *</h1>
              </div>
              <div className="xs:w-[100%] lg:w-[60%]">
                <FaPencilAlt color="white" size={25} className="absolute" />
                <input
                  type="text"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  className="bg-transparent border border-b-2 border-t-0 border-r-0 border-l-0 border-gray-600 w-full text-white focus:outline-none focus:border-white pl-12 pb-6 xs:text-sm lg:text-xl placeholder-gray-300"
                  placeholder="Describe Here"
                />
                {errors[field.name] && (
                  <p className="text-red-500 text-sm">{errors[field.name]}</p>
                )}
              </div>
            </div>
          ))}

          {/* Domain and Hosting */}
          <div className="xs:mt-6 lg:mt-14 text-white">
            <h1 className="p-2 text-2xl font-bold">
              Domain and Web Hosting Details
            </h1>
            <p className="p-2 text-lg">
              Please give us a few details about the domain name and hosting of
              the website.
            </p>
            <div className="p-2">
              <div className="flex xs:flex-col lg:flex-row xs:gap-0 lg:gap-[274px] lg:items-center p-2">
                <h2>Do you have a Domain Name?: *</h2>
                <div className="flex gap-4">
                  <div>
                    <input
                      type="radio"
                      name="domain"
                      value={"Yes"}
                      onChange={handleRadioChange}
                    />
                    <label htmlFor="">Yes</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="domain"
                      value={"No"}
                      onChange={handleRadioChange}
                    />
                    <label htmlFor="">No</label>
                  </div>
                </div>
              </div>
              {errors.domain && (
                <p className="text-red-500 text-sm">{errors.domain}</p>
              )}

              <div className="flex xs:flex-col lg:flex-row xs:gap-0 lg:gap-32 lg:items-center p-2">
                <h2>Do you want us to provide hosting for your website?: *</h2>
                <div className="flex gap-4">
                  <div>
                    <input
                      type="radio"
                      name="hosting"
                      value={"Yes"}
                      onChange={handleRadioChange}
                    />
                    <label htmlFor="">Yes</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="hosting"
                      value={"No"}
                      onChange={handleRadioChange}
                    />
                    <label htmlFor="">No</label>
                  </div>
                </div>
              </div>
              {errors.hosting && (
                <p className="text-red-500 text-sm">{errors.hosting}</p>
              )}
              <h1 className="p-2">
                Note : We will send you a Page under construction template on
                your respective domain name, very soon. Meanwhile, our
                professional designers will be working on your custom website
                design. It will get uploaded as soon as you approve the final
                design.
              </h1>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6 xs:ml-4 lg:ml-2">
            <button type="submit" className="cssbuttons-io-button">
              Get in touch
              <div className="icon">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Page;
