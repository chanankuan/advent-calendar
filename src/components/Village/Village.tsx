import { Fragment } from "react";
import "./Village.scss";
import House from "./House/House";
import Dune2 from "./Dune/Dune2";
import Dune3 from "./Dune/Dune3";
import { INote } from "../../types/types";
import houses from "../../assets/houses";

interface VillageProps {
  notes: INote[] | undefined;
  onHouseClick: (id: number) => void;
}

function Village({ notes, onHouseClick }: VillageProps) {
  return (
    <div className="village-block">
      {houses.map(({ houseId, schema, hasChimney }) => {
        const isOpened = Boolean(
          notes?.find((note) => note.day === houseId)?.opened_at
        );

        return (
          <Fragment key={houseId}>
            <House
              houseId={houseId}
              schema={schema}
              isOpened={isOpened}
              onHouseClick={onHouseClick}
              hasChimney={hasChimney}
            />
            {houseId === 16 && <Dune2 />}
            {houseId === 10 && <Dune3 />}
          </Fragment>
        );
      })}
    </div>
  );
}

export default Village;
