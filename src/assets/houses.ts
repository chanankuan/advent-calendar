const houses: {
  houseId: number;
  schema: [number, number];
  hasChimney: boolean;
}[] = [
  { houseId: 24, schema: [3, 1], hasChimney: false },
  { houseId: 18, schema: [3, 2], hasChimney: true },
  { houseId: 9, schema: [2, 2], hasChimney: false },
  { houseId: 20, schema: [1, 1], hasChimney: false },
  { houseId: 3, schema: [1, 1], hasChimney: false },
  { houseId: 7, schema: [4, 3], hasChimney: true },
  { houseId: 8, schema: [2, 2], hasChimney: false },
  { houseId: 14, schema: [2, 3], hasChimney: true },
  { houseId: 4, schema: [2, 3], hasChimney: true },
  { houseId: 19, schema: [2, 3], hasChimney: false },
  { houseId: 16, schema: [2, 1], hasChimney: false }, // render <Dune2 /> after
  { houseId: 5, schema: [1, 3], hasChimney: true },
  { houseId: 11, schema: [3, 3], hasChimney: false },
  { houseId: 23, schema: [3, 3], hasChimney: false },
  { houseId: 21, schema: [2, 2], hasChimney: false },
  { houseId: 2, schema: [1, 1], hasChimney: false },
  { houseId: 6, schema: [2, 3], hasChimney: true },
  { houseId: 17, schema: [2, 2], hasChimney: false },
  { houseId: 13, schema: [2, 3], hasChimney: false },
  { houseId: 10, schema: [4, 3], hasChimney: false }, // render <Dune3 /> after
  { houseId: 22, schema: [3, 2], hasChimney: true },
  { houseId: 15, schema: [2, 3], hasChimney: false },
  { houseId: 1, schema: [2, 2], hasChimney: false },
  { houseId: 12, schema: [2, 2], hasChimney: true },
];

export default houses;
