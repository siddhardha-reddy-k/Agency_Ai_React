import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const servicesData = [
    {
      title: "Advertising",
      description:
        "we turn bold ideas into powerful digital solutions that connect, engage...",
      icon: assets.ads_icon,
    },
    {
      title: "Content Marketing",
      description: "We help you execute your plan and deliver results.",
      icon: assets.marketing_icon,
    },
    {
      title: "Content writing",
      description:
        "We help you create a marketing strategy that drives results.",
      icon: assets.content_icon,
    },
    {
      title: "Social media",
      description:
        "We help you build a strong social media presence and engage with your audience.",
      icon: assets.social_icon,
    },
  ];
  return (
    <div
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-110 -left-70 -z-1 dark:hidden"
      />

      <Title
        title="How can we help?"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <div className="flex flex-col md:grid grid-cols-2">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-3 p-8 border border-gray-200 rounded-xl dark:border-gray-700 hover:shadow-lg transition-shadow"
          >
            <img src={service.icon} alt="" className="w-12" />
            <h4 className="text-xl font-semibold">{service.title}</h4>
            <p className="text-gray-500 dark:text-white/70 text-sm">
              {service.description}
            </p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Services;
