import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#1B203E",
      main: "#1B203E",
      dark: "#1B203E",
    },
    secondary: {
      light: "#2bfff2",
      main: "#02E7D9",
      dark: "#1dd6cb",
    },
    text: {
      primary: "#F0F0F0",
      secondary: "#D7D9DD",
    },
    error: {
      main: "#FC3C00",
    },
    warning: {
      main: "#FCA600",
    },
    success: {
      main: "#00D34D",
    },
    grey: {
      50: "#FAFAFA",
      100: "#F0F0F0",
      200: "#D7D9DD",
      300: "#C4C4C4",
      400: "#9B9B9B",
    },
  },
  typography: {
    fontFamily: "Poppins",
  },
  shape: {},
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "secondary" },
          style: {
            color: "white",
          },
        },
      ],
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0px 0px 39px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#1B203E",
        },
      },
    },
  },
});

export default theme;
