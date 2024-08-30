import { createTheme } from "@mui/material/styles";
import dark_logo from "../images/logo2.png";
import {
  blue,
  // amber,
  orange,
  grey,
  // blueGrey,
  deepOrange,
  red,
} from "@mui/material/colors";

let DarkTheme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      // main: "#000",
      main: blue[500],
    },

    secondary: {
      main: "#FFFFFF",
    },

    tertiary: {
      main: "#FFFFFF"
    },

    background: {
      // default: "#2E2E38",
      ///////////////// change this
      default: blue[900],
    },

    warn: {
      main: orange[900]
    },

    err: {
      main: red[900]
    },

    vHigh: {
      main: "#ff0038"
    },

    high: {
      main: "#ffa500"
    },

    mod: {
      main: "#FFFF33"
    },

    low: {
      main: "#008000"
    },

    cancel: {
      // main: "#696969"
      main: "#585858"
    },

    logo: dark_logo,

    backgroundPaperGradient:
      "linear-gradient(to bottom right, #000000,#09249c)",

    mainCardColor: "#010c33",

    boxShadow: "0 1px 15px 1px white",

    // containerComponent: "#1a1a24",
    containerComponent: "#010d40",

    // containerComponentShadow: "0 1px 6px 1px #ffeb3b",

    containerComponentShadow: 13,
  },

  typography: {
    fontFamily: "Arial",

    fontSize: 12,

    color: "#FFFFFF",

    whiteSpace: "pre-wrap",
  },
});

DarkTheme = createTheme(DarkTheme, {
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        colorPrimary: {
          color: blue[500],
        },

        colorAction: {
          color: deepOrange["A700"],
        },
      },
    },

    MuiDataGrid: {
      styleOverrides: {
        row: {
          "&:nth-of-type(odd)": {
            backgroundColor: "#01163b",
          },
          "&:nth-of-type(even)": {
            backgroundColor: "#010f3d",
          },
        },
        columnHeader: {
          backgroundColor: "#000000",
          color: "white",
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        head: {
          backgroundColor: "#01163b",
          color: "white",
        },
      },
    },

    MuiDialog: {
      styleOverrides: {
        paperFullScreen: {
          //2E2E38
          background: "#FFFFFF",
        },
        paperWidthLg: {
          minWidth: "600px"
        },
      },
    },

    MuiDialogTitle: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          color: "#fffffff",
        },
      },
    },

    MuiContainer: {
      styleOverrides: {
        root: {
          // backgroundColor: "#2E2E38",
          backgroundColor: blue[750],
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#010c47",
        },
      },
    },

    MuiAlert: {
      styleOverrides: {
        filledSuccess: {
          backgroundColor: "#FFE600",

          color: "black",
        },

        filledInfo: {
          backgroundColor: "green",
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Arial",
          color: "#ffffff",
          whiteSpace: "pre-wrap",
        },

        h5: {
          color: "#FFFFFF",

          whiteSpace: "pre-wrap",
        },

        h6: {
          color: "#FFFFFFF",
        },

        body1: {
          color: "#FFFFFF",

          whiteSpace: "pre-wrap",
        },

        body2: {
          color: blue[500],

          "&:hover": {
            color: "#ffffff",
          },
        },

        body3: {
          color: "#ffffff",
        },
      },
    },

    // MuiListItem: {
    //   styleOverrides: {
    //     root: {
    //       "&:hover": {
    //         backgroundColor: "red",
    //       },
    //     },
    //   },
    // },

    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: blue[500],
          selected: {
            backgroundColor: "#2E2E38",
          },
        },
      },
    },

    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: "#010f42",
          color: "#000",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          //used

          backgroundColor: "#3dc0fc",

          color: "#000000",

          "&:hover": {
            backgroundColor: blue[500],
            color: "#FFFFFF",
          },
        },
        textInherit: {
          size: "large",
          color: "white",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
          fontSize: 20,
          boxShadow: "0 1px 3px 1px white",
          "&:hover": {
            color: blue[500],
            boxShadow: "0 1px 15px 1px blue",
          },
        },
      },
    },
  },
});

export default DarkTheme;
