import React from "react";

export default function Project({ item }) {
  return (
    <div key={item.id} className="flex flex-col items-center text-center">
      <div className="mb-8">
        <img className="rounded-2xl" src={item.image} alt="" />
      </div>
      <h3 className="text-2xl font-semibold capitalize mb-3">{item.name}</h3>
      <div className="flex gap-5">
        <a
          className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all cursor-pointer"
          href={item.githubLink}
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <a
          className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all cursor-pointer"
          href={item.demoLink}
          target="_blank"
          rel="noreferrer"
        >
          Demo
        </a>
      </div>
    </div>
  );
}
