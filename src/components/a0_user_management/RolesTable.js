/*  
  Component Name: RolesTable
  Component Description: This returns the table in manage roles page
   Author: Sree Charan
  Date of creation: 
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
import DeleteRoleButton from "./DeleteRoleButton";
import AppNotification from "../common/AppNotification";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";

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

// This will return edit button in roles Table

function EditRoleButton() {
  return (
    <>
      <Link to="/user_management/edit_role" style={{ textDecoration: "none" }}>
        <Tooltip title="Edit" arrow>
          <IconButton>
            <ModeEditOutlinedIcon color="success" />
          </IconButton>
        </Tooltip>
      </Link>
    </>
  );
}

const columns = [
  {
    field: "roleName",
    headerName: "Role Name",
    flex: 1.5,
  },
  {
    field: "roleDescription",
    headerName: "Role Description",
    flex: 1.5,
  },
  {
    field: "actions",
    headerName: "Actions",
    type: "actions",
    flex: 1.2,
    renderCell: (params) => (
      <>
        <EditRoleButton />
        <Typography fontWeight="500" fontSize="30px">
          {" "}
          /{" "}
        </Typography>
        <DeleteRoleButton />
      </>
    ),
  },
];

const rows = [
  {
    roleName: "Analyst",
    roleDescription: "Role description of analyst",
  },
  {
    roleName: "Senior Consultant",
    roleDescription: "Role description of senior consultant",
  },
  {
    roleName: "ECL1",
    roleDescription: "Role For ECL Access",
  },
  {
    roleName: "ECL2",
    roleDescription: "Role For ECL Access",
  },
  {
    roleName: "ECL3",
    roleDescription: "Role For ECL Access",
  },
  {
    roleName: "ECL4",
    roleDescription: "Role For ECL Access",
  },
  {
    roleName: "ECL5",
    roleDescription: "Role For ECL Access",
  },
  {
    roleName: "ECL6",
    roleDescription: "Role For ECL Access",
  },
  {
    roleName: "ECL7",
    roleDescription: "Role For ECL Access",
  },
  {
    roleName: "ECL8",
    roleDescription: "Role For ECL Access",
  },
  {
    roleName: "ECL9",
    roleDescription: "Role For ECL Access",
  },
  {
    roleName: "ECL10",
    roleDescription: "Role For ECL Access",
  },
];

export default function RolesTable() {
  return (
    <>
      <Box
        sx={{
          height: 474,
          width: "100%",
        }}
      >
        <DataGrid
          stickyHeader
          rows={rows}
          columns={columns}
          pageSize={7}
          rowsPerPageOptions={[7]}
          getRowId={(row) => row.roleName}
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
