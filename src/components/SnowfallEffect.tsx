"use client";

import { useEffect, useState } from "react";
import Snowfall from "react-snowfall";

function isSnowSeason(timeZone = "America/New_York") {
  const month = Number(
    new Intl.DateTimeFormat("en-US", { month: "numeric", timeZone }).format(
      new Date(),
    ),
  );

  return month === 12 || month === 1;
}

export default function SnowfallEffect() {
  const [showSnow, setShowSnow] = useState(false);

  useEffect(() => {
    setShowSnow(isSnowSeason());
  }, []);

  if (!showSnow) {
    return null;
  }

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
