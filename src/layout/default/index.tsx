/**
 * @format
 */

import { Box, useTheme } from "@mui/material";
import React, { FC } from "react";

export const DefaultTheme: FC = ({ children }) => {
     const { spacing, palette } = useTheme();
     return (
          <Box
               component="section"
               sx={{
                    display: "flex",
                    flexDirection: "row",
                    height: "100vh",
               }}
          >
               <Box
                    component="div"
                    sx={{ width: spacing(8), backgroundColor: palette.primary.main }}
                    display="flex"
                    justifyContent="center"
               >
                    <img
                         src="https://media.istockphoto.com/vectors/flat-hexagonal-cube-rocket-launching-technology-logo-brand-identity-vector-id1227650500?k=20&m=1227650500&s=612x612&w=0&h=HdOfo97yCCUTKfhcdrVk31gUdZCyEDP86zL3QHi5BeY="
                         height={60}
                         width={60}
                         style={{ marginTop: 2, borderRadius: 200 }}
                         alt="website_logo"
                    />
               </Box>
               <Box
                    component="main"
                    sx={{
                         flex: 1,
                         display: "flex",
                         flexDirection: "column",
                         justifyContent: "center",
                         overflow: "hidden",
                    }}
               >
                    {children}
               </Box>
          </Box>
     );
};
