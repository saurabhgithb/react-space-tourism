// import React, { useState } from "react";
import React, { useState, useEffect } from 'react';
import Navigation from "../components/Navigation";
import { destinations } from "/src/data.json";

const Destination = () => {
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
      tabsRef.current.forEach(tab => tab.setAttribute("tabIndex", -1));
      tabsRef.current[index].setAttribute("tabIndex", 0);
      tabsRef.current[index].focus();
    }

    tabList.addEventListener('keydown', handleKeyDown);
    return () => {
      tabList.removeEventListener('keydown', handleKeyDown);
    }
  }, [tabFocus]);

  function handleClick(index) {
    setTabFocus(index);
    tabsRef.current[tabFocus].setAttribute("tabIndex", -1);
    tabsRef.current[index].setAttribute("tabIndex", 0);
    tabsRef.current[index].focus();
  }

  return (
    <div className="body destination">
      <Navigation />
      <main
        id="main"
        className="grid-container grid-container--destination flow"
      >
        <h1 className="numbered-title">
          <span aria-hidden="true">01</span> Pick your destination
        </h1>

        {destinations.map((planet, index) => (
          <picture
            // hidden={active !== planet.name}
            hidden={tabFocus !== index}
            id={`${planet.name}-image`}
            key={`${planet.name}-tab-image`}
          >
            <source srcSet={planet.images.webp} type="image/webp" />
            <img src={planet.images.png} alt={`planet ${planet.name}`} />
          </picture>
        ))}

        <div
          className="tab-list underline-indicators flex"
          role="tablist"
          aria-label="destination list"
          ref={tabListRef}
        >
          {destinations.map((planet, index) => (
            <button
              aria-selected={tabFocus === index ? "true" : "false"}
              role="tab"
              aria-controls={`${planet.name}-tab`}
              className="uppercase ff-sans-cond text-light letter-spacing-2"
              tabIndex="0"
              data-image={`${planet.name}-image`}
              key={`${planet.name}-tab-button`}
              onClick={() => handleClick(index)}
            >
              {planet.name}
            </button>
          ))}
        </div>

        {destinations.map((planet, index) => (
          <article
            // hidden={active !== planet.name}
            hidden={tabFocus !== index}
            className="destination-info flow"
            id={`${planet.name}-tab`}
            tabIndex="0"
            role="tabpanel"
            key={`${planet.name}-tab-article`}
          >
            <h2 className="fs-800 uppercase ff-serif">{planet.name}</h2>

            <p>{planet.description}</p>

            <div className="destination-meta flex">
              <div>
                <h3 className="text-light fs-200 uppercase">Avg. distance</h3>
                <p className="ff-serif uppercase">{planet.distance}</p>
              </div>
              <div>
                <h3 className="text-light fs-200 uppercase">
                  Est. travel time
                </h3>
                <p className="ff-serif uppercase">{planet.travel}</p>
              </div>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
};

export default Destination;
