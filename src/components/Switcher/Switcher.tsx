import { Dispatch, SetStateAction } from "react";
import "./Switcher.scss";

interface SwitcherProps {
  snowEnabled: boolean;
  lightsEnabled: boolean;
  moonEnabled: boolean;
  setSnowEnabled: Dispatch<SetStateAction<boolean>>;
  setLightsEnabled: Dispatch<SetStateAction<boolean>>;
  setMoonEnabled: Dispatch<SetStateAction<boolean>>;
}

function Switcher({
  snowEnabled,
  lightsEnabled,
  moonEnabled,
  setSnowEnabled,
  setLightsEnabled,
  setMoonEnabled,
}: SwitcherProps) {
  const toggleSnowEffect = () => setSnowEnabled(!snowEnabled);
  const toggleLightsEffect = () => setLightsEnabled(!lightsEnabled);
  const toggleMoonEffect = () => setMoonEnabled(!moonEnabled);

  return (
    <div className="switcher">
      {/* Snow controller */}
      <div className="snow-control">
        <button
          type="button"
          className={`switch-button on ${snowEnabled ? "active" : ""}`}
          onClick={toggleSnowEffect}
        ></button>
        <button
          type="button"
          className={`switch-button off ${snowEnabled ? "" : "active"}`}
          onClick={toggleSnowEffect}
        ></button>
      </div>

      {/* Lights controller */}
      <div className="lights-control">
        <button
          type="button"
          className={`switch-button on ${lightsEnabled ? "active" : ""}`}
          // onClick={toggleLightsEffect}
        ></button>
        <button
          type="button"
          className={`switch-button off ${lightsEnabled ? "" : "active"}`}
          onClick={toggleLightsEffect}
        ></button>
      </div>

      {/* Moon controller */}
      <div className="moon-control">
        <button
          type="button"
          className={`switch-button on ${moonEnabled ? "active" : ""}`}
          onClick={toggleMoonEffect}
        ></button>
        <button
          type="button"
          className={`switch-button off ${moonEnabled ? "" : "active"}`}
          onClick={toggleMoonEffect}
        ></button>
      </div>
    </div>
  );
}

export default Switcher;
