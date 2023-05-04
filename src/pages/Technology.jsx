import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import { technology } from "/src/data.json";

const Technology = () => {
  const [tabFocus, setTabFocus] = useState(0);
  const tabListRef = React.useRef(null);
  const tabsRef = React.useRef([]);

  useEffect(() => {
    const tabList = tabListRef.current;
    const tabs = Array.from(tabList.querySelectorAll('[role="tab"]'));
    tabsRef.current = tabs;

    function handleKeyDown(event) {
      const { keyCode } = event;
      const tabsCount = tabsRef.current.length;
      let index = tabFocus;

      if (keyCode === 37 || keyCode === 38) {
        // Move focus to the previous tab
        index = index - 1;
        if (index < 0) {
          index = tabsCount - 1;
        }
      }

      if (keyCode === 39 || keyCode === 40) {
        // Move focus to the next tab
        index = index + 1;
        if (index >= tabsCount) {
          index = 0;
        }
      }

      setTabFocus(index);
      tabsRef.current.forEach((tab) => tab.setAttribute("tabIndex", -1));
      tabsRef.current[index].setAttribute("tabIndex", 0);
      tabsRef.current[index].focus();
    }

    tabList.addEventListener("keydown", handleKeyDown);
    return () => {
      tabList.removeEventListener("keydown", handleKeyDown);
    };
  }, [tabFocus]);

  function handleClick(index) {
    setTabFocus(index);
    tabsRef.current[tabFocus].setAttribute("tabIndex", -1);
    tabsRef.current[index].setAttribute("tabIndex", 0);
    tabsRef.current[index].focus();
  }

  return (
    <div className="body technology">
      <Navigation />
      <main
        id="main"
        className="grid-container grid-container--technology flow"
      >
        <h1 className="numbered-title">
          <span aria-hidden="true">03</span> Space launch 101
        </h1>

        {technology.map((tech, index) => (
          <picture
            hidden={tabFocus !== index}
            id={`${tech.name}-image`}
            key={`${tech.name}-tab-image`}
          >
            <img
              src={tech.images.portrait}
              alt={`${tech.name}-portrait`}
              className="image1"
            />
            <img
              src={tech.images.landscape}
              alt={`${tech.name}-landscape`}
              className="image2"
            />
          </picture>
        ))}

        <div
          className="number-indicators flex"
          role="tablist"
          aria-label="technology member list"
          ref={tabListRef}
        >
          {technology.map((tech, index) => (
            <button
              aria-selected={tabFocus === index ? "true" : "false"}
              className="fs-600 ff-serif text-white"
              aria-controls={`${tech.name}-tab`}
              role="tab"
              data-image={`${tech.name}-image`}
              tabIndex="0"
              key={`${tech.name}-tab-button`}
              onClick={() => handleClick(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {technology.map((tech, index) => (
          <article
            hidden={tabFocus !== index}
            className="technology-info flow"
            id={`${tech.name}-tab`}
            role="tabpanel"
            tabIndex="0"
            key={`${tech.name}-tab-article`}
          >
            <header className="flow flow--space-small">
              <h2 className="fs-300 ff-serif uppercase letter-spacing-3">
                The terminology...
              </h2>
              <p className="fs-700 uppercase ff-serif">{tech.name}</p>
            </header>
            <p>{tech.description}</p>
          </article>
        ))}
      </main>
    </div>
  );
};

export default Technology;
