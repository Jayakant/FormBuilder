import { createTheme } from "@mui/material/styles";
import dark_logo from "../images/logo2.png";
import {
  blue,
  grey,
  red,
  orange,

} from "@mui/material/colors";

let LightTheme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: blue[500],
    },

    secondary: {
      main: grey[900],
    },

    tertiary: {
      main: "black"
    },

    background: {
      default:
        // "#66aeff"
        "#FFFFFF",
    },

    warn: {
      main: orange[500]
    },

    err: {
      main: red[500]
    },

    vHigh: {
      main: "#ff0038"
    },

    high: {
      main: "#ffa500"
    },

    mod: {
      main: "#CCCC00"
    },

    low: {
      main: "#7FFF00"
    },

    cancel: {
      main: "#C0C0C0"
    },

    logo: dark_logo,

    backgroundPaperGradient:
      "linear-gradient(to bottom right, #c9e1f5, #0860c4)",

    mainCardColor: blue[100],

    boxShadow: 13,

    containerComponent: "#E3F2FD",

    containerComponentShadow: 13,
  },

  typography: {
    fontFamily: "Source Sans Pro",

    fontSize: 12,

    color: "#000000",

    whiteSpace: "pre-wrap",
  },
});

LightTheme = createTheme(LightTheme, {
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        colorPrimary: {
          color: grey[900],
        },

        colorAction: {
          color: blue[400],
        },
      },
    },

    MuiDataGrid: {
      styleOverrides: {
        row: {
          "&:nth-of-type(even)": {
            backgroundColor: "#D6E4F0",
          },
        },
        columnHeader: {
          backgroundColor: "#66aeff",
          color: "#FFFFFF",
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        head: {
          backgroundColor: grey[700],
          color: "white",
        },
      },
    },

    MuiDialog: {
      styleOverrides: {
        paperFullScreen: {
          background: blue[100],
        },
        paperWidthLg: {
          minWidth: "600px"
        },
      },
    },

    MuiDialogTitle: {
      styleOverrides: {
        root: {
          color: blue[900],
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          color: grey[900],
        },
      },
    },

    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor:
            //  "#66aeff"
            "#FFFFFF"
          ,
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#E3F2FD",
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
          fontFamily: "Source Sans Pro",
          color: "#000000",
          whiteSpace: "pre-wrap",
        },

        h5: {
          color: "#000000",

          whiteSpace: "pre-wrap",
        },

        h6: {
          color: "#FFFFFF",
        },

        body1: {
          color: "#000000",

          whiteSpace: "pre-wrap",
        },

        body2: {
          color: "#000000",

          "&:hover": {
            color: grey[900],
          },
        },

        body3: {
          color: "#ffffff",
        },
      },
    },

    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: blue[200],
          },
        },
      },
    },

    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: grey[900],
          selected: {
            backgroundColor: "#2e2e38",
          },
        },
      },
    },

    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: "#0D47A1",//blue[900],
          color: grey[900],
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        containedPrimary: {

          backgroundColor: blue[600],

          color: "#FFFFFF",

          "&:hover": {
            backgroundColor: blue[300],
            color: "#000000",
          },
        },

        textInherit: {
          color: grey[900],
          "&:hover": {
            backgroundColor: blue[300],
          },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          color: grey[900],
          fontSize: 20,
          "&:hover": {
            background: blue[100],
          },
        },
      },
    },
  },
});

export default LightTheme;
