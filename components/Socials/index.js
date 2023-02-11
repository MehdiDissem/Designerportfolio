import React from "react";
import Button from "../Button";

import yourData from "../../data/portfolio.json";

const Socials = ({ className }) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {yourData.socials.map((social, index) => (
        <Button key={index} onClick={() => window.open(social.link)}>
          {social.title}
        </Button>
      ))}
      <a href="https://drive.google.com/file/d/1bmnrzxVJg0_GC_-0vRjo9bIyGX9OEses/view?usp=sharing" download="https://drive.google.com/file/d/1bmnrzxVJg0_GC_-0vRjo9bIyGX9OEses/view?usp=sharing">
        <Button>Mon portfolio</Button>
        </a>
    </div>
  );
};

export default Socials;
