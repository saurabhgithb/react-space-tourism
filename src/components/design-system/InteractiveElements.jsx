const InteractiveElements = () => {
  return (
    <section className="flow" id="interactive-elements">
      <h2 className="numbered-title">
        <span>03</span> Interactive elements
      </h2>
      <div>
        <PrimaryNavigation />
      </div>

      <div className="flex" style={{ justifyContent: "space-around " }}>
        <div style={{ marginTop: "5rem" }}>
          <a
            href="#"
            className="large-button uppercase ff-serif fs-600 text-dark bg-white"
          >
            Explore
          </a>
        </div>

        <div
          className="flow flex"
          style={{
            marginBottom: "50vh",
            "--flow-space": "4rem",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TabList />
          <DotIndicators />
          <NumberedIndicators />
        </div>
      </div>
    </section>
  );
};

const PrimaryNavigation = () => (
  <nav>
    <ul className="primary-navigation underline-indicators flex">
      <li className="active">
        <a className="ff-sans-cond uppercase text-white letter-spacing-2" href="#">
          <span>01</span>Active
        </a>
      </li>
      <li>
        <a className="ff-sans-cond uppercase text-white letter-spacing-2" href="#">
          <span>02</span>Hovered
        </a>
      </li>
      <li>
        <a className="ff-sans-cond uppercase text-white letter-spacing-2" href="#">
          <span>03</span>Idle
        </a>
      </li>
    </ul>
  </nav>
);

const TabList = () => (
  <div className="tab-list underline-indicators flex">
    <button
      aria-selected="true"
      className="uppercase ff-sans-cond text-light bg-dark letter-spacing-2"
    >
      Moon
    </button>
    <button
      aria-selected="false"
      className="uppercase ff-sans-cond text-light bg-dark letter-spacing-2"
    >
      Mars
    </button>
    <button
      aria-selected="false"
      className="uppercase ff-sans-cond text-light bg-dark letter-spacing-2"
    >
      Europa
    </button>
  </div>
);

const DotIndicators = () => (
  <div className="dot-indicators flex">
    <button aria-selected="true">
      <span className="sr-only">Slide title</span>
    </button>
    <button aria-selected="false">
      <span className="sr-only">Slide title</span>
    </button>
    <button aria-selected="false">
      <span className="sr-only">Slide title</span>
    </button>
  </div>
);

const NumberedIndicators = () => (
  <div className="numbered-indicators flex" style={{ flexDirection: "column" }}>
    <button aria-selected="true" className="text-white bg-dark">
      1
    </button>
    <button aria-selected="false" className="text-white bg-dark">
      2
    </button>
    <button aria-selected="false" className="text-white bg-dark">
      3
    </button>
  </div>
);

export default InteractiveElements;
