import React from "react";
import { social } from "../data";

export default function Socials() {
  return (
    <ul className="flex space-x-6">
      {social.map((item, index) => (
        <li
          key={index}
          className="flex justify-center items-center text-accent"
        >
          <a href={item.href} className="text-base">
            {item.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
