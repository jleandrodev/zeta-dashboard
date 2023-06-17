import "@/styles/globals.css";
import TasksResults from "@/ui/components/data-display/charts/TasksResults";
import ResponsiveDrawer from "@/ui/components/surfaces/Drawer/ResponsiveDrawer";
import theme from "@/ui/themes/theme";
import { Box, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Zeta Dashboard</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        {/* eslint-disable @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Open+Sans:wght@400;600;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <ResponsiveDrawer>
          <Component {...pageProps} sx={{ backgroundColor: "#2E3356" }} />
        </ResponsiveDrawer>
      </ThemeProvider>
    </>
  );
}
