
import * as React from "react";
import { DataGrid,gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector, } from "@mui/x-data-grid";//customising pagenation
import Pagination from "@mui/material/Pagination";
import AppNotification from "../../components/common/AppNotification";
import Box from "@mui/material/Box";

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

  export default function DynamicDataGrid({rows, columns}){

    return(
        <>
      <Box
        sx={{
          height: 370,
          width: "100%",
        }}
      >
        <DataGrid
          stickyHeader
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
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
    )
  }