import { useState } from "react";

import "./App.css";
import Snowfall from "react-snowfall";
import Moon from "./components/Moon/Moon";
import Stars from "./components/Stars/Stars";
import Village from "./components/Village/Village";
import Switcher from "./components/Switcher/Switcher";
import Lights from "./components/Lights/Lights";
import Clouds from "./components/Clouds/Clouds";
import Blur from "./components/Blur/Blur";
import Modal from "./components/Modal/Modal";

function App() {
  const [snowEnabled, setSnowEnabled] = useState(false);
  const [lightsEnabled, setLightsEnabled] = useState(false);
  const [moonEnabled, setMoonEnabled] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);
  const [houseId, setHouseId] = useState<number | null>(null);

  function handleOnHouseClick(id: number) {
    setHouseId(id);
    setIsModalActive(true);
  }

  function handleCloseModal() {
    setHouseId(null);
    setIsModalActive(false);
  }

  return (
    <>
      <div className="canvas">
        {/* 4th plan */}
        <div className="mount-1"></div>
        <div className="mount-2"></div>
        <Clouds />

        {/* 3rd plan */}
        <Village onHouseClick={handleOnHouseClick} />
        {/* 2nd plan */}
        <div className="snow-1"></div>
        <div className="elipse"></div>
        <div className="rock-3"></div>
        <div className="rock-4"></div>
        <div className="tree-8"></div>
        <div className="tree-9"></div>
        {/* 1st plan */}
        <div className="rock-1"></div>
        <div className="rock-2"></div>
        <div className="tree-1"></div>
        <div className="tree-2"></div>
        <div className="tree-3"></div>
        <div className="tree-4"></div>
        <div className="tree-5"></div>
        <div className="tree-6"></div>
        <div className="tree-7"></div>
        <Stars />
        <Moon moonEnabled={moonEnabled} />
        <Lights lightsEnabled={lightsEnabled} />
        <Blur />

        <Switcher
          snowEnabled={snowEnabled}
          lightsEnabled={lightsEnabled}
          moonEnabled={moonEnabled}
          setSnowEnabled={setSnowEnabled}
          setLightsEnabled={setLightsEnabled}
          setMoonEnabled={setMoonEnabled}
        />

        {snowEnabled && <Snowfall />}
      </div>

      {isModalActive && (
        <Modal onCloseModal={handleCloseModal}>House id is {houseId}</Modal>
      )}
    </>
  );
}

export default App;
