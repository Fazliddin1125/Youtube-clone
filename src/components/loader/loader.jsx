import { Box, Stack, CircularProgress } from  '@mui/material'

const Loader = () => {
  return (
   <Box>
     <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} height={"100%"} display={"flex"} >
        <CircularProgress/>
     </Stack>
   </Box>
  )
}

export default Loader