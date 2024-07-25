/*  
  Component Name: AppDataGrid
  Component Description: This component returns a Data Grid based on the props
  Author: Karthikeyan, Keerthivashan, Ashwin
  Date of creation: 28/4/2022
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
import Box from "@mui/material/Box";

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

export default function AppDataGrid({ columns, rows }) {
  return (
    <>
      <Box
        sx={{
          height: 630,
          width: "100%",
        }}
      >
        <DataGrid
          stickyHeader
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[7]}
          getRowId={(row) => row.data}
          hideFooterSelectedRowCount
          //custum pagenation
          components={{
            Pagination: CustomPagination,
          }}
        />
      </Box>
    </>
  );
}
