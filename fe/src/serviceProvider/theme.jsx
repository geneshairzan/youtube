import * as React from "react";
import { createTheme, ThemeProvider, responsiveFontSizes, StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Context from "@/serviceProvider/context";

export default function CustomStyles(props) {
  const { app } = React.useContext(Context);

  const color = {
    mode: app.theme,
    primary: {
      main: "#272a33",
      dark: "#191d26",
    },
    secondary: {
      main: "#ffa229",
    },

    third: {
      main: "#f24f09",
    },

    white: {
      main: "#fff",
      dark: "#fff",
      light: "#fff",
    },

    error: {
      main: "#e63946",
    },
    d: {
      r: "#9d0208",
      b: "#1e6091",
      g: "#52b69a",
    },

    grey: {
      a: "#9c9fac",
      b: "#575960",
      c: "#35363a",
    },

    cv: {
      blue: "#2f4858",
      red: "#ee6c4d",
    },
  };

  const themeSetup = createTheme({
    palette: color,
    typography: {
      fontSize: 12,
    },
    components: {
      MuiTable: {
        styleOverrides: {
          root: {
            margin: "0 18px",
            width: "calc(100% - 36px)",
          },
        },
      },

      MuiTableCell: {
        styleOverrides: {
          root: {
            padding: "0 8px",
          },
          head: {
            button: {
              color: color.primary.main,
              fontWeight: "500",
              textTransform: "uppercase",
            },
          },
        },
      },

      MuiAppBar: {},

      MuiTextField: {
        defaultProps: {
          size: "small",
          autoComplete: "new-password",
          inputProps: {
            autoComplete: "new-password",
            form: {
              autoComplete: "new-password",
            },
          },
        },
      },

      MuiButton: {
        defaultProps: {
          variant: "contained",
          color: "primary",
          className: "f-capitalize",
        },
        styleOverrides: {
          containedSecondary: {
            fontWeight: "bold",
            color: app.theme === "dark" ? color.primary.main : color.primary.main,
          },
          containedOrange: {
            color: "white",
          },
          containedSuccess: {
            color: "white",
          },
        },
      },

      MuiTypography: {
        defaultProps: {
          body1: {
            color: "initial",
          },
          body2: {
            color: "initial",
          },
          variantMapping: {
            h1: "h1",
            h2: "h2",
            h3: "h3",
            h4: "h4",
            h5: "h5",
            h6: "h6",
            subtitle1: "p",
            subtitle2: "p",
            caption: "p",
            body1: "p",
            body2: "p",
            overline: "p",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={responsiveFontSizes(themeSetup)}>
      <CssBaseline />
      <StyledEngineProvider injectFirst>{props.children}</StyledEngineProvider>
    </ThemeProvider>
  );
}
