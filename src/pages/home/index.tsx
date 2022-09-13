/**
 * @format
 */

import React from "react";

import { Email, FilterAlt, Login } from "@mui/icons-material";
import { Box, Button, InputAdornment, TextField, Typography, useTheme } from "@mui/material";
import { FaGooglePlus, FaLinkedin, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DefaultTheme } from "../../layout";
import { MdContacts } from "react-icons/md";

interface carouselDataProps {
     title: string;
     Icon: JSX.Element;

     description?: string;
}

export const Home = () => {
     const { spacing, palette, shadows } = useTheme();

     const carouselData: carouselDataProps[] = [
          {
               Icon: <MdContacts size={75} color={palette.primary.main} />,
               title: "workpi data profile",
               description:
                    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fugit repudiandae  fugiat reiciendis sed officiis!",
          },
     ];
     return (
          <DefaultTheme>
               <Box display="flex" flexDirection="row" gap={spacing(10)} alignItems="center" flexWrap="wrap-reverse">
                    <Box
                         component="div"
                         sx={{
                              display: "flex",
                              flexDirection: "column",
                              gap: spacing(5),
                              padding: spacing(5),
                         }}
                         width="30%"
                    >
                         <Typography sx={{ whiteSpace: "pre-wrap" }} variant="h4" gutterBottom>
                              hello!{"\n"}welcome back
                         </Typography>

                         <Box component="div" display="flex" flexDirection="column" gap={spacing(3)}>
                              <Box
                                   component="div"
                                   display="flex"
                                   flexDirection="row"
                                   justifyContent="center"
                                   gap={spacing(3)}
                                   width="60%"
                                   px={spacing(10)}
                              >
                                   <FaGooglePlus size={30} color={palette.grey[500]} />
                                   <FaLinkedin size={30} color={palette.grey[500]} />
                              </Box>
                              <TextField
                                   placeholder="E-mail"
                                   variant="outlined"
                                   fullWidth
                                   inputProps={{
                                        startAdornment: (
                                             <InputAdornment position="start">
                                                  <Login />
                                             </InputAdornment>
                                        ),
                                        style: {
                                             borderRadius: spacing(2),
                                             boxShadow: shadows[5],
                                             paddingTop: 10,
                                             paddingBottom: 10,
                                        },
                                   }}
                              />
                              <TextField
                                   placeholder="Password"
                                   fullWidth
                                   inputProps={{
                                        startAdornment: <Email fontSize="large" color="primary" />,
                                        style: {
                                             borderRadius: spacing(2),
                                             boxShadow: shadows[5],
                                             paddingTop: 10,
                                             paddingBottom: 10,
                                        },
                                   }}
                              />
                              <Box display="flex" flexDirection="row" justifyContent="end">
                                   <Typography variant="caption" textTransform="capitalize">
                                        <Link style={{ color: palette.grey[500], textDecoration: "none" }} to="/">
                                             Forgot your password?
                                        </Link>
                                   </Typography>
                              </Box>
                              <Box component="div" display="flex" flexDirection="row" gap={spacing(3)}>
                                   <Button
                                        fullWidth
                                        variant="contained"
                                        size="large"
                                        color="primary"
                                        startIcon={<Login />}
                                   >
                                        Login
                                   </Button>
                                   <Button
                                        fullWidth
                                        variant="outlined"
                                        size="large"
                                        color="primary"
                                        startIcon={<FaUserPlus color={palette.primary.main} />}
                                   >
                                        register
                                   </Button>
                              </Box>
                         </Box>
                    </Box>
                    <Box
                         component="div"
                         sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: spacing(5),
                              position: "relative",
                              zIndex: 20,
                         }}
                         zIndex={20}
                         flex={1}
                    >
                         {carouselData.map(({ Icon, title, description }) => (
                              <Box
                                   component="div"
                                   bgcolor="#fff"
                                   borderRadius={spacing(2)}
                                   boxShadow={shadows[15]}
                                   p={spacing(3)}
                                   width={300}
                                   display="flex"
                                   flexDirection="column"
                                   alignItems="center"
                                   gap={spacing(3)}
                              >
                                   <Typography textTransform="uppercase" variant="h5">
                                        {title}
                                   </Typography>
                                   {Icon}
                                   <Typography
                                        variant="caption"
                                        component="p"
                                        textAlign="center"
                                        color={palette.grey[700]}
                                   >
                                        {description}
                                   </Typography>
                              </Box>
                         ))}
                         <div className="triangle"></div>
                         <div className="triangle2"></div>
                    </Box>
               </Box>
          </DefaultTheme>
     );
};
