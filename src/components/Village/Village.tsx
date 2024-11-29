import { useState } from "react";
import "./Village.scss";
import House from "./House/House";
import Dune2 from "./Dune/Dune2";
import Dune3 from "./Dune/Dune3";

interface VillageProps {
  onHouseClick: (id: number) => void;
}

function Village({ onHouseClick }: VillageProps) {
  const [hovered, setHovered] = useState<number | null>(null);

  const handleMouseEnter = (houseId: number) => setHovered(houseId);
  const handleMouseLeave = () => setHovered(null);

  return (
    <div className="village-block">
      {/* House 24 */}
      <House
        houseId={24}
        schema={[3, 1]}
        hovered={hovered}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onHouseClick={onHouseClick}
      />

      {/* House 18 */}
      <House
        houseId={18}
        schema={[3, 2]}
        hovered={hovered}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onHouseClick={onHouseClick}
        hasChimney={true}
      />

      {/* House 9 */}
      <House
        houseId={9}
        schema={[2, 2]}
        hovered={hovered}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onHouseClick={onHouseClick}
      />

      {/* House 20 */}
      <House
        houseId={20}
        schema={[1, 1]}
        hovered={hovered}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onHouseClick={onHouseClick}
      />

      {/* House 3 */}
      <House
        houseId={3}
        schema={[1, 1]}
        hovered={hovered}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onHouseClick={onHouseClick}
      />

      {/* House 7 */}
      <House
        houseId={7}
        schema={[4, 3]}
        hovered={hovered}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onHouseClick={onHouseClick}
        hasChimney={true}
      />

      {/* House 8 */}
      <House
        houseId={8}
        schema={[2, 2]}
        hovered={hovered}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onHouseClick={onHouseClick}
      />

      {/* House 14 */}
      <House
        houseId={14}
        schema={[2, 3]}
        hovered={hovered}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onHouseClick={onHouseClick}
        hasChimney={true}
      />

      {/* House 4 */}
      <House
        houseId={4}
        schema={[2, 3]}
        hovered={hovered}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onHouseClick={onHouseClick}
        hasChimney={true}
      />

      {/* House 19 */}
      <House
        houseId={19}
        schema={[2, 3]}
        hovered={hovered}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onHouseClick={onHouseClick}
      />

      {/* House 16 */}
      <House
        houseId={16}
        schema={[2, 1]}
        hovered={hovered}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onHouseClick={onHouseClick}
      />

      <Dune2 />

      {/* House 5 */}
      <House
        houseId={5}
        schema={[1, 3]}
        hovered={hovered}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onHouseClick={onHouseClick}
        hasChimney={true}
      />

      {/* House 11 */}
      <House
        houseId={11}
        schema={[3, 3]}
        hovered={hovered}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onHouseClick={onHouseClick}
      />

      {/* House 23 */}
      <House
        houseId={23}
        schema={[3, 3]}
        hovered={hovered}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onHouseClick={onHouseClick}
      />

      {/* House 21 */}
      <House
        houseId={21}
        schema={[2, 2]}
        hovered={hovered}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onHouseClick={onHouseClick}
      />

      {/* House 2 */}
      <House
        houseId={2}
        schema={[1, 1]}
        hovered={hovered}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onHouseClick={onHouseClick}
      />

      {/* House 6 */}
      <House
        houseId={6}
        schema={[2, 3]}
        hovered={hovered}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onHouseClick={onHouseClick}
        hasChimney={true}
      />

      {/* House 17 */}
      <House
        houseId={17}
        schema={[2, 2]}
        hovered={hovered}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onHouseClick={onHouseClick}
      />

      {/* House 13 */}
      <House
        houseId={13}
        schema={[2, 3]}
        hovered={hovered}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onHouseClick={onHouseClick}
      />

      {/* House 10 */}
      <House
        houseId={10}
        schema={[4, 3]}
        hovered={hovered}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onHouseClick={onHouseClick}
      />

      <Dune3 />

      {/* House 22 */}
      <House
        houseId={22}
        schema={[3, 2]}
        hovered={hovered}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onHouseClick={onHouseClick}
        hasChimney={true}
      />

      {/* House 15 */}
      <House
        houseId={15}
        schema={[2, 3]}
        hovered={hovered}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onHouseClick={onHouseClick}
      />

      {/* House 1 */}
      <House
        houseId={1}
        schema={[2, 2]}
        hovered={hovered}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onHouseClick={onHouseClick}
      />

      {/* House 12 */}
      <House
        houseId={12}
        schema={[2, 2]}
        hovered={hovered}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onHouseClick={onHouseClick}
        hasChimney={true}
      />
    </div>
  );
}

export default Village;
