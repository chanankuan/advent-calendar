import { BeatLoader } from "react-spinners";

function Loader({ size = 10 }: { size?: number }) {
  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: 'url("../../assets/advent-bg.jpg")',
      }}
    >
      <BeatLoader
        color="#A2B5FC"
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loader;
