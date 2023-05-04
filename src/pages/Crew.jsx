import React, { useState, useEffect } from 'react';
import Navigation from "../components/Navigation";
import { crew } from "/src/data.json";

const Crew = () => {
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
    <div className="body crew">
      <Navigation />
      <main id="main" className="grid-container grid-container--crew flow">
        <h1 className="numbered-title">
          <span aria-hidden="true">02</span> Meet your crew
        </h1>

        <div
          className="dot-indicators flex"
          role="tablist"
          aria-label="crew member list"
          ref={tabListRef}
        >
          {crew.map((member, index) => (
            <button
              aria-selected={tabFocus === index ? "true" : "false"}
              aria-controls={`${member.role}-tab`}
              role="tab"
              data-image={`${member.role}-image`}
              tabIndex="0"
              key={`${member.role}-tab-button`}
              onClick={() => handleClick(index)}
            >
              <span className="sr-only">{member.role}</span>
            </button>
          ))}
        </div>

        {crew.map((member, index) => (
          <article
            hidden={tabFocus !== index}
            className="crew-info flow"
            id={`${member.role}-tab`}
            role="tabpanel"
            tabIndex="0"
            key={`${member.role}-tab-article`}
          >
            <header className="flow flow--space-small">
              <h2 className="fs-600 ff-serif uppercase">{member.role}</h2>
              <p className="fs-700 uppercase ff-serif">{member.name}</p>
            </header>
            <p>{member.bio}</p>
          </article>
        ))}

        {crew.map((member, index) => (
          <picture
            hidden={tabFocus !== index}
            id={`${member.role}-tab-image`}
            key={`${member.role}-tab-picture`}
          >
            <source srcSet={member.images.webp} type="image/webp" />
            <img src={member.images.png} alt={`${member.name}-tab-image`} />
          </picture>
        ))}
      </main>
    </div>
  );
};

export default Crew;
