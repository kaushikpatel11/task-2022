/**
 * @format
 */

import { createTheme } from "@mui/material";
import React from "react";

export const defaultTheme = createTheme({
     palette: {
          primary: {
               main: "#F8BD32",
          },
          success: {
               main: "#27B361",
          },
     },
     components: {
          MuiInputBase: {
               styleOverrides: {
                    root: {
                         border: 0,
                    },
               },
          },
          MuiTextField: {
               styleOverrides: {
                    root: {
                         border: 0,
                    },
               },
               defaultProps: {
                    style: {
                         border: 0,
                    },
               },
          },
          MuiButton: {
               defaultProps: {
                    style: {
                         borderRadius: 100,
                         gap: 15,
                         textTransform: "capitalize",
                    },
               },
          },
     },
     typography: {
          fontFamily: ["Circular-Std-Font", "sans-serif"].join(", "),
          allVariants: {
               fontWeight: "bold",
               textTransform: "uppercase",
               color: "#555555",
          },
     },
});
