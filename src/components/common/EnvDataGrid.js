
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import Tooltip from "@mui/material/Tooltip";
import { getData, putData, postData, deleteData } from "../../components/coreApiService/services";
import {
    GridRowModes,
    DataGrid,
    GridToolbarContainer,
    GridActionsCellItem,
    gridPageCountSelector,
    gridPageSelector,
    useGridApiContext,
    useGridSelector,
} from '@mui/x-data-grid';
import {
    randomCreatedDate,
    randomTraderName,
    randomUpdatedDate,
    randomId,
} from '@mui/x-data-grid-generator';
import { Pagination } from '@mui/material';
import { toast } from 'react-toastify';



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

const initialRows = [
    // {
    //   id: 1,
    //   key_assets: "HeadQuarter",
    //   type_of_asset: "HeadQuarter",
    //   assets: "HeadQuarter",
    //   asset_type: "HeadQuarter",
    //   closest_city: "Brazil",
    //   address: "",
    // },
    // {
    //   id: 2,
    //   key_assets: "#1 Physical asset",
    //   type_of_asset: "Physical Asset",
    //   assets: "#1 Physical asset",
    //   asset_type: "Physical Asset",
    //   closest_city: "Szitzerland",
    //   address: "",
    // },
    // {
    //   id: 3,
    //   key_assets: "#2 Physical asset",
    //   type_of_asset: "Physical Asset",
    //   assets: "#2 Physical asset",
    //   asset_type: "Physical Asset",
    //   closest_city: "Szitzerland",
    //   address: "",
    // },
    // {
    //   id: 4,
    //   key_assets: "#3 Physical asset",
    //   type_of_asset: "Physical Asset",
    //   assets: "#3 Physical asset",
    //   asset_type: "Physical Asset",
    //   closest_city: "Szitzerland",
    //   address: "",
    // },
    // {
    //   id: 5,
    //   key_assets: "#4 Physical asset",
    //   type_of_asset: "Physical Asset",
    //   assets: "#4 Physical asset",
    //   asset_type: "Physical Asset",
    //   closest_city: "Szitzerland",
    //   address: "",
    // },
    // {
    //   id: 6,
    //   key_assets: "#5 Physical asset",
    //   type_of_asset: "Physical Asset",
    //   assets: "#5 Physical asset",
    //   asset_type: "Physical Asset",
    //   closest_city: "Szitzerland",
    //   address: "",
    // },
];

// function EditToolbar(props) {
//   const { setRows, setRowModesModel, rowData } = props;

//   console.log(`RowData:: ${JSON.stringify(rowData)}`)

//   const handleClick = () => {
//     // alert("109")
//     const id = randomId()

//     console.log(test)
//     setRows((oldRows) =>
//       [...oldRows, {
//         id,
//         type_of_asset: '',
//         asset_type: '',
//         closest_city: '',
//         address: '',
//         isNew: true
//       }]
//     );
//     setRowModesModel((oldModel) => ({
//       ...oldModel,
//       [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
//     }));
//   };

//   return (
//     <GridToolbarContainer>
//       <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
//         Add record
//       </Button>
//     </GridToolbarContainer>
//   );
// }

// EditToolbar.propTypes = {
//   setRowModesModel: PropTypes.func.isRequired,
//   setRows: PropTypes.func.isRequired,
// };

