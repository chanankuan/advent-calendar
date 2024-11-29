import "./House.scss";

interface HouseProps {
  houseId: number;
  schema: [number, number]; // [rows, columns]
  hovered: number | null;
  onMouseEnter: (n: number) => void;
  onMouseLeave: () => void;
  onHouseClick: (n: number) => void;
  hasChimney?: boolean;
}

function House({
  houseId,
  schema,
  hovered,
  onMouseEnter,
  onMouseLeave,
  onHouseClick,
  hasChimney = false,
}: HouseProps) {
  const [rows, columns] = schema;

  const handleOnClick = (n: number) => onHouseClick(n);

  return (
    <div
      className={`house house-${houseId} ${
        hovered === houseId ? "hovered" : ""
      }`}
    >
      <div className="roof-wrapper">
        <div className={`roof roof-${houseId}`}></div>
        {hasChimney && <div className="chimney"></div>}
      </div>
      <div className="facade">
        {/* Rows */}
        {Array.from({ length: rows }).map((_, i) => {
          return (
            <div
              key={`row-${i}`}
              className={`row ${i === 0 ? "relative" : ""}`}
            >
              {i === 0 && (
                <div className="window-round">
                  <span className="number">{houseId}</span>
                </div>
              )}
              {/* Columns */}
              {Array.from({ length: columns }).map((_, j) => {
                // Logic to place the door in the center of the last row
                const isDoorRow = i === rows - 1;
                const isDoor =
                  isDoorRow &&
                  (columns % 2 === 0
                    ? j === Math.floor(columns / 2) - 1 // Center-left for even columns
                    : j === Math.floor(columns / 2)); // Center for odd columns

                // Render the door or window
                return isDoor ? (
                  <div
                    key={`door-wrapper-${j}`}
                    className="door-wrapper"
                    onMouseEnter={() => onMouseEnter(houseId)}
                    onMouseLeave={onMouseLeave}
                    onClick={() => handleOnClick(houseId)}
                  >
                    <div className="door"></div>
                  </div>
                ) : (
                  // Render window if not in the last row or if not the door position
                  !(isDoorRow && j === Math.floor(columns / 2)) && (
                    <div key={`window-${j}`} className="window"></div>
                  )
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default House;
