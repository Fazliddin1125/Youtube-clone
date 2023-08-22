import React from 'react'
import { Stack, Box } from '@mui/material'
import { VideoCard, ChannelCard, Loader } from '../'
const Videos = ({ videos }) => {
if( !videos?.length )  return <Loader/>

  return(
    <Stack 
    
    direction={'row'}
    flexWrap={'wrap'} 
    alignItems={'center'}
    gap={2} 
    width={"100%"}
    >
      {videos?.map((item, index)=>(
        <Box key={index} >
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard video={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos