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
import DeleteUserButton from "./DeleteUserButton";
import AppNotification from "../common/AppNotification";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import SwitchAccountTwoToneIcon from "@mui/icons-material/SwitchAccountTwoTone";
import IconButton from "@mui/material/IconButton";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import Tooltip from "@mui/material/Tooltip";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Navigate,
  Link,
} from "react-router-dom";

// This for custom pagenation
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


function EditUserButton({ params }) {
  return (
    <>
      <Link to="/user_management/edit_user">
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
    field: "id",
    headerName: "ID",
    flex: 0.25,
  },

  {
    field: "userName",
    headerName: "Username",
    flex: 1.5,
  },

  {
    field: "firstName",
    headerName: "First name",
    type: "string",
    flex: 2,
  },
  {
    field: "lastName",
    headerName: "Last name",
    flex: 1.5,
  },
  {
    field: "email",
    headerName: "E-Mail Address",
    type: "string",
    flex: 2,
  },
  {
    field: "is_active",
    headerName: "Is Active",
    type: "string",
    flex: 1,
  },
  {
    field: "fullname",
    headerName: "Full Name",
    type: "string",
    flex: 1.5,
  },

  {
    field: "actions",
    headerName: "Actions",
    type: "actions",
    flex: 2,
    renderCell: (params) => (
      <>
        <EditUserButton params={params} />
        <Typography fontWeight="500" fontSize="30px">
          {" "}
          /{" "}
        </Typography>
        <DeleteUserButton />
      </>
    ),
  },
];

const rows = [
  {
    id: 1,
    fullname: "Snow",
    is_active: "Yes",
    userName: "snow",
    firstName: "Snow",
    lastName: "white",
    email: "snow@gmail.com",
  },
  {
    id: 2,
    fullname: "Snow",
    is_active: "Yes",
    userName: "lannister",
    firstName: "Lannister",
    lastName: "Brown",
    email: "lannister@gmail.com",
  },
  {
    id: 3,
    fullname: "Snow",
    is_active: "Yes",
    userName: "Warne",
    firstName: "Shane",
    lastName: "Warne",
    email: "shane@gmail.com",
  },

  {
    id: 4,
    fullname: "Snow",
    is_active: "Yes",
    userName: "Smith",
    firstName: "Steve",
    lastName: "Smith",
    email: "smith@gmail.com",
  },
  {
    id: 5,
    fullname: "Snow",
    is_active: "Yes",
    userName: "Roy",
    firstName: "Jason",
    lastName: "Roy",
    email: "roy@gmail.com",
  },
  {
    id: 6,
    fullname: "Snow",
    is_active: "Yes",
    userName: "Warner",
    firstName: "David",
    lastName: " Warner",
    email: "david@gmail.com",
  },
  {
    id: 7,
    fullname: "Snow",
    is_active: "Yes",
    userName: "Root",
    firstName: "Joe Root",
    lastName: "Root",
    email: "root@gmail.com",
  },
  {
    id: 8,
    fullname: "Snow",
    is_active: "Yes",
    userName: "Conway",
    firstName: "Devon",
    lastName: "Conway",
    email: "conway@gmail.com",
  },
  {
    id: 9,
    fullname: "Snow",
    is_active: "Yes",
    userName: "Archer",
    firstName: "Jofra",
    lastName: "Archer",
    email: "archer@gmail.com",
  },
  {
    id: 10,
    fullname: "Snow",
    is_active: "Yes",
    userName: "Flemmings",
    firstName: "Steve",
    lastName: "Archer",
    email: "steve@gmail.com",
  },
  {
    id: 11,
    fullname: "Snow",
    is_active: "Yes",
    userName: "Anderson",
    firstName: "Courey",
    lastName: "Archer",
    email: "anderson@gmail.com",
  },
  {
    id: 12,
    fullname: "Snow",
    is_active: "Yes",
    userName: "Williams",
    firstName: "Kane",
    lastName: "Williamson",
    email: "kane@gmail.com",
  },
];

export default function UserTable() {
  const theme = useTheme();
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
          getRowId={(row) => row.id}
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