export default function EnvDataGrid({ gngDynaData, setGngDynaData, crudRowData, setcrudRowData }) {
    const [rows, setRows] = React.useState([]);
    const [rowModesModel, setRowModesModel] = React.useState({});
    const [editedRow, setEditedRow] = React.useState({})


    //   React.useEffect(() => {
    //     let url = `key_assests/${linkedCompanyId}/`

    //     getData(url).then((response) => {
    //       setRows(response.data.data)
    //       console.log(response.data.data);
    //     }).catch((err) => {
    //       console.log(err.message)
    //       // toast.error(err.message)
    //     })
    //   }, [])

    const handleRowEditStart = (params, event) => {
        event.defaultMuiPrevented = true;
    };

    const handleRowEditStop = (params, event) => {
        event.defaultMuiPrevented = true;
    };

    const handleEditClick = (id) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    };

    const handleSaveClick = (id) => () => {

        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });

        let gngInstant = gngDynaData

        // let particularRow = {}


        // for (let element of rows) {
        //   if (element.id === id) {
        //     alert(`in saveClick: {JSON.stringify(element)}`)
        //     particularRow = element
        //   }
        // }

        // let url = `key_assests/${id}/`
        // console.log(JSON.stringify(rows))

        // putData(url, particularRow).then((response) => {
        //   // setRowData(response.data.data[0])
        //   console.log(response.data);
        // }).catch((err) => {
        //   console.log(err.message)
        // })
    };

    const handleCancelClick = (id) => () => {
        setRowModesModel({
            ...rowModesModel,
            [id]: { mode: GridRowModes.View, ignoreModifications: true },
        });

        const editedRow = crudRowData.find((row) => row.id === id);
        if (editedRow.isNew) {
            setcrudRowData(crudRowData.filter((row) => row.id !== id));
        }
    };

    function processRowUpdate(newRow, oldRow) {
        let newId = newRow.id
        console.log(`newRow: ${JSON.stringify(newRow)}`)
        console.log(`oldRow: ${JSON.stringify(oldRow)}`)
        // console.log(`ActualdRows: ${JSON.stringify(crudRowData)}`)

        // let url = `key_assests/${newId}/`
        // console.log(JSON.stringify(rows))

        // putData(url, newRow).then((response) => {
        //     console.log(response.data);
        // }).catch((err) => {
        //     console.log(err.message)
        // })

        let gngInstant = gngDynaData
        setGngDynaData(gngInstant)
        return newRow;
    };

    const columns = [
        {
            field: "id",
            headerName: "ID",
            hide: true,
            flex: 1,
        },
        {
            field: "key_assets",
            field: "assets",
            headerName: "Key Asset for Physical Risk Assesment",
            flex: 1,
            editable: true,
        },
        {
            field: "type_of_asset",
            field: "asset_type",
            headerName: "Type of Asset",
            type: "singleSelect",
            valueOptions: ["Headquarter", "Office", "Intellectual/R&D", "Manfacturing plant", "Processing plant", "Logistics Hub", "Raw materials", "Client facilities", "Data center", "Other"],
            flex: 1,
            editable: true,
        },
        {
            field: "closest_city",
            headerName: "Closest City",
            flex: 1,
            editable: true,

        },
        {
            field: "address",
            headerName: "Address",
            flex: 1,
            editable: true,

        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            cellClassName: 'actions',
            getActions: ({ id }) => {
                const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

                if (isInEditMode) {
                    return [
                        <GridActionsCellItem
                            icon={<SaveIcon />}
                            label="Save"
                            onClick={handleSaveClick(id)}
                        />,
                        <GridActionsCellItem
                            icon={<CancelIcon />}
                            label="Cancel"
                            className="textPrimary"
                            onClick={handleCancelClick(id)}
                            color="inherit"
                        />
                        ,
                    ];
                }

                return [
                    <GridActionsCellItem
                        icon={<EditIcon />}
                        label="Edit"
                        className="textPrimary"
                        onClick={handleEditClick(id)}
                        color="inherit"
                    />,
                    <GridActionsCellItem
                        icon={<DeleteIcon />}
                        label="Delete"
                        // onClick={handleDeleteClick(id)}
                        color="inherit"
                    />,
                ];
            },
        },
    ];

    const GNGcolumns = [
        {
            field: "id",
            headerName: "ID",
            flex: 1,
            hide: true,
            editable: true,
        },
        {
            field: "gng_scopes",
            headerName: "GNG Emittion Trend - Chart Below",
            flex: 3,
            editable: true,
        },
        {
            field: "gng_scopes_chart_field",
            headerName: "Chart Field",
            flex: 3,
            hide: true,
            editable: true,
        },
        {
            field: "t_2",
            headerName: "T - 2",
            flex: 2,
            align: "center",
            headerAlign: "center",
            renderCell: (params) => (params.row.t_2.toLocaleString("en-US")),
            editable: true,
        },
        {
            field: "t_1",
            headerName: "T - 1",
            flex: 2,
            align: "center",
            headerAlign: "center",
            renderCell: (params) => (params.row.t_1.toLocaleString("en-US")),
            editable: true,
        },
        {
            field: "t",
            headerName: "T",
            flex: 2,
            align: "center",
            headerAlign: "center",
            renderCell: (params) => (params.row.t.toLocaleString("en-US")),
            editable: true,
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Edit',
            width: 100,
            cellClassName: 'actions',
            getActions: ({ id }) => {
                const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

                if (isInEditMode) {
                    return [
                        <GridActionsCellItem
                            icon={<SaveIcon />}
                            label="Save"
                            onClick={handleSaveClick(id)}
                        />,
                        <GridActionsCellItem
                            icon={<CancelIcon />}
                            label="Cancel"
                            className="textPrimary"
                            onClick={handleCancelClick(id)}
                            color="inherit"
                        />
                        ,
                    ];
                }

                return [
                    <GridActionsCellItem
                        icon={<EditIcon />}
                        label="Edit"
                        className="textPrimary"
                        onClick={handleEditClick(id)}
                        color="inherit"
                    />,

                ];
            },
        },
    ]


    //   const gngDynaData =setGngDynaData,  [
    //     {
    //       id: 1,
    //       gng_scopes: "Scope 1 (Direct, metric tons (tCO2e))",
    //       gng_scopes_chart_field: "Scope 1",
    //       t_2: 32790779,
    //       t_1: 33349293,
    //       t: 111509756,
    //     },
    //     {
    //       id: 2,
    //       gng_scopes: "Scope 2 (Energy Indirect, metric tons (tCO2e))",
    //       gng_scopes_chart_field: "Scope 2",
    //       t_2: 194059,
    //       t_1: 199817,
    //       t: 135183,
    //     },
    //     {
    //       id: 3,
    //       gng_scopes: "Scope 3 (Other Indirect, metric tons (tCO2e))",
    //       gng_scopes_chart_field: "Scope 3",
    //       t_2: 11195293,
    //       t_1: 10588707,
    //       t: 3491821,
    //     },
    //   ]


    return (
        <Box
            sx={{
                height: 370,
                width: "100%",
                '& .actions': {
                    color: 'text.secondary',
                },
                '& .textPrimary': {
                    color: 'text.primary',
                },
            }}
        >
            <DataGrid
                rows={gngDynaData}
                columns={GNGcolumns}
                editMode="row"
                rowModesModel={rowModesModel}
                onRowEditStart={handleRowEditStart}
                onRowEditStop={handleRowEditStop}
                processRowUpdate={processRowUpdate}
                pageSize={5}
                rowsPerPageOptions={[5]}
                components={{
                    // Toolbar: EditToolbar,
                    Pagination: CustomPagination,
                }}
                componentsProps={{
                    toolbar: { setcrudRowData, setRowModesModel },
                }}
                experimentalFeatures={{ newEditingApi: true }}
            />
        </Box>
    );
}
