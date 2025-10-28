"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState("");
  const [project, setProject] = useState("");
  const [industry, setIndustry] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      name,
      email,
      phone,
      budget,
      project,
      industry,
      message,
    });
  };

  return (
    <div className="container flex flex-wrap bg2 min-h-[680px] mar pt-[20px]">
      {/* Left Side */}
      <div className="w-full lg:w-1/2 relative hidden lg:block px-[40px] pt-[40px]">
        <div className="mb-2 flex items-center space-x-2 para font-semibold color mt-[40px] lg:mt-0 justify-center sm:justify-start text-center sm:text-start">
          <Image src="/arw.png" alt="arrow" width={200} height={200} className="w-7" />
          <span className="font text-white">Let’s Get Started</span>
          <Image src="/alw.png" alt="arrow" width={200} height={200} className="w-7" />
        </div>

        <h2 className="heading font-bold text-white text-center sm:text-start leading-[45px]">
          Your Website, Your Growth — Let’s Build It Together
        </h2>
        <p className="text-white text-[19px] mt-[10px] w-[95%]">
          Whether you need your very first website or a complete rebuild of a broken one, we’ll help you launch a site for your brand. Book a free session now.
        </p>
        <ul className="text-[19px] text-white list-disc list-inside mt-[10px]">
          <li>Fast turnaround — launch in weeks, not months</li>
          <li>Conversion-driven design (built to get leads & sales)</li>
          <li>Dedicated experts, no hidden costs</li>
        </ul>
        <Image
          src="/contactimg.png"
          alt="img"
          width={400}
          height={400}
          className="absolute bottom-0 !w-[80%] left-[50px] z-[3]"
        />
      </div>

      {/* Right Side (Form) */}
      <div className="w-full lg:w-1/2 text-white">
        <div className="w-[90%] mx-auto lg:mx-0 flex flex-col items-center sm:items-start">
          <p className="text-[27px] lg:text-[33px] 2xl:text-[34px] font-[700] my-[10px] text-center sm:text-start font">
            Got an Idea in Mind? Let’s Make It Live.
          </p>

          <form className="w-full" onSubmit={handleSubmit}>
            <div className="w-full flex flex-col items-center sm:items-start xl:gap-[10px] mb-[20px]">
              {/* Name + Email */}
              <div className="flex gap-[7px] xl:gap-[15px] mt-[20px] w-full">
                <div className="w-full lg:w-1/2">
                  <label>Your Name*</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="my-[10px] xl:my-[15px] text-white w-full border bg-transparent py-[10px] px-[10px]"
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <label>Your Email*</label>
                  <input
                    type="email"
                    placeholder="info@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="my-[10px] xl:my-[15px] text-white w-full border bg-transparent py-[10px] px-[10px]"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="w-full">
                <label>Your Phone*</label>
                <input
                  type="text"
                  placeholder="Your Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="my-[10px] xl:my-[15px] text-white w-full border bg-transparent py-[10px] px-[10px]"
                />
              </div>

              {/* Budget */}
              <div className="w-full mb-[20px]">
                <label>Your Budget*</label>
                <div className="flex flex-wrap gap-x-[15px] xl:gap-x-[35px] mt-[15px] text-white">
                  {["$25-$50K", "$50-$80K", "$80-$100K", "$100K+"].map((range) => (
                    <label key={range} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="budget"
                        value={range}
                        checked={budget === range}
                        onChange={(e) => setBudget(e.target.value)}
                        required
                      />
                      {range}
                    </label>
                  ))}
                </div>
              </div>

              {/* Project */}
              <div className="w-full">
                <label>Describe Your Project*</label>
                <select
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                  required
                  className="my-[10px] xl:my-[15px] text-white w-full border bg-transparent py-[10px] px-[10px]"
                >
                  <option value="" className="bg2">Please Select</option>
                  <option value="Website Design" className="bg2">Website Design</option>
                  <option value="Mobile App Development" className="bg2">Mobile App Development</option>
                  <option value="E-commerce Website" className="bg2">E-commerce Website</option>
                  <option value="Custom Software" className="bg2">Custom Software</option>
                </select>
              </div>

              {/* Industry */}
              <div className="w-full">
                <label>What Industry are You in?*</label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  required
                  className="my-[10px] xl:my-[15px] text-white w-full border bg-transparent py-[10px] px-[10px]"
                >
                  <option value="" className="bg2">Please Select</option>
                  <option value="Healthcare" className="bg2">Healthcare</option>
                  <option value="Education" className="bg2">Education</option>
                  <option value="Finance" className="bg2">Finance</option>
                  <option value="Technology" className="bg2">Technology</option>
                  <option value="Other" className="bg2">Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="w-full">
                <label>What else should we know?*</label>
                <textarea
                  placeholder="Tell us about your product, timeline, and how you heard about us"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="my-[10px] xl:my-[15px] min-h-[150px] text-white w-full border bg-transparent py-[10px] px-[10px]"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="px-[20px] py-[10px] font-[500] bg-white text-[#181965] rounded-[25px] text-center border border-white hover:bg-transparent hover:text-white"
              >
                Book My Free Session
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
