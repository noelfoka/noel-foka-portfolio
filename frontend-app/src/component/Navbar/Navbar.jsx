import React from "react";
import { HiMenuAlt4, HIX } from "react-icons/hi";
import { motion } from "framer-motion";

import "./Navbar.scss";
import images from "../../constants";
import { useSyncExternalStore } from "react";
import { useState } from "react";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["Home", "About", "Contact", "Work", "Skills", "Contact"].map(
          (item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          )
        )}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HIX onClick={() => setToggle(false)} />
            {["Home", "About", "Contact", "Work", "Skills", "Contact"].map(
              (item) => (
                <li key={item}>
                  <div />
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              )
            )}
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
