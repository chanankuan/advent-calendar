import { useEffect, useState } from "react";
import "./Lights.scss";

import lightsDefault from "../../assets/lights-default.svg";
import lightsMode1 from "../../assets/lights-mode-1.svg";
import lightsMode2 from "../../assets/lights-mode-2.svg";

interface LightsProps {
  lightsEnabled: boolean;
}

function Lights({ lightsEnabled }: LightsProps) {
  const [background, setBackground] = useState<string>(lightsDefault);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;

    if (lightsEnabled) {
      const backgrounds = [lightsMode1, lightsMode2];
      let index = 0;

      // Set the initial background to the first alternate
      setBackground(backgrounds[index]);

      interval = setInterval(() => {
        index = (index + 1) % backgrounds.length;
        setBackground(backgrounds[index]);
      }, 1000);
    } else {
      // Reset to the default background when lightsEnabled is false
      setBackground(lightsDefault);
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
