"use client";

import Snowfall from "react-snowfall";

export default function SnowfallEffect() {
  return (
    <Snowfall
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        zIndex: 40, // Below the grain overlay (z-50) but above content
      }}
      snowflakeCount={150}
      color="#fff"
      speed={[0.5, 2]}
      wind={[-0.5, 1]}
      radius={[0.5, 2]}
    />
  );
}

