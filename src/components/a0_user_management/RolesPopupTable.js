/*  
  Component Name: RolesPopupTable
  Component Description: This component returns the table in add role and edit role pages 
  Author: Karthikeyan,Keerthivashan
  Date of creation: 6/3/2022
*/

import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
//customising pagenation
import Pagination from "@mui/material/Pagination";
import {
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import AppNotification from "../common/AppNotification";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

function CustomPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <Pagination
      color="warning"
      count={pageCount}
      page={page + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}

const columns = [
  {
    field: "Apps",
    headerName: "Apps",
    flex: 1.5,
  },
  {
    field: "ReadPermission",
    headerName: "ReadPermission",
    type: "actions",
    flex: 1.2,
    renderCell: (params) => (
      <>
        <Switch defaultChecked />
      </>
    ),
  },

  {
    field: "WritePermission",
    headerName: "WritePermission",
    type: "actions",
    flex: 1.2,
    renderCell: (params) => (
      <>
        <Switch />
      </>
    ),
  },
  {
    field: "DeletePermission",
    headerName: "DeletePermission",
    headerClassName: "super-app-theme--header",
    type: "actions",
    flex: 1.2,
    renderCell: (params) => (
      <>
        <Switch />
      </>
    ),
  },
];

const rows = [
  {
    Apps: "Data Management",
    RoleDescription: "Snow",
  },
  {
    Apps: "ECL Run",
    RoleDescription: "Lannister",
  },
  {
    Apps: "ECL Analyzer",
    RoleDescription: "Lannister",
  },
  {
    Apps: "Model Monitoring",
    RoleDescription: "Lannister",
  },
  {
    Apps: "Monitoring Reports",
    RoleDescription: "Lannister",
  },
  {
    Apps: "Dashboard",
    RoleDescription: "Lannister",
  },
];

export default function RolesPopupTable() {
  return (
    <>
      <Box
        sx={{
          height: 475,
          width: "100%",
        }}
      >
        <DataGrid
          stickyHeader
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          getRowId={(row) => row.Apps}
          hideFooterSelectedRowCount
          //custum pagenation
          components={{
            Pagination: CustomPagination,
          }}
        />
      </Box>
      {/* for notification popup */}
      <AppNotification />
    </>
  );
}
