import React from "react";

import { social } from "../data";

export default function Footer() {
  return (
    <footer className="bg-tertiary py-12">
      <div className="containre mx-auto">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-around">
          <div className="flex space-x-6 items-center justify-center">
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className="text-accent text-base" href={href} key={index}>
                  {icon}
                </a>
              );
            })}
          </div>
          <div>
            <h1>Nguyễn Lê Tấn Nghiệp</h1>
          </div>
          <p>&copy; 2022 Nguyễn Lê Tấn Nghiệp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
