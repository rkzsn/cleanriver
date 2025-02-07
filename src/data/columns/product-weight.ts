import { Column } from "react-table";
import { River } from "type";
import { attribute } from "../criteria";

type WeightDataProps = {
  criteria: string;
  attribute: attribute;
  value: number;
};

type WeightDataSawProps = {
  criteria: string;
  attribute: attribute;
  value: number;
};

type RankRiverDataProps = Pick<River, "no" | "name"> & {
  rank: number;
  total: number;
  valueV: number;
};

type RankRiverDataSawProps = Pick<River, "no" | "name"> & {
  rank: number;
  total: number;
};

export type RankRiverDataTopsisProps = Pick<River, "no" | "name"> & {
  rank: number;
  V: number;
};

export type idealBestProps = {
  value: number;
};

export type idealWorstProps = {
  value: number;
};

const calculateWeightColumns: ReadonlyArray<Column<WeightDataProps>> = [
  {
    Header: "Criteria",
    accessor: "criteria",
    width: "33%",
  },
  {
    Header: "Attribute",
    accessor: "attribute",
    width: "33%",
  },
  {
    Header: "Weight",
    accessor: "value",
    width: "33%",
  },
];

const calculateWeightSAWColumns: ReadonlyArray<Column<WeightDataSawProps>> = [
  {
    Header: "Criteria",
    accessor: "criteria",
    width: "33%",
  },
  {
    Header: "Weight",
    accessor: "value",
    width: "33%",
  },
];

const normalizeDataColumns: ReadonlyArray<Column<River & { valueS: number }>> =
  [
    {
      Header: "No",
      accessor: "no",
      width: "10%",
    },
    {
      Header: "River Name",
      accessor: "name",
      width: "20%",
    },
    {
      Header: "Temperature",
      accessor: "temperature",
      width: "17.5%",
    },
    {
      Header: "Turbidity",
      accessor: "turbidity",
      width: "17.5%",
    },
    {
      Header: "Solid",
      accessor: "solid",
      width: "17.5%",
    },
    {
      Header: "Distance",
      accessor: "distance",
      width: "17.5%",
    },
    {
      Header: "Terrain",
      accessor: "terrain",
      width: "17.5%",
    },
    {
      Header: "Debit",
      accessor: "debit",
      width: "17.5%",
    },
    {
      Header: "S",
      accessor: "valueS",
      width: "17.5%",
    },
  ];

  const normalizeDataSawColumns: ReadonlyArray<Column<River & { valueFinal: number }>> =
  [
    {
      Header: "No",
      accessor: "no",
      width: "10%",
    },
    {
      Header: "River Name",
      accessor: "name",
      width: "20%",
    },
    {
      Header: "Temperature",
      accessor: "temperature",
      width: "17.5%",
    },
    {
      Header: "Turbidity",
      accessor: "turbidity",
      width: "17.5%",
    },
    {
      Header: "Solid",
      accessor: "solid",
      width: "17.5%",
    },
    {
      Header: "Distance",
      accessor: "distance",
      width: "17.5%",
    },
    {
      Header: "Terrain",
      accessor: "terrain",
      width: "17.5%",
    },
    {
      Header: "Debit",
      accessor: "debit",
      width: "17.5%",
    },
    {
      Header: "Total",
      accessor: "valueFinal",
      width: "17.5%",
    },
  ];

  export const normalizeDataTopsisColumns: ReadonlyArray<Column> =
  [
    {
      Header: "No",
      accessor: "no",
      width: "10%",
    },
    {
      Header: "River Name",
      accessor: "name",
      width: "20%",
    },
    {
      Header: "Temperature",
      accessor: "temperature",
      width: "17.5%",
    },
    {
      Header: "Turbidity",
      accessor: "turbidity",
      width: "17.5%",
    },
    {
      Header: "Solid",
      accessor: "solid",
      width: "17.5%",
    },
    {
      Header: "Distance",
      accessor: "distance",
      width: "17.5%",
    },
    {
      Header: "Terrain",
      accessor: "terrain",
      width: "17.5%",
    },
    {
      Header: "Debit",
      accessor: "debit",
      width: "17.5%",
    },
  ];

export const idealBestColumns: ReadonlyArray<Column> = [
  {
    Header: "Criteria",
    accessor: "criteria",
    width: "80%"
  },
  {
    Header: "Value",
    accessor: "value",
    width: "20%"
  }
]

export const idealWorstColumns: ReadonlyArray<Column> = [
  {
    Header: "Criteria",
    accessor: "criteria",
    width: "80%"
  },
  {
    Header: "Value",
    accessor: "value",
    width: "20%"
  }
]

const rankingRiverColumns: ReadonlyArray<Column<RankRiverDataProps>> = [
  {
    Header: "No",
    accessor: "no",
    width: "10%",
  },
  {
    Header: "River Name",
    accessor: "name",
    width: "30%",
  },
  {
    Header: "Total",
    accessor: "total",
    width: "30%",
  },
  {
    Header: "V",
    accessor: "valueV",
    width: "30%",
  },
  {
    Header: "Rank",
    accessor: "rank",
    width: "30%",
  },
];

const rankingRiverSawColumns: ReadonlyArray<Column<RankRiverDataSawProps>> = [
  {
    Header: "No",
    accessor: "no",
    width: "10%",
  },
  {
    Header: "River Name",
    accessor: "name",
    width: "30%",
  },
  {
    Header: "Total",
    accessor: "total",
    width: "30%",
  },
  {
    Header: "Rank",
    accessor: "rank",
    width: "30%",
  },
];

export const rankingRiverTopsisColumns: ReadonlyArray<Column<RankRiverDataSawProps>> = [
  {
    Header: "No",
    accessor: "no",
    width: "10%",
  },
  {
    Header: "River Name",
    accessor: "name",
    width: "30%",
  },
  {
    Header: "V",
    accessor: "total",
    width: "30%",
  },
  {
    Header: "Rank",
    accessor: "rank",
    width: "30%",
  },
];

export { calculateWeightColumns, calculateWeightSAWColumns, normalizeDataColumns, normalizeDataSawColumns, rankingRiverColumns, rankingRiverSawColumns };
export type { WeightDataProps, RankRiverDataProps, RankRiverDataSawProps };
