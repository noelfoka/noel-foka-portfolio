import React from "react";
import { NavigationDots, SocialMedia } from "../component";

const appWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />

        <div className="app__wrapper app__flex">
          <Component />
          <div className="copyright">
            <p className="p-text">@2023 NOEL FOKA</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>
        <NavigationDots action={idName} />
      </div>
    );
  };

export default appWrap;
