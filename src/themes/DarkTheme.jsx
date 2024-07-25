import { createTheme } from "@mui/material/styles";
import dark_logo from "../images/logo2.png";
import {
  yellow,
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
      main: yellow[500],
    },

    secondary: {
      main: "#FFFFFF",
    },

    tertiary: {
      main: "#FFFFFF"
    },

    background: {
      // default: "#2E2E38",
      default: grey[900],
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
      "linear-gradient(to bottom right,#000000, #4a4949)",

    mainCardColor: "#181818",

    boxShadow: "0 1px 15px 1px grey",

    // containerComponent: "#1a1a24",
    containerComponent: "#000000",

    // containerComponentShadow: "0 1px 6px 1px #ffeb3b",

    containerComponentShadow: 13,
  },

  typography: {
    fontFamily: "EYInterstate",

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
          color: yellow[500],
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
            backgroundColor: "#383838",
          },
          "&:nth-of-type(even)": {
            backgroundColor: "#181818",
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
          backgroundColor: "#383838",
          color: "white",
        },
      },
    },

    MuiDialog: {
      styleOverrides: {
        paperFullScreen: {
          background: "#2E2E38",
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
          backgroundColor: grey[750],
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#282828",
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
          color: yellow[500],

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
          color: yellow[500],
          selected: {
            backgroundColor: "#2e2e38",
          },
        },
      },
    },

    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: grey[800],
          color: "#000",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          //used

          backgroundColor: "#fbc02d",

          color: "#000000",

          "&:hover": {
            backgroundColor: "#f57f17",
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
            color: yellow[500],
            boxShadow: "0 1px 15px 1px yellow",
          },
        },
      },
    },
  },
});

export default DarkTheme;
