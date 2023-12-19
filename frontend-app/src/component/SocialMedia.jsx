import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://github.com/noelfoka" target="_blank">
          <IoLogoGithub />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/noelfoka/" taget="_blank">
          <FaLinkedinIn />
        </a>
      </div>
      <div>
        <a href="https://twitter.com/noelnomgne" target="_blank">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://web.facebook.com/noel.foka?_rdc=2&_rdr" target="_blank">
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/nomgnenoel/" target="_blank">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
