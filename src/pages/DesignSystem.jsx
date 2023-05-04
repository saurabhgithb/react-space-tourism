import React from "react";
import Colors from "../components/design-system/Colors";
import Typography from "../components/design-system/Typography";
import InteractiveElements from "../components/design-system/InteractiveElements";

const DesignSystem = () => {
  return (
    <div className="container">
      <h1>Design System</h1>
      <Colors />
      <Typography />
      <InteractiveElements />
    </div>
  );
};

export default DesignSystem;
