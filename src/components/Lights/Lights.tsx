import { useEffect, useState } from "react";
import "./Lights.scss";

interface LightsProps {
  lightsEnabled: boolean;
}

function Lights({ lightsEnabled }: LightsProps) {
  const [background, setBackground] = useState<string>(
    "src/assets/lights-default.svg"
  );

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;

    if (lightsEnabled) {
      const backgrounds = [
        "src/assets/lights-mode-1.svg",
        "src/assets/lights-mode-2.svg",
      ];
      let index = 0;

      // Set the initial background to the first alternate
      setBackground(backgrounds[index]);

      interval = setInterval(() => {
        index = (index + 1) % backgrounds.length;
        setBackground(backgrounds[index]);
      }, 1000);
    } else {
      // Reset to the default background when lightsEnabled is false
      setBackground("src/assets/lights-default.svg");
    }

    return () => {
      if (interval) clearInterval(interval); // Clean up interval
    };
  }, [lightsEnabled]);

  return (
    <div
      className="lights"
      style={{ backgroundImage: `url(${background})` }}
    ></div>
  );
}

export default Lights;
