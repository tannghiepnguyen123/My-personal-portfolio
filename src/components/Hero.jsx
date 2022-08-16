import React from "react";
import MyImg from "../assets/img/my_img.jpg";
import MyCV from "../assets/MyResume.pdf";

export default function Hero() {
  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden "
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className="text-lg text-accent my-[22px]">Hey, I'm Nghiệp</p>
            <h1 className="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
              I build & Design <br /> Web Interfaces
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati architecto ipsa nemo doloremque impedit! Cupiditate sunt
              dolores laborum quae, expedita recusandae, vitae non sequi
              voluptatibus laudantium eum hic consequatur ratione.
            </p>
            <div className="flex gap-5">
              <button className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all">
                Work with me
              </button>
              <a
                download
                className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all cursor-pointer"
                href={MyCV}
              >
                Look at my CV
              </a>
            </div>
          </div>
          <div className="hidden lg:flex flex-1 justify-end items-end h-full">
            <img src={MyImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
