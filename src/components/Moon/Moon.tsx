import "./Moon.scss";

interface MoonProps {
  moonEnabled: boolean;
}

function Moon({ moonEnabled }: MoonProps) {
  return (
    <div className="moon-wrapper">
      <div className="moon"></div>
      <div className={`full-moon ${moonEnabled ? "show" : ""}`}></div>
      <div className={`moon-blur ${moonEnabled ? "" : "show"}`}></div>
    </div>
  );
}

export default Moon;
