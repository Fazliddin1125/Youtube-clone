import React from 'react'
import { logo } from '../../constants'
import { Stack, Box } from "@mui/material"
import { colors } from "../../constants/color"
import {SearchBar} from "../"
const Navbar = () => {

  return(
    <Stack 
        direction={"row"} 
        alignItems={"center"} 
        justifyContent={"space-between"} 
        p={2} 
        sx={{position: "static", top: 0, zIndex: 999, background: colors.primary}} 
    >
        <img src={logo} alt='logo' height={70} width={80} />
        <SearchBar/>
        <Box/>
    </Stack>
  ) 
    
}

export default Navbar