import React from "react";
import ReactDOM from 'react-dom/client';
import { App } from "./App";
import "@fontsource/roboto/500.css";
import "./index.css"
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
const theme = createTheme({
    palette: {
        primary:{
            main: '#bda85e',
            light: '#bda85e',
            dark: '#bda85e',
            contrastText: '#fff',
        },
        mode:'dark',
    }
})
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <App />
        </ThemeProvider>
    </React.StrictMode>
)