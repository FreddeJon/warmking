import React from "react";
import DataTable from "react-data-table-component";
import { getData } from "../Data/ProductData";

const columns = [
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Price",
    selector: (row) => row.price,
    sortable: true,
  },
  {
    name: "Installation",
    hide: "sm",
    selector: (row) => row.installationCost,
    sortable: true,
  },
  {
    name: "Total",
    selector: (row) => row.totalCost,
    sortable: true,
  },
];

const data = getData();

export const Table = () => {
  return (
    <DataTable
      pagination
      highlightOnHover
      responsive
      pointerOnHover
      columns={columns}
      data={data}
    />
  );
};
