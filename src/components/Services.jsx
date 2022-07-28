import React from "react";
import { services } from "../data";

export default function Services() {
  return (
    <section id="services" className="section bg-tertiary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block">
            What I do for clients
          </h2>
          <p className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            quibusdam repudiandae neque sed qui. Laudantium ipsa earum cum quos
            beatae amet voluptates iure ullam, quo doloribus quaerat perferendis
            molestiae voluptas?
          </p>
        </div>
        <div className="grid lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const { icon, name, description } = service;
            return (
              <div key={index} className="bg-secondary p-6 rounded-2xl">
                <div className="text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-24 text-[28px]">
                  {icon}
                </div>
                <h4 className="text-xl font-medium mb-2 ">{name}</h4>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
