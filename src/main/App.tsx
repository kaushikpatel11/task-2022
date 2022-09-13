/**
 * @format
 */

import React from "react";

import { ThemeProvider } from "@mui/material";
import { defaultTheme } from "../theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages";

export default function App() {
     return (
          <ThemeProvider theme={defaultTheme}>
               <BrowserRouter>
                    <Routes>
                         <Route path="/" element={<Home />} />
                    </Routes>
               </BrowserRouter>
          </ThemeProvider>
     );
}
